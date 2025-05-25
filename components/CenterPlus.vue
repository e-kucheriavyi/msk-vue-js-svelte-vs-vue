<script setup lang="ts">
	import { getIcon } from '../services/score';

	defineProps({
		cringe: Number,
		base: Number,
		larana: Number,
	})
</script>

<template>
	<div class="totals">
		<div class="row">
			<div v-if="cringe" class="value">+{{ cringe }} {{ getIcon('cringe') }}</div>
			<div v-if="base" class="value">+{{ base }} {{ getIcon('base') }}</div>
			<div v-if="larana" class="value">+{{ larana }} {{ getIcon('larana') }}</div>
		</div>
	</div>
</template>

<style lang="css" scoped>
	.totals {
		width: 100%;
		height: 100%;
	}

	.col {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.row {
		display: flex;
		align-items: center;
		gap: 5rem;
	}

	.value {
		font-size: 7rem;
		font-family: monospace;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		background: rgba(0, 0, 0, 0.9);
	}
</style>
