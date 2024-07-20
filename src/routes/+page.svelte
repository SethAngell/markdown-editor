<script lang="ts">
	import MarkdownEditor from '$lib/components/MarkdownEditor.svelte';

	function uploadFile(file: File): Promise<URL> {
		try {
			const url = URL.createObjectURL(file);
			return Promise.resolve(new URL(url));
		} catch (error) {
			return Promise.reject(error);
		}
	}
</script>

<div class="flex min-h-full min-w-full flex-col items-center justify-center">
	<h1>Hello</h1>
	<div class="w-11/12">
		<MarkdownEditor fileUploadCallback={uploadFile}></MarkdownEditor>
	</div>
</div>
