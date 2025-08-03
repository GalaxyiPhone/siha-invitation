<script lang="ts">
	import { browser } from '$app/environment';
	import { Confetti } from 'svelte-confetti';
	import { base } from '$app/paths';

	const maxSectionHeight = 900;
	let sectionHeight = $state(maxSectionHeight);

	function setSectionHeight() {
		sectionHeight = window.innerHeight < maxSectionHeight ? window.innerHeight : maxSectionHeight;
	}

	if (browser && window.matchMedia('(max-width: 1024px)')) {
		setSectionHeight();
	}

	const backgroundImageStyle = $derived(`
		background-image: 
			linear-gradient(to top, rgba(255, 255, 255, 0.7) 0%, transparent 30%),
			url('${base}/assets/cover.jpg');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
	`);
</script>

<section style:height={`${sectionHeight}px`} style={backgroundImageStyle} class="cover">
	<div class="confetti-area">
		<Confetti
			x={[-5, 5]}
			y={[0, 0.1]}
			colorArray={['#588adb', '#f5e298', '#fff', '#9aa3f5']}
			delay={[500, 2000]}
			infinite
			duration={5000}
			amount={70}
			fallDistance={`${sectionHeight}px`}
		/>
	</div>



	<div class="cover-title-container">
		<div class="names-en-box">
			<span class="names en-sacramento">Siha's 1st Birthday</span>
		</div>

		<div class="event-date-and-place-box">
			<span class="event-date-and-time kr">2025년 8월 9일 (토) 오후 4시 30분</span>
			<span class="event-place kr">효종당 (경기도 용인시 기흥구)</span>
		</div>
	</div>
</section>

<style lang="scss">
	section.cover {
		position: relative;
	}
	.confetti-area {
		position: absolute;
		top: -50px;
		left: -50px;
		height: 100vh;
		width: 100%;
		overflow: hidden;
		pointer-events: none;
	}


	.cover-title-container {
		width: 100%;
		position: absolute;
		top: 3em;
		left: 50%;
		transform: translateX(-50%);
	}

	.names-en-box {
		width: 100%;
		display: flex;
		justify-content: center;

		span.names {
			display: block;
			color: #000;
			word-spacing: 5px;
			font-size: 2.2rem;
		}
	}

	.event-date-and-place-box {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		span.event-date-and-time,
		span.event-place {
			display: block;
			color: #000;

			&.kr {
				font-size: 1rem;
			}

			&.en {
				font-size: 1.4rem;
			}
		}

		span.event-date-and-time.kr {
			margin-bottom: 0.4em;
		}
	}
</style>
