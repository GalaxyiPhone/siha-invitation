<script lang="ts">
	import locationTopWave from '$lib/assets/location-top-wave.svg';
	import locationDeco from '$lib/assets/location-deco.svg';

	import { Clipboard, Github } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let mapElement: HTMLDivElement;

	onMount(() => {
		// 네이버 지도 API 로드 확인
		if (typeof window !== 'undefined' && window.naver && window.naver.maps) {
			// 효종당의 대략적인 좌표 (용인시 기흥구)
			const location = new window.naver.maps.LatLng(37.2436, 127.0808);
			
			const mapOptions = {
				center: location,
				zoom: 16,
				mapTypeControl: true,
				mapDataControl: false,
				logoControl: false,
				scaleControl: false
			};

			const map = new window.naver.maps.Map(mapElement, mapOptions);
			
			// 마커 추가
			const marker = new window.naver.maps.Marker({
				position: location,
				map: map,
				title: '효종당'
			});

			// 정보창 추가
			const infoWindow = new window.naver.maps.InfoWindow({
				content: '<div style="padding:10px;font-size:12px;"><strong>효종당</strong><br>경기도 용인시 기흥구</div>'
			});

			// 마커 클릭 시 정보창 표시
			window.naver.maps.Event.addListener(marker, 'click', function() {
				if (infoWindow.getMap()) {
					infoWindow.close();
				} else {
					infoWindow.open(map, marker);
				}
			});
		}
	});

	function copyAddress() {
		navigator.clipboard
			.writeText('경기 용인시 기흥구 동백8로113번길 64')
			.then(() => alert('주소를 복사했습니다.'))
			.catch(() => null);
	}
</script>

<img src={locationTopWave} class="location-top-wave" alt="" />
<section class="location">
	<h2 class="title kr">장소</h2>
	<p class="venue en">효종당</p>
	<button class="copy-address en" onclick={copyAddress}>
		<span class="clipboard-icon">
			<Clipboard size="1.1em" />
		</span>
		<span class="address">경기 용인시 기흥구 동백8로113번길 64</span></button
	>
	<div class="map">
		<div bind:this={mapElement} class="naver-map" id="naverMap"></div>
	</div>
	<img class="location-deco" src={locationDeco} alt="" />
</section>

<style lang="scss">
	img.location-top-wave {
		max-width: $content-max-width;
		margin: auto;
	}

	section.location {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		background-color: $bg-color-1;
		padding: 1em 2em 1em 2em;
	}

	h2.title {
		color: $primary-color;
		text-align: center;
		margin-bottom: 1em;

		&.kr {
			@extend .title-font-kr;
			letter-spacing: 1px;
		}

		&.en {
			@extend .title-font-en;
			letter-spacing: 1px;
		}
	}

	p.venue {
		&.en {
			font-size: 1.1rem;
		}
	}

	button.copy-address {
		display: flex;
		align-items: center;
		margin-top: 0.5em;

		.clipboard-icon {
			height: 1em;
			display: inline-block;
			margin-right: 0.2em;
			color: $font-color-default;
		}

		.address {
			display: inline-block;
			font-size: 0.9rem;
			text-decoration: underline;
		}
	}

	.map {
		margin-top: 2em;
		width: 100%;
		height: 16em;
		margin-bottom: 7em;
	}

	.naver-map {
		width: 100%;
		height: 100%;
		border: none;
		border-radius: 8px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	}

	p.signature {
		font-size: 1rem;
	}
	.github-icon {
		margin-top: 0.2em;
		color: $font-color-default;
		cursor: pointer;
	}

	img.location-deco {
		position: absolute;
		bottom: 2.5em;
		right: 1.5em;
	}
</style>
