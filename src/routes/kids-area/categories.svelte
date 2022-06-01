<script>
	import Heading from '$lib/components/Heading.svelte';
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<Heading>COLOURING IN</Heading>

<div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4">
	<Card image="/images//KidsArea/ColouringDinos.png" link="/kids-area/dino-sheets">DINOSAURS</Card>
	<Card image="/images//KidsArea/ColouringAboriginal.png" link="/kids-area/aboriginal-sheets">ABORIGINAL ART</Card>
	<Card image="/images//KidsArea/ColouringEgypt.png" link="/kids-area/egypt-sheets">ANCIENT EGYPT</Card>
    <Card image="/images//KidsArea/ColouringAnimals.png" link="/kids-area/animals-sheets">ANIMALS</Card>
</div>
<div>
	<Button type="link" link="/kids-area/">GO BACK</Button>
</div>
