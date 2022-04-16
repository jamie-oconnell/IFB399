<script>
	export let open;
</script>

<div class:open class="menu-wrapper">
	<div class="menu-container">
		<ul>
			<li class="border-b border-white"><a href="/">HOME</a></li>
			<li class="border-b border-white">
				<a href="/museum-hunt">MUSEUM HUNT</a>
			</li>
			<li class="border-b border-white"><a href="/art-and-culture">ART & CULTURE</a></li>
			<li class="border-b border-white"><a href="/archives">THE ARCHIVES</a></li>
			<li class="border-b border-white"><a href="/kids-area">KIDS AREA</a></li>
			<li class="border-b border-white"><a href="/worksheets">WORKSHEETS</a></li>
			<li><a href="/map">MAP</a></li>
		</ul>
	</div>
	<a href="/">
		<img src="/images/Logo.svg" alt="" />
	</a>
</div>

<style>
	.menu-container {
		text-align: center;
		flex: 1;
		align-items: center;
		display: flex;
	}

	li {
		letter-spacing: 4px;
		text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.67);
		line-height: 43px;
		font-size: 25px;
		color: #fff;
		padding: 15px 0;
	}

	.open {
		display: flex !important;
	}

	.menu-wrapper {
		display: none;
		position: fixed;
		background-color: rgb(16, 27, 58);
		color: white;
		height: 100vh;
		width: 100%;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		padding-top: 60px;
		overflow-y: auto;
	}
</style>
