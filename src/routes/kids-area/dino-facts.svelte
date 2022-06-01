<script>
    import Heading from "$lib/components/Heading.svelte";
    import Button from "$lib/components/Button.svelte";
</script>

<Heading>DINO FACTS</Heading>

<div>
    <div class="fact">
        <h1>DID YOU KNOW?</h1>
        <p>Scientists now think that even large dinosaurs like Tyrannosaurus Rex may have had feathers!</p>
    </div>
    <div class="fact">
        <h1>DID YOU KNOW?</h1>
        <p>When dinosaur bones were first found hundreds of years ago by the Chinese, they thought they were the bones of giant dragons.</p>
    </div>
    <div class="fact">
        <h1>DID YOU KNOW?</h1>
        <p>The name dinosaur means 'frighteningly big lizard'.</p>
    </div>
</div>

<Button type="link" link="/kids-area/fun-facts/">GO BACK</Button>

<style>
    .fact {
        border: 2px solid black;
        margin: 10px;
    }
</style>