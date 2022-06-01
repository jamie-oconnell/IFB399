<script>
    import Heading from "$lib/components/Heading.svelte";
    import Button from "$lib/components/Button.svelte";
</script>

<Heading>SPACE FACTS</Heading>

<div>
    <div class="fact">
        <h1>DID YOU KNOW?</h1>
        <p>Mercury & Venus are the only 2 planets in our solar system that have no moons.</p>
    </div>
    <div class="fact">
        <h1>DID YOU KNOW?</h1>
        <p>The highest mountain discovered is the Olympus Mons, which is located on Mars.</p>
    </div>
    <div class="fact">
        <h1>DID YOU KNOW?</h1>
        <p>The Sun weighs about 330,000 times more than Earth.</p>
    </div>
</div>

<Button type="link" link="/kids-area/fun-facts/">GO BACK</Button>

<style>
    .fact {
        border: 2px solid black;
        margin: 10px;
    }
</style>