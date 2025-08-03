<script lang="ts">
	import { base } from '$app/paths';

	// 2025년 8월 달력 생성
	const year = 2025;
	const month = 8; // 8월 (0-based이므로 7이 아니라 8)
	const targetDate = 9; // 9일에 동그라미 표시

	// 해당 월의 첫 번째 날과 마지막 날
	const firstDay = new Date(year, month - 1, 1);
	const lastDay = new Date(year, month, 0);
	
	// 첫 번째 날의 요일 (0: 일요일, 1: 월요일, ...)
	const firstDayOfWeek = firstDay.getDay();
	// 해당 월의 총 일수
	const daysInMonth = lastDay.getDate();

	// 달력 배열 생성 (6주 x 7일 = 42일)
	const calendarDays: (number | null)[] = [];
	
	// 이전 달의 빈 날짜들
	for (let i = 0; i < firstDayOfWeek; i++) {
		calendarDays.push(null);
	}
	
	// 이번 달의 날짜들
	for (let day = 1; day <= daysInMonth; day++) {
		calendarDays.push(day);
	}
	
	// 다음 달의 빈 날짜들 (전체 42칸을 채우기 위해)
	while (calendarDays.length < 42) {
		calendarDays.push(null);
	}

	// 주 단위로 분할
	const weeks: (number | null)[][] = [];
	for (let i = 0; i < 6; i++) {
		weeks.push(calendarDays.slice(i * 7, (i + 1) * 7));
	}

	const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
</script>

<section class="calendar">
	<h2 class="title en">August 2025</h2>
	<div class="calendar-content">
		<div class="calendar-grid">
			<!-- 요일 헤더 -->
			<div class="weekdays">
				{#each weekDays as day}
					<div class="weekday">{day}</div>
				{/each}
			</div>
			
			<!-- 날짜 그리드 -->
			<div class="days-grid">
				{#each weeks as week}
					<div class="week-row">
						{#each week as day}
							<div class="day-cell">
								{#if day}
									<span class="day-number" class:highlighted={day === targetDate}>
										{day}
									</span>
								{/if}
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>
	<img class="calendar-deco" src="{base}/assets/calendar-deco.svg" alt="calendar deco" />
</section>

<style lang="scss">
	.calendar {
		position: relative;
		background-color: $white;
		padding: 2em 3.5em 4em 3.5em;

		.title {
			@extend .title-font-en;
			text-align: center;
			margin-bottom: 1em;
		}

		.calendar-content {
			.calendar-grid {
				max-width: 400px;
				margin: 0 auto;

				.weekdays {
					display: grid;
					grid-template-columns: repeat(7, 1fr);
					margin-bottom: 0.5em;

					.weekday {
						text-align: center;
						font-weight: 600;
						padding: 0.5em;
						color: $primary-color;
						border-bottom: 2px solid $primary-color;
					}
				}

				.days-grid {
					.week-row {
						display: grid;
						grid-template-columns: repeat(7, 1fr);

						.day-cell {
							aspect-ratio: 1;
							display: flex;
							align-items: center;
							justify-content: center;
							border: 1px solid #eee;
							overflow: hidden;

							.day-number {
								display: flex;
								flex-direction: column;
								align-items: center;
								justify-content: center;
								width: 2em;
								height: 2em;
								border-radius: 50%;
								position: relative;
								
								&.highlighted {
									background-color: $primary-color;
									color: white;
									font-weight: bold;
									animation: pulse 2s infinite;
									width: 2.5em;
									height: 2.5em;
									
									.time-indicator {
										font-size: 0.45em;
										margin-top: 1px;
										font-weight: normal;
										opacity: 0.9;
										white-space: nowrap;
										line-height: 1;
									}
								}
							}
						}
					}
				}
			}
		}

		img.calendar-deco {
			position: absolute;
			bottom: 0.5em;
			right: 2.5em;
		}

		// 모바일 대응
		@media (max-width: 768px) {
			padding: 1.5em 1.5em 3em 1.5em;

			.title {
				font-size: 1.5em;
				margin-bottom: 0.8em;
			}

			.calendar-content {
				.calendar-grid {
					max-width: 100%;

					.weekdays {
						.weekday {
							padding: 0.3em;
							font-size: 0.9em;
						}
					}

					.days-grid {
						.week-row {
							.day-cell {
								.day-number {
									width: 1.8em;
									height: 1.8em;
									font-size: 0.9em;
									
									&.highlighted {
										width: 2.2em;
										height: 2.2em;
										
										.time-indicator {
											font-size: 0.4em;
											margin-top: 0.5px;
										}
									}
								}
							}
						}
					}
				}
			}

			img.calendar-deco {
				bottom: 0.3em;
				right: 1em;
				width: 80px;
			}
		}

		@media (max-width: 480px) {
			padding: 1em 1em 2.5em 1em;

			.title {
				font-size: 1.3em;
			}

			.calendar-content {
				.calendar-grid {
					.weekdays {
						.weekday {
							padding: 0.2em;
							font-size: 0.8em;
						}
					}

					.days-grid {
						.week-row {
							.day-cell {
								.day-number {
									width: 1.6em;
									height: 1.6em;
									font-size: 0.8em;
									
									&.highlighted {
										width: 2em;
										height: 2em;
										
										.time-indicator {
											font-size: 0.35em;
											margin-top: 0;
										}
									}
								}
							}
						}
					}
				}
			}

			img.calendar-deco {
				width: 60px;
			}
		}
	}

	@keyframes pulse {
		0%, 100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
	}
</style>
