<script lang="ts">
  import { Avatar } from "bits-ui";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof Avatar.Fallback>;

  let { ref = $bindable(null), class: className, ...props }: Props = $props();
</script>

<Avatar.Fallback
  bind:ref
  data-slot="avatar-fallback"
  class={["avatar--fallback", className]}
  {...props}
/>

<style>
  :global {
    @layer components {
      .avatar--fallback {
        background-color: var(--color-neutral-3);
        border-radius: calc(infinity * 1px);
        color: var(--color-neutral-11);
        overflow: hidden;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
