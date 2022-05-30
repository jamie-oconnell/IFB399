<script lang="ts">
	export let type: 'button' | 'link' | 'icon' = 'button';
	export let link = '';
</script>

{#if type === 'link'}
	<a href={link} class="p-4 w-full">
		<slot />
	</a>
{:else if type === 'icon'}
	<button on:click class="icon-button p-4 w-full">
		<slot />
	</button>
{:else}
	<button on:click class="primary p-4 w-full">
		<slot />
	</button>
{/if}

<style>
	.primary,
	a {
		width: 100%;
		height: 72px;
		line-height: 43px;
		font-size: 35px;
		color: rgb(65, 65, 65);
		background-color: rgb(255, 255, 255);
		border-radius: 23px;
		box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.43);
		display: block;
	}
	.icon-button {
		width: 100%;
		display: block;
	}
</style>
