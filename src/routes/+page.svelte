<script>
  import { onMount, onDestroy } from "svelte";
  import CardRanking from "../lib/components/Cards/CardRankings.svelte";
  import books from "../lib/data/listBook.json";
  import Splide from "@splidejs/splide";
  import "@splidejs/splide/css";
  import "@splidejs/splide/css/skyblue";

  let images = [
    "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.banner_web_v2/0/0/0/4276.jpg?v=3&w=1920&h=600",
    "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.banner_web_v2/0/0/0/4024.jpg?v=1&w=1920&h=600",
    "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.banner_web_v2/0/0/0/4174.jpg?v=1&w=1920&h=600",
    "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.banner_web_v2/0/0/0/4267.jpg?v=2&w=1920&h=600",
    "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.banner_web_v2/0/0/0/4282.jpg?v=4&w=1920&h=600",
  ];

  let imagesMobile = [
    "/Images/Slides/mobile/4321.png",
    "/Images/Slides/mobile/4024.png",
    "/Images/Slides/mobile/4174.png",
    "/Images/Slides/mobile/4276.png",
    "/Images/Slides/mobile/4282.png",
  ];

  onMount(() => {
    const splideDesktop = new Splide(".splide-desktop", {
      type: "loop",
      perPage: 1,
      autoplay: true,
      interval: 5000,
      arrows: true,
      pagination: false,
    });
    splideDesktop.mount();

    const splideMobile = new Splide(".splide-mobile", {
      type: "loop",
      perPage: 1,
      focus: "center",
      padding: { left: "20%", right: "20%" },
      gap: "1rem",
      arrows: false,
      pagination: false,
      autoplay: true,
      interval: 5000,
    });
    splideMobile.mount();
  });
</script>

<main class="relative w-full">
  <div class="hidden lg:block">
    <div class="splide splide-desktop relative rounded-lg overflow-hidden">
      <div class="splide__track">
        <ul class="splide__list">
          {#each images as img}
            <li class="splide__slide">
              <img
                src={img}
                alt="Slide"
                class="w-full min-h-[30rem] object-cover rounded-lg"
              />
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>

  <div
    class="pt-[5rem] pb-[2rem] lg:hidden block min-h-[20rem] relative overflow-hidden"
    style="background-image: url({images[0]}); background-size: cover; background-position: center;"
  >
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"
    ></div>
    <div class="splide splide-mobile relative z-10">
      <div class="splide__track">
        <ul class="splide__list">
          {#each imagesMobile as mobile}
            <li class="splide__slide">
              <img
                src={mobile}
                alt="Slide"
                class="rounded-xl shadow-lg h-[100%] w-full object-cover"
              />
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>

  <div class="container !mx-auto py-5">
    <h1 class="font-bold text-2xl">Bảng xếp hạng</h1>

    <div class=" ">
      <div class=" gap-4 p-5">
        {#each books as book, i}
          <CardRanking
            number={i + 1}
            cover={book.cover}
            title={book.title}
            author={book.author}
            status={book.status}
            description={book.description}
            link={book.link}
          />
        {/each}
      </div>
    </div>
  </div>
</main>
