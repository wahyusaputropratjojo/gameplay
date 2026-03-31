<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";

  type InputProps = HTMLInputAttributes & {
    ref?: HTMLInputElement | null;
  };

  let {
    ref = $bindable(null),
    class: className,
    ...props
  }: InputProps = $props();
</script>

<input bind:this={ref} class={["input", className]} {...props} />

<style>
  :global {
    @layer components {
      .input {
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
        min-height: 2.5rem;
        font-size: var(--text-body-medium);
        line-height: 1;
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
