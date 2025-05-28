<script setup lang="ts">
	import { results, cats } from '../services/score';
</script>

<template>
	<div :class="$style.table">
		<div :class="[$style.row]">
			<div :class="[$style.first, $style.col, $style.br]"></div>
			<div :class="[$style.f1, $style.col, $style.bb, $style.br]">Svelte</div>
			<div :class="[$style.f1, $style.col, $style.bb]">Vue</div>
		</div>
		<div :class="[$style.row, $style.bb]">
			<div :class="[$style.first, $style.col, $style.br]"></div>
			<div :class="[$style.f1, $style.col, $style.row]">
				<div :class="[$style.f1, $style.col, $style.br]">Кринж</div>
				<div :class="[$style.f1, $style.col, $style.br]">База</div>
			</div>
			<div :class="[$style.f1, $style.col, $style.row]">
				<div :class="[$style.f1, $style.col, $style.br]">Кринж</div>
				<div :class="[$style.f1, $style.col]">База</div>
			</div>
		</div>
		<div v-for="cat of cats" :class="[$style.f1, $style.row, $style.tr, $style.bb]">
			<div :class="[$style.first, $style.col, $style.br]">{{ cat.label }}</div>
			<div :class="[$style.f1, $style.col, $style.row]">
				<Counter :value="results.svelte[cat.key].cringe" :class="[$style.f1, $style.br]"/>
				<Counter :value="results.svelte[cat.key].base" :class="[$style.f1, $style.br]"/>
			</div>
			<div :class="[$style.f1, $style.col, $style.row]">
				<Counter :value="results.vue[cat.key].cringe" :class="[$style.f1, $style.br]"/>
				<Counter :value="results.vue[cat.key].base" :class="$style.f1"/>
			</div>
		</div>
	</div>
</template>

<style lang="css" module>
	.table {
		--border-color: #222;
		width: 100%;
		height: 100%;
		border: 1px solid var(--border-color);
		display: flex;
		flex-direction: column;
		background-color: #111;
	}

	.f1 {
		flex: 1;
	}

	.row {
		display: flex;
		align-items: center;
		justify-content: stretch;
	}

	.tr:nth-of-type(2n) {
		background: rgba(0, 0, 0, 0.3);
	}

	.bb {
		border-bottom: 1px solid var(--border-color);
	}

	.br {
		border-right: 1px solid var(--border-color);
	}

	.col {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.first {
		width: 16rem;
		text-align: right;
	}
</style>
