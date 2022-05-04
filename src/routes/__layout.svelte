<script lang="ts">
	import '../app.css';
	import MenuIcon from '$lib/components/icons/Menu.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import { afterNavigate } from '$app/navigation';

	let open = false;

	function handleClick() {
		open = !open;
	}

	afterNavigate(() => {
		open = false;
	});
</script>

<div class="flex items-center p-3 menu fixed w-full top-0 z-50">
	<div class="col">
		<a href="/">
			<img src="/images/Logo.svg" alt="" />
		</a>
	</div>
	<div>
		<Button type="icon" on:click={handleClick}>
			<MenuIcon width="56px" height="56px" color="#fff" />
		</Button>
	</div>
</div>
<Menu bind:open />

<!-- {#if $page.url.pathname === '/art-and-culture/upload-art/local-artists'} -->
{#if !open}
	<main class="p-5 flex flex-col content-center">
		<slot />
	</main>
{:else}
	<slot />
{/if}

<style>
	main {
		font-family: 'Montserrat', sans-serif;
		text-align: center;
		color: white;
		min-height: 100%;
		height: 100%;
		margin: 100px 0;
	}

	.col {
		flex-basis: 50%;
		flex: 1;
	}

	.menu {
		background: rgb(16, 27, 58);
		background: linear-gradient(180deg, rgba(16, 27, 58, 1) 90%, rgba(45, 44, 44, 0) 100%);
	}
</style>
