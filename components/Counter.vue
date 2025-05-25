<script setup lang="ts">
	defineProps({
		value: { type: Number, required: true },
	})
</script>

<template>
	<div :class="$style.counter">
		<div>{{ value }}</div>
	</div>
</template>

<style lang="css" module>
	.counter {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
