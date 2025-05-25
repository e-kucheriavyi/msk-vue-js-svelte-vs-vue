<script setup lang="ts">
	import { computed } from 'vue'
	import { store } from './services/counter'

	const currentSlide = computed(() => 0)
	const totalSlides = computed(() => {
		let total = 0

		$nav.value.slides.forEach((slide) => {
			console.log(slide)
			total += 1
		})
		return total
	})
</script>

<template>
	<footer
		v-if="$nav.currentLayout !== 'cover'"
		class="footer absolute bottom-0 left-0 right-0 p-2 text-right"
	>
		<!-- <div>
			{{ $slidev.nav.currentLayoutStep }} / {{ $slidev.nav.totalLayoutSteps }}
		</div> -->
		<!-- {{ currentSlide }} / {{ totalSlides }} -->
		{{ $nav.currentPage }} / {{ $nav.total }}
	</footer>
	<!-- <aside
		v-if="$nav.currentLayout !== 'cover'"
		class="sidebar absolute right-0 top-0 bottom-0 p-2 py-10"
	>
		<div class="column">
			<AsideCounter label="Svelte" :store="store.mine.vue"/>
			<AsideCounter label="Vue" :store="store.mine.svelte"/>
		</div>
		<hr class="hr"/>
		<div class="column">
			<AsideCounter label="Svelte" :store="store.msk.vue"/>
			<AsideCounter label="Vue" :store="store.msk.svelte"/>
		</div>
	</aside> -->
</template>

<style scoped>
	.footer {
		z-index: 10;
	}

	.sidebar {
		z-index: 10;
		background: rgba(33, 33, 33, 0.3);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.column {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
	}

	.hr {
		height: 1px;
		width: 100%;
	}
</style>
