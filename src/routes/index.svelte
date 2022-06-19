<script lang="ts">
	import Card from '$lib/components/Card.svelte';
</script>

<!--Home page for the site, providing access to each of the portlets and subsections using clickable Card components.-->

<div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4">
	<Card image="/images/Dino.png" link="/museum-hunt">MUSEUM HUNT</Card>
	<Card image="/images/Art&Culture.png" link="/art-and-culture">ART & CULTURE</Card>
	<Card image="/images/TheArchives.png" link="/archives">THE ARCHIVES</Card>
	<Card image="/images/KidsArea.png" link="/kids-area">KIDS AREA</Card>
	<Card image="/images/Worksheets.png" link="/worksheets">WORKSHEETS</Card>
</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
