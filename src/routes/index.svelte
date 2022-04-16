<script lang="ts">
	import Card from '$lib/components/Card.svelte';
</script>

<div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4">
	<Card image="Dino.png" link="/museum-hunt">MUSEUM HUNT</Card>
	<Card image="Art&Culture.png" link="/art-and-culture">ART & CULTURE</Card>
	<Card image="TheArchives.png" link="/archives">THE ARCHIVES</Card>
	<Card image="KidsArea.png" link="/kids-area">KIDS AREA</Card>
	<Card image="Worksheets.png" link="/worksheets">WORKSHEETS</Card>
</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
