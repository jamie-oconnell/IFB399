<script>
	import Card from '$lib/components/GalleryCard.svelte';
	import { onMount } from 'svelte';

	let images = [];
	let compimages = [];

	onMount(async () => {
		const res = await fetch(`/api/local-art`, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		});
		images = await res.json();
	});
	onMount(async () => {
		const res = await fetch(`/api/competition`, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		});
		compimages = await res.json();
	});
</script>

<div class="gallery-grid">
	{#each images as image}
		<Card title={image.title} image={image.path} link="/temp" />
	{/each}
</div>
<hr>
<div class="gallery-grid">
	{#each compimages as image}
		<Card title={image.title} image={image.path} link="/temp" />
	{/each}
</div>

<style>
	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}
</style>
