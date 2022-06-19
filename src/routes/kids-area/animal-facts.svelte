<script>
    import Heading from "$lib/components/Heading.svelte";
    import Button from "$lib/components/Button.svelte";
</script>

<!--A simple, low fidelity html page to showcase the kind of content that could be included in this section.-->

<Heading>ANIMAL FACTS</Heading>

<div>
    <div class="fact">
        <h1>DID YOU KNOW?</h1>
        <p>The loudest animal in the world is a mere 2cm long, prawn.</p>
    </div>
    <div class="fact">
        <h1>DID YOU KNOW?</h1>
        <p>Hummingbirds are the only known birds that can also fly backwards.</p>
    </div>
    <div class="fact">
        <h1>DID YOU KNOW?</h1>
        <p>The shortest living animal in the world is the Mayfly. Its entire lifespan is just 24hrs.</p>
    </div>
</div>

<Button type="link" link="/kids-area/fun-facts/">GO BACK</Button>

<style>
    .fact {
        border: 2px solid black;
        margin: 10px;
    }
</style>