<script>
	import Button from '$lib/components/Button.svelte';
	import Heading from '$lib/components/Heading.svelte';
</script>

<Heading>QUESTION 2</Heading>
<div class="container p-5">
    <div class="question">
        <p class="question-box">What was the name of the German tank used in the advance to Amiens in 1918? <br />
                                <br />
                                The answer can be found on Level 1!</p>
    </div>
	<div class="buttons">
		<Button type="link" link="/museum-hunt/question-2-incorrect/">A) Carlos</Button>
        <Button type="link" link="/museum-hunt/question-2-incorrect/">B) Tank Mk.IV</Button>
		<Button type="link" link="/museum-hunt/question-2-incorrect/">C) Mephisto</Button>
		<Button type="link" link="/museum-hunt/question-2-correct/">D) Kampfwagen</Button>
	</div>
</div>

<style>
	.container {
		background-image: url('/images/T-rex.png');
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

    .question-box{
       background-color: white;
	   color: black;
	   border-radius: 25px;
	   min-height: fit-content;
	   font-size: 25px;
	   box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.43);
    }
</style>