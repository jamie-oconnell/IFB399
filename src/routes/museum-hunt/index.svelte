<script>
	import Button from '$lib/components/Button.svelte';
	import Heading from '$lib/components/Heading.svelte';
</script>



<div class="container p-5">
	<Heading>MUSEUM HUNT</Heading>
	<div class="buttons">
		<Button type="link" link ="/museum-hunt/question-1">START HUNT</Button>
	</div>
</div>

<style>
	.container {
		background-image: url('/images/Interior.png');
		background-size: cover;
		min-height: 100%;
		height: 100vh;
		background-repeat: no-repeat;
		background-position: center;
		display: flex;
		padding-top: 100px;
		text-align: center;
		flex-direction: column;
	}

	.buttons {
		margin-top: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 300px;
	}
</style>


