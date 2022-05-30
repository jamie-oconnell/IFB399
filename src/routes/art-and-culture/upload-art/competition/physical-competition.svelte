<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Input from '$lib/components/Input.svelte';
	import { goto } from '$app/navigation';
	import { getBase64, uploadCompetition } from '$lib/util/upload-image';

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
	<input
		class="hidden"
		id="file-to-upload"
		type="file"
		accept=".png,.jpg"
		bind:files
		bind:this={fileInput}
		on:change={() => setImage(files[0])}
	/>
	<div class="m-8 max-w-lg grid grid-cols-2 gap-4 place-content-center">
		{#if image}
			<div class="flex flex-wrap -mx-3 mb-6 col-start-1 col-end-3">
				<div class="w-full px-3">
					<label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="">
						Name of Piece
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id=""
						type=""
					/>
					<p class="text-white-600 text-xs italic" />
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-6 col-start-1 col-end-3">
				<div class="w-full px-3">
					<label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="">
						Description of Piece
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id=""
						type=""
					/>
					<p class="text-white-600 text-xs italic">
						Please leave a description of your art piece, or your thoughts when making it
					</p>
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full px-3">
					<label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="">
						First Name
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id=""
						type=""
					/>
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full px-3">
					<label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="">
						Last Name
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id=""
						type=""
					/>
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-6 col-start-1 col-end-3">
				<div class="w-full px-3">
					<label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="">
						Phone Number
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id=""
						type=""
					/>
					<p class="text-white-600 text-xs italic">
						This number will only be contacted to inform you of the competition
					</p>
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-6 col-start-1 col-end-3">
				<div class="w-full px-3">
					<label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="">
						Email
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id=""
						type=""
					/>
					<p class="text-white-600 text-xs italic">
						This email will only be contacted to inform you of the competition
					</p>
				</div>
			</div>
			<div class="col-start-1 col-end-3">
				<Button
					on:click={() => {
						confirmCompetition(title, image, description, FirstName, LastName, Phone, Email);
					}}>CONFIRM</Button
				>
			</div>
			<div class="col-start-1 col-end-3">
				<Button
					on:click={() => {
						image = null;
						title = '';
					}}>CLEAR FILE</Button
				>
			</div>
		{/if}
		<div class="col-start-1 col-end-3">
			<Button type="link" link="/art-and-culture/upload-art/competition">GO BACK</Button>
		</div>
	</div>
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
