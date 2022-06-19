<script>
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<Heading>WORKSHEETS</Heading>

<div>
	<a href="/worksheetdownload">
		<img class="clickable" src="/images/Yr1.png" alt="Year 1 Worksheets" a="/worksheetdownload">
	</a>
	<a href="/worksheetdownload">
		<img class="clickable" src="/images/Yr2.png" alt="Year 2 Worksheets" a="/worksheetdownload">
	</a>
	<a href="/worksheetdownload">
		<img class="clickable" src="/images/Yr3.png" alt="Year 3 Worksheets" a="/worksheetdownload">
	</a>
	<a href="/worksheetdownload">
		<img class="clickable" src="/images/Yr4.png" alt="Year 4 Worksheets" a="/worksheetdownload">
	</a>
	<a href="/worksheetdownload">
		<img class="clickable" src="/images/Yr5.png" alt="Year 5 Worksheets" a="/worksheetdownload">
	</a>
	<a href="/worksheetdownload">
		<img class="clickable" src="/images/Yr6.png" alt="Year 6 Worksheets" a="/worksheetdownload">
	</a>
	<Button type="link" link="/">GO BACK</Button>
</div>

<style>
	.clickable{
		border: 2px solid gray;
	}
</style>