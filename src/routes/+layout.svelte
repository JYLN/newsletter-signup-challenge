<script lang="ts">
	import '@fontsource/roboto/400.css';
	import '@fontsource/roboto/700.css';
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Frontend Mentor | Newsletter sign-up form with success message</title>
</svelte:head>

{@render children()}
