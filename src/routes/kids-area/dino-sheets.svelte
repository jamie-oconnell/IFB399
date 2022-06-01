<script>
    import Heading from "$lib/components/Heading.svelte";
    import Button from "$lib/components/Button.svelte";
</script>

<Heading>DINOSAUR SHEETS</Heading>

<div>
    <div class="sheets">
        <div class = "image">
            <img src="/images/KidsArea/DinoSheet1.png" alt="Tyrannosaurus Rex">
        </div>
        <div class = "image">
            <img src="/images/KidsArea/DinoSheet2.png" alt="Spinosuarus">
        </div>
        <div class = "image">
            <img src="/images/KidsArea/DinoSheet3.png" alt="Stegosaurus">
        </div>
    </div>
    <div>
        <Button type="link" link="/kids-area/categories/">GO BACK</Button>
    </div>
</div>

<style>
    .image {
        padding-bottom: 15px;
        margin-top: 20px;
    }
</style>
