<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Input from '$lib/components/Input.svelte';
	import { goto } from '$app/navigation';
	import { getBase64, uploadCompetition } from '$lib/util/upload-image';
	import PhysicalCompetition from './physical-competition.svelte';

	let fileInput;
	let image;
	let files;
	let title: string;
	let description: string;
	let FirstName: string;
	let LastName: string;
	let Phone: string;
	let Email: string;

	async function setImage(img) {
		image = await getBase64(img);
	}
	async function confirmCompetition(title, img, description, FirstName, LastName, Phone, Email) {
		const res = await uploadCompetition(title, img, description, FirstName, LastName, Phone, Email);
		if (res.status === 200) {
			alert('Image uploaded successfully');
			goto('/art-and-culture/virtual-gallery');
		}
	}
</script>

<div class="container m-8 max-w-lg grid grid-cols-1 gap-4 place-content-center">
	<Heading>Upload an image of your competition entry</Heading>
	<div class="image-upload flex-1">
		{#if image}
			<img src={image} alt="avatar" />
		{:else}
			<button on:click={() => fileInput.click()} class="upload-button">+ Select File</button>
		{/if}
	</div>
</div>
<input
	class="hidden"
	id="file-to-upload"
	type="file"
	accept=".png,.jpg"
	bind:files
	bind:this={fileInput}
	on:change={() => setImage(files[0])}
/>
<div class="buttons">
	{#if image}
		<label class="text-left" for="title">Artwork Name</label>
		<Input id="title" name="title" placeholder="Artwork Name" bind:value={title} />
		<label class="text-left" for="title">First Name</label>
		<Input id="title" name="title" placeholder="First Name" bind:value={FirstName} />
		<label class="text-left" for="title">Last Name</label>
		<Input id="title" name="title" placeholder="Last Name" bind:value={LastName} />
		<label class="text-left" for="title">Description of Piece</label>
		<Input id="title" name="title" placeholder="Description of Piece" bind:value={description} />
		<label class="text-left" for="title">Phone Number</label>
		<Input id="title" name="title" placeholder="Phone Number" bind:value={Phone} />
		<label class="text-left" for="title">Email</label>
		<Input id="title" name="title" placeholder="Email" bind:value={Email} />
		<Button
			on:click={() => {
				confirmCompetition(title, image, description, FirstName, LastName, Phone, Email);
			}}>CONFIRM</Button
		>
		<Button
			on:click={() => {
				image = null;
				title = '';
			}}>CLEAR FILE</Button
		>
	{/if}

	<Button type="link" link="/art-and-culture/upload-art">GO BACK</Button>
</div>

<style>
	img {
		/* width: 100%; */
		max-width: calc(50vw - 10%);
		/* height: 100%; */
		max-height: 200px;
		/* object-fit: cover; */
	}
	.buttons {
		margin-top: auto;
		display: flex;
		flex-direction: column;
		/* justify-content: space-between; */
	}
	.image-upload {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.upload-button {
		width: 100%;
		height: 100%;
		border: 1px dashed #fff;
		border-radius: 5px;
		cursor: pointer;
		height: 20vh;
	}
</style>
