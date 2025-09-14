<script>
  import { onMount, onDestroy } from "svelte";
  import CardBook from "$lib/components/Cards/CardBook.svelte";
  import books from "../lib/data/listBook.json";

  let images = [
    "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.banner_web_v2/0/0/0/4276.jpg?v=3&w=1920&h=600",
    "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.banner_web_v2/0/0/0/4024.jpg?v=1&w=1920&h=600",
    "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.banner_web_v2/0/0/0/4174.jpg?v=1&w=1920&h=600",
    "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.banner_web_v2/0/0/0/4267.jpg?v=2&w=1920&h=600",
    "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.banner_web_v2/0/0/0/4282.jpg?v=4&w=1920&h=600",
  ];

  let current = 0;
  let interval;

  function next() {
    current = (current + 1) % images.length;
  }

  function prev() {
    current = (current - 1 + images.length) % images.length;
  }

  onMount(() => {
    interval = setInterval(next, 5000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<main class="relative w-full">
  <div class="relative w-full min-h-[30rem] overflow-hidden rounded-lg">
    <img
      src={images[current]}
      alt="SlideImage"
      class="w-full min-h-[30rem] object-cover transition-transform duration-500"
    />

    <div
      class="absolute inset-0 bg-gradient-to-b from-black to-transparent z-50 pointer-events-none"
    ></div>

    <div
      class="absolute top-1/2 w-full flex justify-between transform -translate-y-1/2 px-4 z-20"
    >
      <button
        on:click={prev}
        class="bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/70"
      >
        &lt;
      </button>
      <button
        on:click={next}
        class="bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/70"
      >
        &gt;
      </button>
    </div>
  </div>

  <div class="container !mx-auto py-5">
    <h1 class="font-bold text-2xl">Bảng xếp hạng</h1>

    <div class=" ">
      <div class=" gap-4 p-5">
        {#each books as book}
          <CardBook {...book} />
        {/each}
      </div>
    </div>
  </div>
</main>
