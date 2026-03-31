<script lang="ts">
  import { Avatar } from "bits-ui";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof Avatar.Image>;

  let { ref = $bindable(null), class: className, ...props }: Props = $props();
</script>

<Avatar.Image
  bind:ref
  data-slot="avatar-image"
  class={["avatar--image", className]}
  {...props}
/>

<style>
  :global {
    @layer components {
      .avatar--image {
        border-radius: calc(infinity * 1px);
        aspect-ratio: 1 / 1;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>
