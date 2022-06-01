<script>
	import Card from '$lib/components/GalleryCard.svelte';
	import { onMount } from 'svelte';
	import { Tabs, TabList, TabPanel, Tab } from 'svelte-tabs';
	import Button from '$lib/components/Button.svelte';

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

<Tabs>
	<TabList>
		<Tab>Local Art</Tab>
		<Tab>Competition Art</Tab>
	</TabList>
	<TabPanel>
		<div class="gallery-grid">
			{#each images as image}
				<Card title={image.title} image={image.path} link="/temp" />
			{/each}
		</div>
		<div class='go-back'>
			<Button type="link" link="/art-and-culture">GO BACK</Button>
		</div>
		
	</TabPanel>

	<TabPanel>
		<div class="gallery-grid">
			{#each compimages as image}
				<Card title={image.title} image={image.path} link="/temp" />
			{/each}
		</div>
		<Button type="link" link="/art-and-culture">GO BACK</Button>
	</TabPanel>
</Tabs>
	

<style>
	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}
	:global(.svelte-tabs li.svelte-tabs__tab){
		color:white;
		font-size:larger;
	}
	:global(.svelte-tabs){
		color:white
	}
	:global(.svelte-tabs li.svelte-tabs__selected){
		color:steelblue
	}
	.go-back {
		position:sticky;
		bottom:0;
	}
</style>
