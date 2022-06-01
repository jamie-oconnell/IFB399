<script lang="ts">
	export let image = '';
	export let title = '';
	export let link;
	export let description = '';
</script>

<div>
	<a href={link} class={`w-full shadow-md flex justify-center place-items-end border-4`}>
		<img src={image} alt="" />
		<slot />
	</a>
	<div>{title}</div>
	<hr>
	<div>{description}</div>
</div>

<style>
	a {
		line-height: 43px;
		letter-spacing: 4px;
		text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.67);
		font-size: 35px;
	}
</style>
