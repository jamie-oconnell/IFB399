<script>
	import Button from '$lib/components/Button.svelte';
	import Heading from '$lib/components/Heading.svelte';
</script>

<Heading>QUESTION 1</Heading>
<div class="container p-5">
    <div class="question">
        <p class="question-box">Which dinosaur was first discovered in Queensland in 1963? <br />
								<br />
								The answer can be found on Level 2!
		</p>
    </div>
	<div class="buttons">
		<Button type="link" link="/museum-hunt/question-1-incorrect/">A) Baryonyx</Button>
        <Button type="link" link="/museum-hunt/question-1-correct/">B) Muttaburrasaurus</Button>
		<Button type="link" link="/museum-hunt/question-1-incorrect/">C) Tyrannosauraus Rex</Button>
		<Button type="link" link="/museum-hunt/question-1-incorrect/">D) Triceratops</Button>
	</div>
</div>

<style>
	.container {
		background-image: url('/images/T-rex.png');
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
		height: fit-content;
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