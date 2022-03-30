<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Camera from '$lib/components/Camera/Camera.svelte';
</script>

<main class="p-5">
	<div class="flex items-center mb-5">
		<div class="col">
			<img src="/images/Logo.svg" alt="" />
		</div>
		<div>
			<img src="/images/GovLogo.svg" alt="" />
		</div>
	</div>
	<div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
	</div>

	<Camera />
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.col {
		flex-basis: 50%;
		flex: 1;
	}
</style>
