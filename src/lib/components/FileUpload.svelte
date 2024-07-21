<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let fileUploadCallback: Function;
	const dispatch = createEventDispatcher();
	let fileInput: HTMLInputElement;

	async function handleUpload() {
		if (fileInput.files) {
			const file = fileInput.files[0];
			const url = await fileUploadCallback(file);
			console.log(url);
			dispatch('upload', {
				url: url
			});
		}
		fileInput.value = '';
	}
</script>

<input
	type="file"
	id="file-upload"
	bind:this={fileInput}
	on:change={handleUpload}
	accept="image/png, image/jpeg, image/heic"
	hidden
/>

<label for="file-upload" class="upload-button" tabindex="0">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
		><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
			d="M288 109.3L288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-242.7-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352l128 0c0 35.3 28.7 64 64 64s64-28.7 64-64l128 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
		/></svg
	>
</label>

<style>
	.upload-button {
		@apply flex w-6 flex-col items-center justify-center fill-slate-600 hover:fill-slate-900 focus:fill-slate-900;
	}
</style>
