<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Input from '$lib/components/Input.svelte';
	import { getBase64, uploadImage } from '$lib/util/upload-image';

	let fileInput;
	let image;
	let files;
	let title: string;

	async function setImage(img) {
		image = await getBase64(img);
	}
</script>

<div class="container p-5 flex flex-col">
	<Heading>LOCAL ARTISTS</Heading>
	<div class="image-upload flex-1">
		{#if image}
			<img src={image} alt="avatar" />
		{:else}
			<button on:click={() => fileInput.click()} class="upload-button">+ Select File</button>
		{/if}
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
			<Button
				on:click={() => {
					uploadImage(title, image);
				}}>CONFIRM</Button
			>
			<Button
				on:click={() => {
					image = null;
				}}>CLEAR FILE</Button
			>
		{/if}

		<Button type="link" link="/art-and-culture/upload-art">GO BACK</Button>
	</div>
</div>

<style>
	img {
		/* width: 100%; */
		max-width: calc(100vw - 10%);
		/* height: 100%; */
		max-height: 600px;
		/* object-fit: cover; */
	}
	.buttons {
		margin-top: auto;
		display: flex;
		flex-direction: column;
		/* justify-content: space-between; */
		height: 300px;
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
	}
</style>
