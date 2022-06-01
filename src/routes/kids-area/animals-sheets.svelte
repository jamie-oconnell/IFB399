<script>
    import Heading from "$lib/components/Heading.svelte";
    import Button from "$lib/components/Button.svelte";
</script>

<Heading>ANIMAL SHEETS</Heading>

<div>
    <div class="sheets">
        <div class = "image">
            <img src="/images/KidsArea/AnimalsSheet1.jpg" alt="Tigers">
        </div>
        <div class = "image">
            <img src="/images/KidsArea/AnimalsSheet2.png" alt="Elephants">
        </div>
        <div class = "image">
            <img src="/images/KidsArea/AnimalsSheet3.jpg" alt="Turtles">
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