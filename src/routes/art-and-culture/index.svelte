<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Heading from '$lib/components/Heading.svelte';
</script>
<!-- Creating the art index-->
<Heading>ART & CULTURE</Heading>

<div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4">
	<Card image="/images/Gallery.png" link="/art-and-culture/virtual-gallery">VIRTUAL GALLERY</Card>
	<Card image="/images/Events.png" link="/art-and-culture/events">EVENTS</Card>
	<Card image="/images/UploadArt.png" link="/art-and-culture/upload-art">UPLOAD YOUR ART</Card>
</div>
