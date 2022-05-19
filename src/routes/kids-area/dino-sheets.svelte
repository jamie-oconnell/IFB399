<script>
    import Heading from "$lib/components/Heading.svelte";
    import Button from "$lib/components/Button.svelte";
</script>

<Heading>DINOSAUR SHEETS</Heading>

<div class="container p-5">
    <div class="sheets">
        <img src="/images/KidsArea/DinoSheet1.png" alt="Tyrannosaurus Rex">
        <img src="/images/KidsArea/DinoSheet2.png" alt="Spinosuarus">
        <img src="/images/KidsArea/DinoSheet3.png" alt="Stegosaurus">
    </div>
    <div>
        <Button type="link" link="/kids-area/categories/">GO BACK</Button>
    </div>
</div>

<style>
    .sheets {
        padding-top: 30px;
    }
</style>
