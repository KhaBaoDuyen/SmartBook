<script lang="ts">
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";

  export let text: string = "Click me";
  export let href: string = "#";
  export let icon: any = null;  
  export let iconPosition: "left" | "right" | "none" = "none";
</script>

<a
  href={href}
  class=" font-bold flex items-center gap-2 px-4 py-2 rounded-3xl bg-white/30 backdrop-blur-md 
  border-1 border-white/40 shadow-inner shadow-white/40 text-white hover:shadow-white/70"
>
  {#if icon && iconPosition === "left"}
    <FontAwesomeIcon icon={icon} class="w-4 h-4" />
  {/if}

  <span class="min-w-max">{text}</span>

  {#if icon && iconPosition === "right"}
    <FontAwesomeIcon icon={icon} class="w-4 h-4" />
  {/if}
</a>
