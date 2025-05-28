<script setup lang="ts">
	defineProps({
		title: { type: String, default: '' },
		cat: { type: String, default: '' },
		lang: { type: String, default: '' },
	})
</script>

<template>
	<header
		v-if="$nav.currentLayout !== 'cover'"
		class="absolute top-0 left-0 right-0 pt-2 pl-14 text-left"
	>
		<div class="h1">
			<img v-if="lang === 'vue'" src="/images/vue.svg" class="vue" />
			<img v-if="lang === 'svelte'" src="/images/svelte-logo.svg" class="svelte" />
			{{ cat }}{{ cat && title ? ': ' : '' }}
			{{ title }}
		</div>
	</header>
	<div style="height: 1rem;"></div>
</template>

<style>
	.h1 {
		color: #3caa3c !important;
		display: flex;
		align-items: center;
		height: 2rem;
		margin: 0;
		font-size: 2rem;
		gap: 1rem;
	}

	.vue {
		width: 2rem;
		height: 2rem;
	}

	.svelte {
		width: 2rem;
		height: 2rem;
	}
</style>
