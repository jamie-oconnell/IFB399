<script>
    import Heading from "$lib/components/Heading.svelte";
    import Button from "$lib/components/Button.svelte";
    import Card from '$lib/components/Card.svelte';
</script>

<Heading>FUN FACTS</Heading>

<div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4">
	<Card image="/images/KidsArea/FunFacts.png" link="/kids-area/dino-facts">DINOSAURS</Card>
	<Card image="/images/KidsArea/Galaxy.png" link="/kids-area/space-facts">SPACE</Card>
	<Card image="/images/KidsArea/ColouringAnimals.png" link="/kids-area/animal-facts">ANIMALS</Card>
</div>

<Button type="link" link="/kids-area/">GO BACK</Button>