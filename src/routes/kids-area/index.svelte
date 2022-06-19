<script>
	import Heading from '$lib/components/Heading.svelte';
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<!--Landing page for the kids portlet, providing clickable links to the
	various subsections using the Card component-->

<Heading>KIDS AREA</Heading>

<div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4">
	<Card image="/images//KidsArea/ColouringCover.png" link="/kids-area/categories">COLOURING IN</Card>
	<Card image="/images//KidsArea/FunFacts.png" link="/kids-area/fun-facts">FUN FACTS</Card>
	<Card image="/images/KidsArea/GamesCover.png" link="/kids-area/games">GAMES</Card>
</div>

<Button type="link" link="/">GO BACK</Button>
