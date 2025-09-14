<script lang="ts">
  import Button from "../Buttons/Button.svelte";
  import { faBook } from "@fortawesome/free-solid-svg-icons";

  export let cover: string;
  export let title: string;
  export let author: string;
  export let status: string = "";
  export let description: string = "";
  export let link: string = "#";
</script>

<div
  class="group relative w-52 h-80 bg-[#333] rounded-xl overflow-hidden cursor-pointer 
  transition-all duration-400 ease-in-out hover:w-[600px] hover:h-[300px] hover:p-4 
  hover:bg-[rgba(45,45,45,0.95)] hover:backdrop-blur-md hover:border 
  hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
>
  <div class="flex gap-6 h-full">
     <div
      class="flex-shrink-0 w-52  rounded-lg overflow-hidden transition-all duration-400 
      ease-in-out group-hover:h-68"
    >
      <img
        src={cover}
        alt={title}
        class="w-full h-full object-cover transition-all duration-400"
      />
    </div>

     <div
      class="flex-1 flex flex-col justify-between opacity-0 invisible translate-x-5 
      transition-all duration-400 delay-100 text-white group-hover:opacity-100 
      group-hover:visible group-hover:translate-x-0"
    >
      <div>
        <h1 class="text-xl font-bold leading-snug mb-2">{title}</h1>
        <p class="text-gray-400 mb-4">{author}</p>

         <div class="flex items-center justify-between">
          <span
            class="inline-block bg-emerald-500/10 text-emerald-500 px-3 py-1 
            rounded-full text-sm font-medium"
            >{status}</span
          >

          <span class="flex lg:flex-row flex-col gap-2">
            <Button
              text="Đọc sách"
              icon={faBook}
              href={link}
              iconPosition="left"
            />
            <button
              class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500/20 hover:text-red-500 transition"
            >
              ♥
            </button>
          </span>
        </div>
         <p
          class="text-sm text-gray-300 leading-relaxed mt-4 line-clamp-4 group-hover:line-clamp-none"
        >
          {description}
        </p>
      </div>

      <a
        href={link}
        class="text-emerald-500 text-sm font-medium mt-4 block hover:underline hover:text-emerald-600 transition"
        >Chi tiết</a
      >
    </div>
  </div>
</div>
