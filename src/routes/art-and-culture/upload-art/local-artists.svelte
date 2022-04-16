<script>
	import Button from '$lib/components/Button.svelte';
	import Heading from '$lib/components/Heading.svelte';
</script>

<div class="container p-5">
	<Heading>LOCAL ARTISTS</Heading>
	<div class="buttons">
		<Button>CHOOSE FILE</Button>
		<Button>UPLOAD FILE</Button>
		<Button type="link" link="/art-and-culture/upload-art">GO BACK</Button>
	</div>
</div>

<style>
	.container {
		background-image: url('/images/LocalArtistsBg.png');
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
