<script setup lang="ts">
	defineProps({
		title: { type: String, default: '' },
	})
</script>

<template>
	<header
		v-if="$nav.currentLayout !== 'cover'"
		class="absolute top-0 left-0 right-0 pt-2 pl-14 text-left"
	>
		<h1 class="h1">{{ title }}</h1>
	</header>
	<div style="height: 2rem;"></div>
</template>

<style>
	.h1 {
		color: #3caa3c !important;
	}
</style>
