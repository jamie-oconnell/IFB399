<script>
    import Heading from "$lib/components/Heading.svelte";
    import Button from "$lib/components/Button.svelte";
</script>

<Heading>ANCIENT EGYPT SHEETS</Heading>

<div>
    <div class="sheets">
        <div class = "image">
            <img src="/images/KidsArea/EgyptSheet1.jpg" alt="Cockatoo">
        </div>
        <div class = "image">
            <img src="/images/KidsArea/EgyptSheet2.jpg" alt="Crowning of Tutenkhamen">
        </div>
        <div class = "image">
            <img src="/images/KidsArea/EgyptSheet3.jpg" alt="Isis">
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