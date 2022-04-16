<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<Heading>COMPETITION</Heading>
<div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4">
	<Card image="DigitalArt.png" link="#">DIGITAL ART</Card>
	<Card image="Paintings.png" link="#">PAINTINGS</Card>
</div>

<Button type="link" link="/art-and-culture/upload-art">GO BACK</Button>
