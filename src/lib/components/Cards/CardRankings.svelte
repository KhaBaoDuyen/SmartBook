<script lang="ts">
    export let number: number = 1;
    export let cover: string;
    export let title: string;
    export let author: string;
    export let status: string = "";
    export let description: string = "";
    export let link: string = "#";

    import CardBook from "./CardBook.svelte";
</script>

<div class="relative group max-w-min">
    <CardBook {cover} {title} {author} {status} {description} {link} />
    <div
        class="absolute bottom-0 left-0 bg-rank-1 transition duration-300 group-hover:opacity-0"
    >
        <h1 class="text-9xl label-rank">{number}</h1>
    </div>
</div>
