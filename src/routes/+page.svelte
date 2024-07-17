<script lang="ts">
	import { marked } from 'marked';

	let edit: Boolean = true;
	let mdText: string;
	let renderedText: string = '';

	function showEdit() {
		edit = true;
	}
	async function showPreview() {
		if (mdText) {
			renderedText = await marked.parse(mdText);
		}

		edit = false;
	}
</script>

<div class="flex min-h-full min-w-full flex-col items-center justify-center">
	<h1>Hello</h1>
	<div id="editor" class="w-11/12">
		<div id="tabs" class="flex w-full flex-row border-2 border-slate-900">
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
		<div id="blocks" class="w-full">
			{#if edit}
				<textarea
					id="edit-pane"
					class="w-full resize-none rounded-b-sm border-2 border-t-0 border-slate-900 p-2 font-mono focus:outline-none"
					cols="120"
					rows="30"
					bind:value={mdText}
				></textarea>
			{:else}
				<div id="preview-pane" class="prose h-full w-full p-2">{@html renderedText}</div>
			{/if}
		</div>
	</div>
</div>
