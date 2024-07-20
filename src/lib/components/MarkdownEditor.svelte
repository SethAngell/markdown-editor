<script lang="ts">
	import { marked } from 'marked';
	import FileUpload from '$lib/components/FileUpload.svelte';
	import { onMount } from 'svelte';
	import { validateKeyboardEvents } from '$lib/services/A11YHelper';

	export let initialContent: string = '';
	export let fileUploadCallback: (file: File) => Promise<URL>;
	export let photoCollection: URL[] = new Array<URL>();

	let edit: Boolean = true;
	let mdText: string;
	let renderedText: string = '';
	let textCanvas: HTMLTextAreaElement;

	onMount(() => {
		if (initialContent) {
			mdText = initialContent;
		}
	});

	function showEdit(event: Event) {
		if (!validateKeyboardEvents(event)) {
			return;
		}
		edit = true;
	}

	async function showPreview(event: Event) {
		if (!validateKeyboardEvents(event)) {
			return;
		}

		if (mdText) {
			renderedText = await marked.parse(mdText);
		}

		edit = false;
	}

	async function handleNewImage(event: CustomEvent) {
		const url: string = event.detail.url;
		const markdownUrl: string = `\n![ADD ALT TEXT HERE](${url})\n`;

		const startPosition = textCanvas.selectionStart;
		const endPosition = textCanvas.selectionEnd;

		if (textCanvas.selectionStart || textCanvas.selectionStart == 0) {
			textCanvas.value =
				textCanvas.value.substring(0, startPosition) +
				markdownUrl +
				textCanvas.value.substring(endPosition, textCanvas.value.length);
		} else {
			textCanvas.value = markdownUrl;
		}

		mdText = textCanvas.value;
	}
</script>

<div id="editor" class="w-full">
	<div id="tabs" class="space-between flex w-full flex-row border-2 border-slate-900 pr-2">
		<div class="flex w-full flex-row">
			<span
				class="border-r-2 border-slate-900 p-2 {edit ? 'bg-slate-900 text-slate-50' : ''}"
				role="button"
				tabindex="0"
				on:keydown={showEdit}
				on:click={showEdit}>Edit</span
			>
			<span
				class="border-r-2 border-slate-900 p-2 {edit ? '' : 'bg-slate-900 text-slate-50'}"
				role="button"
				tabindex="0"
				on:keydown={showEdit}
				on:click={showPreview}>Preview</span
			>
		</div>
		<FileUpload {fileUploadCallback} on:upload={handleNewImage}></FileUpload>
	</div>
	<div id="blocks" class="w-full">
		{#if edit}
			<textarea
				id="edit-pane"
				class="w-full resize-none rounded-b-sm border-2 border-t-0 border-slate-900 p-2 font-mono focus:outline-none"
				cols="120"
				rows="30"
				bind:value={mdText}
				bind:this={textCanvas}
			></textarea>
		{:else}
			<div
				id="preview-pane"
				class="mx-auto flex h-full w-full flex-row items-center justify-center rounded-b-sm border-2 border-t-0 border-slate-900 p-2"
			>
				<div id="output" class="prose">{@html renderedText}</div>
			</div>
		{/if}
	</div>
</div>

<style>
	@import './prod.css';
</style>
