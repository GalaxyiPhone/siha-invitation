<script lang="ts">
	import { base } from '$app/paths';


</script>

<section class="letter">
	<div class="header">
		<img class="header-deco" src="{base}/assets/letter-deco.svg" alt="letter header deco" />
		<h2 class="title kr">2025.8.9</h2>
		<p class="sub-title kr">우리 시하의 돌잔치에 초대합니다.</p>
	</div>

	<div class="letter-container">
		<p class="letter kr">소중한 여러분의 사랑과 관심 속에서<br/>우리 시하가 건강하게 첫 번째 생일을 맞이하게 되었습니다.<br/>이 뜻깊은 날을 여러분과 함께 나누고 싶어 돌잔치에 초대합니다.<br/><br/>따뜻한 축복의 마음으로 참석해 주시면 더없이 기쁠 것 같습니다.<br/>그날 뵙기를 손꼽아 기다리고 있겠습니다!</p>


	</div>
</section>

<img class="letter-bottom" src="{base}/assets/letter-bottom.jpg" alt="letter bottom" />

<style lang="scss">
	section.letter {
		padding: 4.5em 3.5em 3em 3.5em;
	}

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 2em;
	}

	img.header-deco {
		width: 12em;
		margin-bottom: 0.8em;
	}

	.title {
		color: $primary-color;
		letter-spacing: 1px;

		&.kr {
			@extend .title-font-kr;
			margin-bottom: 0.4em;
		}

		&.en {
			@extend .title-font-en;
			margin-bottom: 0.2em;
		}
	}

	.sub-title {
		color: $primary-color;
		&.kr {
			font-weight: 500;
			font-size: 1rem;
		}

		&.en {
			font-size: 1.3rem;
			font-weight: 600;
		}
	}

	p.letter {
		text-align: center;
		white-space: pre-line; /* \n을 줄넘김으로 처리 */
		&.kr {
			line-height: 2.3em;
			font-size: 0.9rem;
		}
		&.en {
			line-height: 1.8em;
			font-size: 1.2rem;
		}
	}

	.letter-signature {
		margin-top: 2em;

		p {
			text-align: right;
			font-size: 1.2rem;
		}
	}

	.family-description {
		margin-top: 2em;
		p {
			color: $font-color-default;
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			column-gap: 12px;
			margin-bottom: 20px;
			align-items: center;

			.name-divider {
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.son,
			.daughter {
				display: flex;
				justify-content: center;
				font-size: 12px;
				color: $primary-color;
			}
		}
	}
</style>
