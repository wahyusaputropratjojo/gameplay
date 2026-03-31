<script lang="ts">
  import { Label } from "bits-ui";
  import { cva, type VariantProps } from "class-variance-authority";

  type LabelProps = Label.RootProps & VariantProps<typeof labelVariants>;

  export const labelVariants = cva("label", {
    variants: {
      size: {
        large: "label--large",
        medium: "label--medium",
        small: "label--small",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  });

  let {
    ref = $bindable(null),
    class: className,
    size,
    ...props
  }: LabelProps = $props();
</script>

<Label.Root bind:ref class={labelVariants({ size, className })} {...props} />

<style>
  :global {
    @layer components {
      .label {
        color: var(--color-neutral-12);
        font-weight: 500;
        line-height: 1.375;
        letter-spacing: normal;
      }

      .label--large {
        font-size: var(--text-label-large);
      }

      .label--medium {
        font-size: var(--text-label-medium, 0.875rem);
      }

      .label--small {
        font-size: var(--text-label-small, 0.75rem);
      }
    }
  }
</style>
