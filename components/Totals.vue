<script setup lang="ts">
	import { results, getIcon } from '../services/score';
</script>

<template>
	<div class="totals row g">
		<div class="col">
			<div class="header">Svelte</div>
			<div class='row'>
				<div class="value">{{ results.svelte.total.cringe }} {{ getIcon('cringe') }}</div>
				<div class="value">{{ results.svelte.total.base }} {{ getIcon('base') }}</div>
			</div>
		</div>

		<div class="col">
			<div class="header">Vue</div>
			<div class="row">
				<div class="value">{{ results.vue.total.cringe }} {{ getIcon('cringe') }}</div>
				<div class="value">{{ results.vue.total.base }} {{ getIcon('base') }}</div>
			</div>
		</div>
	</div>
</template>

<style lang="css" scoped>
	.totals {
		font-family: monospace;
		font-size: 2rem;
		width: 100%;
		height: 100%;
	}

	.g {
		gap: 5rem;
	}

	.col {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.header {
		text-align: center;
		font-size: 3rem;
	}

	.row {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.value {
		font-size: 3rem;
		font-family: monospace;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		background: rgba(0, 0, 0, 0.3);
	}
</style>
