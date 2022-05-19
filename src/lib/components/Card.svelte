<script lang="ts">
	export let image = '';
	export let link;
</script>

<a
	href={link}
	class={`w-full p-1 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 card flex justify-center place-items-end`}
	style={`background-image: url('/images/${image}')`}
>
	<slot />
</a>

<style>
	.card {
		height: 270px;
		background-position: center;
		line-height: 43px;
		background-repeat: no-repeat;
		letter-spacing: 4px;
		border: 3px solid #fff;
		text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.67);
		font-size: 35px;
		background-size: cover;
	}
</style>
