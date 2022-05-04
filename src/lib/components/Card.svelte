<script lang="ts">
	export let image = '';
	export let link;
</script>

<a
	href={link}
	class={`w-full shadow-md flex justify-center place-items-end border-4`}
	style={`background-image: url('${image}')`}
>
	<slot />
</a>

<style>
	a {
		height: 270px;
		background-position: center;
		background-size: cover;
		line-height: 43px;
		background-repeat: no-repeat;
		letter-spacing: 4px;
		text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.67);
		font-size: 35px;
	}
</style>
