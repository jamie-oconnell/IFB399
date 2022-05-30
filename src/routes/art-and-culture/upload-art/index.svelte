<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Heading from '$lib/components/Heading.svelte';
</script>

<Heading>UPLOAD YOUR ART</Heading>
<div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4">
	<Card image="/images/LocalArtists.png" link="/art-and-culture/upload-art/local-artists"
		>LOCAL ARTISTS</Card
	>
	<Card image="/images/Competition.png" link="/art-and-culture/upload-art/competition"
		>COMPETITION</Card
	>
</div>

<Button type="link" link="/art-and-culture">GO BACK</Button>
