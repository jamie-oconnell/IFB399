<script lang="ts">
  import Card from "./Card.svelte";
  import Camera from "./Camera/Camera.svelte";
</script>

<main class="p-5">
  <div class="flex items-center mb-5">
    <div class="col">
      <img src="/images/Logo.svg" alt="" />
    </div>
    <div>
      <img src="/images/GovLogo.svg" alt="" />
    </div>
  </div>
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
  <Camera />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .col {
    flex-basis: 50%;
    flex: 1;
  }
</style>
