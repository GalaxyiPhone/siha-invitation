<script lang="ts">
	import '/src/styles/global.scss';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	let { children } = $props();

	let title = '시하 돌잔치 초대장';
	let description = '시하의 소중한 첫 번째 생일을 함께 축하해주세요! 2025년 8월 9일 오후 4시 30분, 따뜻한 마음으로 초대합니다.';
	
	onMount(() => {
		document.body.classList.add('loaded');
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content="돌잔치, 시하, 첫 돌, 생일파티, 초대장, 돌상, 2025" />
	<meta name="author" content="시하 가족" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="시하 돌잔치 초대장" />
	<meta property="og:description" content="시하의 소중한 첫 번째 생일을 함께 축하해주세요! 2025년 8월 9일 오후 4시 30분, 따뜻한 마음으로 초대합니다." />
	<meta property="og:image" content="{base}/preview.jpg" />
	<meta property="og:url" content="{base || '/'}" />
	<meta property="og:site_name" content="시하 돌잔치" />
	<meta property="og:locale" content="ko_KR" />
	
	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="시하 돌잔치 초대장" />
	<meta name="twitter:description" content="시하의 소중한 첫 번째 생일을 함께 축하해주세요! 2025년 8월 9일 오후 4시 30분, 따뜻한 마음으로 초대합니다." />
	<meta name="twitter:image" content="{base}/preview.jpg" />
	
	<!-- Fonts -->
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
</svelte:head>

{@render children()}

<style lang="scss">
</style>
