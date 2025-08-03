<script lang="ts">
	import photo0_1 from '$lib/assets/gallery/0_1.jpg';
	import photo0_2 from '$lib/assets/gallery/0_2.jpg';
	import photo0_3 from '$lib/assets/gallery/0_3.jpg';
	import photo2 from '$lib/assets/gallery/2.jpg';
	import photo3 from '$lib/assets/gallery/3.jpg';
	import photo4 from '$lib/assets/gallery/4.jpg';
	import photo5 from '$lib/assets/gallery/5.jpg';
	import photo6 from '$lib/assets/gallery/6.jpg';
	import photo7 from '$lib/assets/gallery/7.jpg';
	import photo8 from '$lib/assets/gallery/8.jpg';
	import photo9 from '$lib/assets/gallery/9.jpg';
	import photo10 from '$lib/assets/gallery/10.jpg';

	import PhotoSwipeLightBox from 'photoswipe/lightbox';
	import PhotoSwipe from 'photoswipe';
	import 'photoswipe/style.css';
	import { onMount } from 'svelte';


	onMount(() => {
		// 이미지 크기를 미리 로드하고 data 속성 설정
		const galleryLinks = document.querySelectorAll('#gallery a');
		const loadPromises = Array.from(galleryLinks).map((link, index) => {
			return new Promise((resolve) => {
				const img = new Image();
				img.onload = () => {
					link.setAttribute('data-pswp-width', img.naturalWidth.toString());
					link.setAttribute('data-pswp-height', img.naturalHeight.toString());
					resolve();
				};
				img.onerror = () => {
					// 에러 시 기본값 설정
					link.setAttribute('data-pswp-width', '1200');
					link.setAttribute('data-pswp-height', '800');
					resolve();
				};
				img.src = link.href;
			});
		});

		// 모든 이미지 크기가 로드된 후 PhotoSwipe 초기화
		Promise.all(loadPromises).then(() => {
			const lightbox = new PhotoSwipeLightBox({
				gallery: '#gallery',
				children: 'a',
				showHideAnimationType: 'fade',
				pswpModule: PhotoSwipe
			});

			lightbox.init();
		});
	});

	const photos = [
		{ src: photo0_1 },
		{ src: photo0_2 },
		{ src: photo0_3 },
		{ src: photo10 },
		{ src: photo2 },
		{ src: photo3 },
		{ src: photo4 },
		{ src: photo5 },
		{ src: photo6 },
		{ src: photo7 },
		{ src: photo8 },
		{ src: photo9 }
	];
</script>

<section class="gallery">
	<div class="header">
		<h2 class="title kr">사진 모음</h2>
		<p class="sub-title kr">사진을 탭하면 더 크게 볼 수 있습니다.</p>
	</div>
	<div id="gallery">
		{#each photos as photo}
			<a
				href={photo.src}
				class="slide"
				target="_blank"
			>
				<img class="thumbnail" src={photo.src} alt="" />
			</a>
		{/each}
	</div>
</section>

<style lang="scss">
	section.gallery {
		padding: 4.5em 2em 2em 2em;
		background-color: $white;
	}

	.header {
		margin-bottom: 2em;
	}

	h2.title {
		text-align: center;
		&.en {
			@extend .title-font-en;
			letter-spacing: 1px;
		}

		&.kr {
			@extend .title-font-kr;
			letter-spacing: 1px;
		}
	}

	p.sub-title {
		text-align: center;
		&.kr {
			margin-top: 0.9em;
			font-size: 0.9rem;
		}

		&.en {
			margin-top: 0.5em;
			font-size: 1.2rem;
		}
	}

	#gallery {
		display: grid;
		gap: 1em;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: auto;
	}

	.slide {
		display: block;
		width: 100%;
	}

	img.thumbnail {
		border-radius: 4px;
		width: 100%;
		height: auto;
		object-fit: contain;
		display: block;
		opacity: 0.75;
		transition: opacity 0.3s ease;
	}

	.slide:hover img.thumbnail {
		opacity: 1;
	}
</style>
