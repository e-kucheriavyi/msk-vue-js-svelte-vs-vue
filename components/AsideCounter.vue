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
		<!-- <CounterButton type="cringe" :counter="store.cringe"/>
		<CounterButton type="base" :counter="store.base"/> -->
	</div>
</template>

<style scoped>
	.container {
		flex: 1;
		display: flex;
		flex-direction: column;
		/* gap: 0.5rem; */
		align-items: center;
		justify-content: center;
	}
</style>
