<script lang="ts">
  import type { HTMLTextareaAttributes } from "svelte/elements";

  type TextareaProps = HTMLTextareaAttributes & {
    ref?: HTMLTextAreaElement | null;
  };

  let {
    ref = $bindable(null),
    value = $bindable(),
    class: className,
    ...props
  }: TextareaProps = $props();
</script>

<textarea bind:this={ref} class={["textarea", className]} bind:value {...props}
></textarea>

<style>
  :global {
    @layer components {
      .textarea {
        outline-color: transparent;
        outline-style: solid;
        outline-width: 3px;
        outline-offset: 1px;
        border-width: 1px;
        border-style: solid;
        border-color: var(--color-neutral-6);
        border-radius: 0.5em;
        background-color: var(--color-neutral-1);
        padding-inline: 0.75rem;
        padding-block: 0.5rem;
        min-height: 7.5rem;
        font-size: var(--body-medium);
        line-height: 1.5;
        letter-spacing: normal;

        &:focus-visible {
          outline-color: var(--color-primary-8);

          &[aria-invalid="true"] {
            outline-color: var(--color-danger-8);
          }
        }

        &[aria-invalid="true"] {
          border-color: var(--color-danger-6);
          background-color: var(--color-danger-1);
        }
      }
    }
  }
</style>
