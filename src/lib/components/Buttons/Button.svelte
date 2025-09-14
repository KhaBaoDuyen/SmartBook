<script lang="ts">
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";

  export let text: string = "Click me";
  export let href: string = "#";
  export let icon: any = null;  
  export let iconPosition: "left" | "right" | "none" = "none";
</script>

<a
  href={href}
  class="button-primary flex items-center gap-2 px-4 py-2 rounded-3xl bg-emerald-600 text-white hover:bg-emerald-700"
>
  {#if icon && iconPosition === "left"}
    <FontAwesomeIcon icon={icon} class="w-4 h-4" />
  {/if}

  <span class="min-w-max">{text}</span>

  {#if icon && iconPosition === "right"}
    <FontAwesomeIcon icon={icon} class="w-4 h-4" />
  {/if}
</a>
