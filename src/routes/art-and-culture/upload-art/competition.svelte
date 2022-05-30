<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<Heading>COMPETITION</Heading>
<div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4">
	<Card image="images/DigitalArt.png" link="/art-and-culture/upload-art/competition/digital-competition">DIGITAL ART</Card>
	<Card image="images/Paintings.png" link="/art-and-culture/upload-art/competition/physical-competition">PAINTINGS</Card>
</div>

<Button type="link" link="/art-and-culture/upload-art">GO BACK</Button>
