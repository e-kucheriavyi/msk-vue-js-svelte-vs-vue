<script setup lang="ts">
	defineProps({
		data: { type: String, required: true },
		label: { type: String },
	})
</script>

<template>
	<div :class="$style.col">
		<QRCode
			:width="300"
			:height="300"
			type="svg"
			:data
			:dotsOptions="{ type: 'rounded', color: 'white' }"
		/>
		
		<h2>{{ label || data }}</h2>
	</div>
</template>

<style module>
	.col {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 32px;
	}
</style>
