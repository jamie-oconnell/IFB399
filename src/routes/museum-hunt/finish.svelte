<script>
	import Button from '$lib/components/Button.svelte';
</script>

<!--A page telling the user they have completed the hunt. Redirects them to the start through the use of a button.-->

<div class="container p-5">
    <div class="question">
        <p class="feedback">Congratulations, you completed the Hunt! Explore the Museum to learn even more stuff.</p>
    </div>
	<div class="buttons">
        <Button type="link" link="/museum-hunt/">FINISH</Button>
	</div>
</div>

<style>
	.container {
		background-image: url('/images/Fireworks.png');
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
		height: 100px;
        font-size: 12px;
	}

    .feedback{
        background-color: lightgreen;
	    color: black;
	    border-radius: 25px;
	    min-height: fit-content;
	    font-size: 35px;
	    box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.43);
    }
</style>