<script>
	import Button from '$lib/components/Button.svelte';
	import Heading from '$lib/components/Heading.svelte';
</script>

<!--This page prompts the user to answer a question through the use of html tags and svelte components (Buttons).-->

<Heading>QUESTION 3</Heading>
<div class="container p-5">
    <div class="question">
        <p class="question-box">How much does the large mass of Gypsum weigh? <br />
                                <br />
                                The answer can be found on Level 1.5!</p>
    </div>
	<div class="buttons">
		<Button type="link" link="/museum-hunt/question-3-correct/">A) 160kg</Button>
        <Button type="link" link="/museum-hunt/question-3-incorrect/">B) 200kg</Button>
		<Button type="link" link="/museum-hunt/question-3-incorrect/">C) 340kg</Button>
		<Button type="link" link="/museum-hunt/question-3-incorrect/">D) 100kg</Button>
	</div>
</div>

<style>
	.container {
		background-image: url('/images/Gypsum.png');
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

    .question-box{
       background-color: white;
	   color: black;
	   border-radius: 25px;
	   min-height: fit-content;
	   font-size: 25px;
	   box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.43);
    }
</style>