<script setup lang="ts">
	defineProps({
		label: { type: String, required: true },
		store: { type: Object, required: true },
	})
</script>

<template>
	<div class="container">
		<div class="label">
			{{ label }}
		</div>
	</div>
</template>

<style scoped>
	.container {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
