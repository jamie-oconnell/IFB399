<script>
	import Button from '$lib/components/Button.svelte';
	import Heading from '$lib/components/Heading.svelte';
</script>

<Heading>MUSEUM HUNT</Heading>

<div class="container p-5">
	<Button type="link" link ="/museum-hunt/question-1">START HUNT</Button>
</div>

<style>
	.container{
		background-image: url('/images/Interior.png');
		background-size:cover;
		height: 100%;
		width: 100%;
	}
</style>


