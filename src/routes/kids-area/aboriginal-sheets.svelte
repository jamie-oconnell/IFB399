<script>
    import Heading from "$lib/components/Heading.svelte";
    import Button from "$lib/components/Button.svelte";
</script>

<!--A page to download colouring in sheets with placeholder buttons.-->

<Heading>ABORIGINAL ART SHEETS</Heading>
<div>
    <div class="sheets">
        <div class = "image">
            <img src="/images/KidsArea/AboriginalSheet1.png" alt="Cockatoo">
        </div>
        <div class = "image">
            <img src="/images/KidsArea/AboriginalSheet2.png" alt="Emu">
        </div>
    </div>
    
    <div>
        <Button class="smallButtons">DOWNLOAD</Button>
        <Button class="smallButtons">PRINT</Button>
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