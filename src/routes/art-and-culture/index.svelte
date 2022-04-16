<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Heading from '$lib/components/Heading.svelte';
</script>

<Heading>ART & CULTURE</Heading>

<div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4">
	<Card image="Gallery.png" link="#">VIRTUAL GALLERY</Card>
	<Card image="Events.png" link="#">EVENTS</Card>
	<Card image="UploadArt.png" link="/art-and-culture/upload-art">UPLOAD YOUR ART</Card>
</div>
