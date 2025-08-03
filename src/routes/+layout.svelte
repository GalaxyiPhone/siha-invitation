<script lang="ts">
	import '/src/styles/global.scss';
	import { onMount } from 'svelte';

	let { children } = $props();

	let title = '시하의 첫 돌';
	onMount(() => {
		document.body.classList.add('loaded');
	});
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Noto+Serif+KR:wght@200..900&family=Sacramento&display=swap"
	/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
	/>
	<meta property="og:title" content="시하의 첫 돌" />
	<meta property="og:description" content="우리 시하의 돌잔치에 초대합니다!" />
	<meta property="og:image" content="/preview.jpg" />
	<meta property="og:url" content="/" />
	<meta property="og:type" content="website" />
</svelte:head>

{@render children()}

<style lang="scss">
</style>
