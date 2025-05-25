<script setup lang="ts">
	import { onMounted } from 'vue'
	import { getIcon } from '../services/score'

	const props = defineProps({
		type: {
			type: String,
			required: true,
			validator: (value: string) => ['cringe', 'base', 'larana'].includes(value),
		},
		value: {
			type: Number,
			default: 1,
		},
	})

</script>

<template>
	<div class="plus">
		+{{ value }} {{ getIcon(type) }}
	</div>
</template>

<style scoped>
	.plus {
		position: absolute;
		font-size: 3rem;
		font-family: monospace;
		z-index: 20;
		right: 2rem;
		bottom: 2rem;
		rotate: -30deg;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		background: rgba(0, 0, 0, 0.9);
	}
</style>
