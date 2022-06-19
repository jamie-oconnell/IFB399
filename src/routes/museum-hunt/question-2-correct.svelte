<script>
	import Button from '$lib/components/Button.svelte';
</script>

<!--This page gives the user feedback on their quiz attempt, allowing them to progress
	or to quit.-->

<div class="container p-5">
    <div class="question">
        <p class="feedback">Correct! Head to Level 1.5 for the next clue.</p>
    </div>
	<div class="buttons">
		<Button type="link" link="/museum-hunt/question-3/">NEXT QUESTION</Button>
        <Button type="link" link="/museum-hunt/">GO BACK</Button>
	</div>
</div>

<style>
	.container {
		background-image: url('/images/Mephisto.jpg');
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