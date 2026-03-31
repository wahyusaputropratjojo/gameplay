<script lang="ts">
  import { AspectRatio } from "bits-ui";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof AspectRatio.Root>;

  let { ref = $bindable(null), ...props }: Props = $props();
</script>

<AspectRatio.Root bind:ref data-slot="aspect-ratio" {...props} />
