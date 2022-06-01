<script>
	import Heading from '$lib/components/Heading.svelte';
    import Button from "$lib/components/Button.svelte";
</script>

<Heading>GAMES</Heading>

<div>
    <div class="vendor">
        <div class="adjacent">
            <img class="logo" src="/images/GameLogo1.png" alt="logo">
        </div>
        <div class="adjacent">
            <h1 class="title">Education.com</h1>
            <p class="blurb">"...build foundational skills in everything from counting to reading comprehension, fractions to basic coding, and much more."</p>
            <a class="visit" href="https://www.education.com">VISIT</a>
        </div>
    </div>
</div>

<div>
    <div class="vendor">
        <div class="adjacent">
            <img class="logo" src="/images/GameLogo2.png" alt="logo">
        </div>
        <div class="adjacent">
            <h1 class="title">PBS Kids</h1>
            <p class="blurb">"...PBS KIDS leverages the full spectrum of media and technology to build knowledge, critical thinking, imagination and curiosity."</p>
            <a class="visit" href="https://pbskids.org/games/">VISIT</a>
        </div>
    </div>
</div>

<div>
    <div class="vendor">
        <div class="adjacent">
            <img class="logo" src="/images/GameLogo3.png" alt="logo">
        </div>
        <div class="adjacent">
            <h1 class="title">Safe Kid Games</h1>
            <p class="blurb">"...family-friendly fun and entertainment in a kid safe environment."</p>
            <a class="visit" href="https://www.safekidgames.com/education-games/">VISIT</a>
        </div>
    </div>
</div>

<Button type="link" link="/kids-area/">GO BACK</Button>

<style>

    .vendor {
        border: 3px solid black;
        background-color: rgb(16, 27, 58);
        padding: 5%;
        margin: 20px;
    }

    .adjacent {
        display: inline-block;
    }

    .logo {
        width: 20%;
        height: 20%;
    }

    .visit {
        width: 50%;
		height: 30px;
		line-height: 20px;
		font-size: 15px;
		color: rgb(65, 65, 65);
		background-color: rgb(255, 255, 255);
		border-radius: 23px;
		box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.43);
		display: block;
    }

    .title {
        font-size: larger;
        
    }

    .blurb {
        font-style: italic;
        font-size: smaller;
    }
</style>