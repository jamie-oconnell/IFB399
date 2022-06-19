<script>
	import Heading from '$lib/components/Heading.svelte';
    import Button from '$lib/components/Button.svelte';
</script>

<!--This page provides an example of the Worksheet download page. It shows the worksheet
    along with placeholder buttons that showcase desired functionality.-->

<Heading>EXAMPLE WORKSHEET</Heading>

<div>
    <img src="/images/Worksheet.jpg" alt="worksheet">
</div>

<div>
    <Button class="smallButtons">DOWNLOAD</Button>
    <Button class="smallButtons">PRINT</Button>
</div>

<div>
    <Button type="link" link="/worksheets/">GO BACK</Button>
</div>

<style>
    .smallButtons {
        display: inline-block;
    }
</style>