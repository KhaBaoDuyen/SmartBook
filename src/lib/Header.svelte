<script lang="ts">
    import { onMount } from "svelte";
    import Button from "./components/Buttons/Button.svelte";
    import ButtonNoBg from "./components/Buttons/Button-NoBg.svelte";
    import categoriesData from "./data/categories.json";

    let scrolled = false;
    let openMenuSlug: string | null = null;
    let currentPath = "";
    let mobileMenuOpen = false;
    let showMoreOpen = false;

    function handleScroll() {
        scrolled = window.scrollY > 10;
    }

    onMount(() => {
        window.addEventListener("scroll", handleScroll);
        currentPath = window.location.pathname;
        return () => window.removeEventListener("scroll", handleScroll);
    });

    function toggleSubMenu(cat: { slug: string; subCategories?: any[] }) {
        if (!cat.subCategories) {
            window.location.href = "/" + cat.slug;
            return;
        }
        openMenuSlug = openMenuSlug === cat.slug ? null : cat.slug;
        if (openMenuSlug === cat.slug) openMenuSlug = null;
        else openMenuSlug = cat.slug;
    }

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }

    function isActive(cat: { slug: string; subCategories?: any[] }) {
        if (currentPath === "/" + cat.slug) return true;
        if (
            cat.subCategories &&
            cat.subCategories.some((sub) => currentPath === "/" + sub.slug)
        )
            return true;
        return false;
    }

    type Category = {
        name: string;
        slug: string;
        subCategories?: Category[];
    };
    let categories: Category[] = categoriesData;

    $: mainCategories = categories.slice(0, 5);
    $: moreCategories = categories.slice(5);
</script>

<header
    class="fixed top-0 w-full z-50 transition-colors duration-300"
    style="background: {scrolled
        ? 'linear-gradient(to top, rgba(0,0,0,0.8) 100%) '
        : 'linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)'}"
>
    <div class="mx-auto lg:container px-4 py-3">
        <div class="flex items-start justify-between">
            <button
                on:click={toggleMobileMenu}
                class="lg:hidden p-2 rounded-lg    hover:bg-pri transition-colors order-1"
            >
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </button>

            <div
                class="hidden lg:!flex items-center space-x-3 max-w-[13rem] order-2 lg:order-1"
            >
                <img
                    src="/Images/Main/logo-light.png"
                    alt="Logo"
                    class="w-full rounded-xl drop-shadow-2xl"
                />
            </div>

            <nav class="hidden lg:!flex flex-wrap gap-x-6 gap-y-2 order-2">
                {#each mainCategories as cat}
                    <div class="relative flex flex-col gap-3 group">
                        <a
                            href={cat.subCategories ? "#" : "/" + cat.slug}
                            class="py-2 px-3 font-bold transition-colors {isActive(
                                cat,
                            )
                                ? 'hover-font'
                                : 'hover-font'}"
                            on:click|preventDefault={() => toggleSubMenu(cat)}
                        >
                            {cat.name}
                        </a>

                        {#if cat.subCategories}
                            <div
                                class="absolute lg:p-5 z-[90] left-0 top-full mt-1 bg-black/80 backdrop-blur-md
                                rounded-lg shadow-lg custom-width border-1 border-white/30
                                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                transition-all duration-200"
                                class:opacity-100={openMenuSlug === cat.slug}
                                class:visible={openMenuSlug === cat.slug}
                            >
                                <div class="">
                                    <h1 class="font-bold py-2 text-xl mb-2">
                                        {cat.name}
                                    </h1>
                                    <div
                                        class="grid auto-rows-auto gap-4 max-h-[8rem] overflow-y-auto p-5"
                                        style="grid-template-columns: repeat(4, minmax(0, max-content)); gap:1rem; "
                                    >
                                        {#each cat.subCategories as sub}
                                            <a
                                                href={"/" + sub.slug}
                                                class="block px-4 py-2 text-white hover:bg-white/30 rounded-xl
                               font-bold transition-colors {currentPath ===
                                                '/' + sub.slug
                                                    ? 'hover-font'
                                                    : ''}"
                                            >
                                                {sub.name}
                                            </a>
                                        {/each}
                                    </div>
                                </div>

                                <div
                                    class="border-t-2 flex flex-col gap-4 py-5 lg:mt-[1rem] border-white/30"
                                >
                                    <h1 class="font-bold text-xl mb-2">
                                        Khám phá ngay
                                    </h1>

                                    <div class="flex flex-wrap gap-3">
                                        <a
                                            href="sach-moi-nhat"
                                            class="py-2 px-3 hover:bg-white/50 bg-white/20 backdrop-blur rounded-md"
                                            >Sách mới nhất</a
                                        >
                                        <a
                                            href="sach-da-doc"
                                            class="py-2 px-3 hover:bg-white/50 bg-white/20 backdrop-blur rounded-md"
                                            >Sách đã đọc</a
                                        >
                                        <a
                                            href="sach-nghe"
                                            class="py-2 px-3 hover:bg-white/50 bg-white/20 backdrop-blur rounded-md"
                                            >Sách nghe</a
                                        >
                                    </div>
                                </div>
                            </div>
                        {/if}
                    </div>
                {/each}

                {#if moreCategories.length > 0}
                    <div class="relative flex flex-col gap-3 group">
                        <a
                            href="#"
                            class="py-2 px-3 text-white/90 font-bold transition-colors hover-font"
                            on:click|preventDefault={() =>
                                (showMoreOpen = !showMoreOpen)}
                        >
                            Xem thêm
                        </a>

                        {#if showMoreOpen}
                            <div
                                class="absolute left-0 top-full mt-1 bg-black/80 backdrop-blur-md
                 rounded-lg shadow-lg custom-width border-1 border-white/30
                 transition-all duration-200 z-50"
                            >
                                <div
                                    class="grid auto-rows-auto gap-4 max-h-[12rem] overflow-y-auto p-5"
                                    style="grid-template-columns: repeat(1, minmax(0, max-content));"
                                >
                                    {#each moreCategories as cat}
                                        <a
                                            href={cat.subCategories
                                                ? "#"
                                                : "/" + cat.slug}
                                            class="block px-4 py-2 text-white hover:bg-white/30 rounded-xl font-bold"
                                            on:click|preventDefault={() =>
                                                toggleSubMenu(cat)}
                                        >
                                            {cat.name}
                                        </a>
                                    {/each}
                                </div>
                            </div>
                        {/if}
                    </div>
                {/if}
            </nav>

            <div class="flex items-center space-x-3 order-3">
                <div class=" relative items-center group">
                    <input
                        type="text"
                        placeholder="Tìm kiếm sách, tác giả..."
                        class="absolute right-12 w-0 opacity-0 px-0 py-2 rounded-xl bg-pri text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:w-64 focus:px-4 focus:opacity-100 transition-all duration-300 group-hover:w-64 group-hover:opacity-100 group-hover:px-4"
                    />

                    <button
                        class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-emerald-500 transition-colors duration-300"
                    >
                        <svg
                            class="h-5 w-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </div>

                <div class="hidden lg:block">
                    <span class="flex items-center space-x-3">
                        <ButtonNoBg
                            text="Đăng ký"
                            href="/dang-ky"
                            iconPosition="none"
                        />

                        <Button
                            text="Đăng nhập"
                            href="/dang-nhap"
                            iconPosition="none"
                        />
                    </span>
                </div>
            </div>
        </div>
    </div>
   <div
  class="overflow-x-auto scrollbar-hide transition-transform duration-300"
  style="transform: translateY({scrolled ? '-100%' : '0'}); display: {scrolled ? 'none' : 'block'}"
>

        <nav class="flex w-[80vw] gap-3">
            {#each mainCategories as cat}
                <div class="flex-shrink-0">
                    <a
                        href={cat.subCategories ? "#" : "/" + cat.slug}
                        class="py-2 px-3 font-bold transition-colors hover-font"
                        on:click|preventDefault={() => toggleSubMenu(cat)}
                    >
                        {cat.name}
                    </a>
                </div>
            {/each}
        </nav>
    </div>
</header>

<div
  class="lg:hidden z-[100] bg-[#121214] fixed top-0 left-0 w-[70%] h-screen
     border-r overflow-y-auto scrollbar-hide transition-all duration-300
     {mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}"
>
    <div class="px-4 py-4 mt-16">
        <div class="border-b flex flex-col gap-4 border-white/30 pb-4 mb-4">
            <div class="flex flex-col gap-3 items-center">
                <span class="w-24 h-24 overflow-hidden rounded-full">
                    <img
                        src="/Images/Main/user.webp"
                        alt=""
                        class="w-full h-full object-cover"
                    />
                </span>

                <Button
                    text="Đăng nhập"
                    href="/dang-nhap"
                    iconPosition="none"
                />
            </div>
            <span>
                <a
                    href="/"
                    class="block px-4 py-3 text-gray-300
                hover:text-whiterounded-lg
                transition-colors">Trang chủ</a
                >
                <a
                    href="/ve-chung-toi"
                    class="block px-4 py-3 text-gray-300
                hover:text-whiterounded-lg
                transition-colors">Về chúng tôi</a
                >
            </span>
        </div>

        <nav class="space-y-2">
            {#each categories as cat}
                <a
                    href={"/" + cat.slug}
                    class="block px-4 py-3 text-gray-300 hover:text-white rounded-lg transition-colors {isActive(
                        cat,
                    )
                        ? 'text-emerald-400 bg-gray-800'
                        : ''}"
                >
                    {cat.name}
                </a>
            {/each}
        </nav>

        <div class="border-t border-gray-700 mt-4 pt-4">
            <h3 class="text-white font-semibold mb-3">Khám phá ngay</h3>
            <div class="flex flex-wrap gap-2">
                <a
                    href="sach-moi-nhat"
                    class="py-2 px-3 text-sm hover:bg-white/50 bg-white/20 backdrop-blur rounded-md text-white"
                    >Sách mới nhất</a
                >
                <a
                    href="sach-da-doc"
                    class="py-2 px-3 text-sm hover:bg-white/50 bg-white/20 backdrop-blur rounded-md text-white"
                    >Sách đã đọc</a
                >
                <a
                    href="sach-nghe"
                    class="py-2 px-3 text-sm hover:bg-white/50 bg-white/20 backdrop-blur rounded-md text-white"
                    >Sách nghe</a
                >
            </div>
        </div>
    </div>
</div>

{#if mobileMenuOpen}
    <div
        class="lg:hidden fixed inset-0 bg-black/50 z-30"
        on:click={toggleMobileMenu}
    ></div>
{/if}
