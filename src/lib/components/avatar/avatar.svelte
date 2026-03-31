<script lang="ts">
  import { Avatar } from "bits-ui";
  import { cva } from "class-variance-authority";
  import type { ComponentProps } from "svelte";
  import type { VariantProps } from "class-variance-authority";

  const avatarVariants = cva("avatar", {
    variants: {
      size: {
        small: "avatar--small",
        medium: "avatar--medium",
        large: "avatar--large",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  });

  type Props = ComponentProps<typeof Avatar.Root> &
    VariantProps<typeof avatarVariants>;

  let {
    ref = $bindable(null),
    class: className,
    size,
    ...props
  }: Props = $props();
</script>

<Avatar.Root
  bind:ref
  data-slot="avatar"
  class={avatarVariants({
    size,
    className,
  })}
  {...props}
/>

<style>
  :global {
    @layer components {
      .avatar {
        display: flex;
        flex-shrink: 0;
        user-select: none;
        letter-spacing: var(--tracking-tighter);
        font-weight: var(--font-weight-medium);

        svg {
          width: 1em;
        }
      }

      .avatar--small {
        height: 1.5rem;
        width: 1.5rem;
        font-size: var(--text-label-small);
      }

      .avatar--medium {
        height: 2rem;
        width: 2rem;
        font-size: var(--text-label-medium);
      }

      .avatar--large {
        height: 2.5rem;
        width: 2.5rem;
        font-size: var(--text-label-large);
      }
    }
  }
</style>
