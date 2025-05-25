<script setup lang="ts">
	import { computed } from 'vue'
	import { getIcon } from '../services/counter'

	const props = defineProps({
		type: {
			type: String,
			required: true,
			validator: (value: string) => ['cringe', 'base'].includes(value),
		},
		counter: {
			type: Object,
			required: true,
		},
	})
</script>

<template>
	<button
		class="btn"
		@click="counter.increase"
		@click.right.prevent="counter.decrease"
	>
		<span>{{ getIcon(type) }}</span>
		<span>{{ counter.counter.value > 9 ? counter.counter : `0${counter.counter.value}` }}</span>
	</button>
</template>

<style scoped>
	.btn {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		font-family: monospace;
		font-size: 1rem;
		padding: 0.1rem 0.2rem;
		border-radius: 0.5rem;
	}

	.btn:hover {
		background: rgba(0, 0, 0, 0.3);
	}
</style>
