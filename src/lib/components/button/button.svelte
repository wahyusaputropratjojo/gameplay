<script lang="ts">
  import { Button } from "bits-ui";
  import { cva } from "class-variance-authority";
  import type { VariantProps } from "class-variance-authority";

  const buttonVariants = cva("button", {
    compoundVariants: [
      {
        className: "button--primary-danger",
        intent: "primary",
        status: "danger",
      },
      {
        className: "button--secondary-danger",
        intent: "secondary",
        status: "danger",
      },
      {
        className: "button--tertiary-danger",
        intent: "tertiary",
        status: "danger",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
    variants: {
      fullWidth: {
        true: "button--full-width",
      },
      iconOnly: {
        true: "button--icon-only",
      },
      intent: {
        primary: "button--primary",
        secondary: "button--secondary",
        tertiary: "button--tertiary",
      },
      size: {
        large: "button--large",
        medium: "button--medium",
        small: "button--small",
      },
      status: {
        danger: "button--danger",
      },
    },
  });

  type ButtonProps = Button.RootProps & VariantProps<typeof buttonVariants>;

  let {
    ref = $bindable(null),
    intent,
    iconOnly,
    fullWidth,
    size,
    status,
    class: className,
    ...props
  }: ButtonProps = $props();
</script>

<Button.Root
  bind:ref
  class={buttonVariants({
    intent,
    iconOnly,
    fullWidth,
    size,
    status,
    className,
  })}
  {...props}
/>

<style>
  :global {
    @layer components {
      .button {
        display: inline flex;
        position: relative;
        column-gap: var(--button-column-gap);
        justify-content: center;
        align-items: center;
        transition-duration: 150ms;
        transition-property:
          color, background-color, border-color, outline-color,
          text-decoration-color;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        outline: transparent;
        border-radius: 0.5em;
        isolation: isolate;
        padding-inline: var(--button-padding-inline);
        padding-block: var(--button-padding-block);
        overflow: hidden;
        font-weight: 500;
        line-height: 1;
        letter-spacing: normal;
        user-select: none;

        &:focus-visible {
          z-index: 10;
          outline-color: var(--color-primary-8);
          outline-style: solid;
          outline-width: 3px;
          outline-offset: 1px;
        }

        svg {
          flex-shrink: 0;
          width: 1em;
          height: 1em;
        }
      }

      .button--primary {
        background-color: var(--color-primary-9);
        color: var(--color-light);

        &:active {
          background-color: var(--color-primary-11);
        }

        &:hover {
          background-color: var(--color-primary-10);
        }
      }

      .button--primary-danger {
        background-color: var(--color-danger-9);
        color: var(--color-light);

        &:active {
          background-color: var(--color-danger-11);
        }

        &:hover {
          background-color: var(--color-danger-10);
        }
      }

      .button--secondary {
        background-color: var(--color-neutral-3);
        color: var(--color-neutral-12);

        &:active {
          background-color: var(--color-neutral-5);
        }

        &:hover {
          background-color: var(--color-neutral-4);
        }
      }

      .button--secondary-danger {
        background-color: var(--color-neutral-3);
        color: var(--color-danger-9);
      }

      .button--tertiary {
        background-color: transparent;
        color: var(--color-neutral-12);

        &:active {
          background-color: var(--color-neutral-5);
        }

        &:hover {
          background-color: var(--color-neutral-4);
        }
      }

      .button--tertiary-danger {
        color: var(--color-danger-9);
      }

      .button--icon-only {
        padding: var(--button-padding-block);
        aspect-ratio: 1 / 1;
      }

      .button--full-width {
        width: 100%;
      }

      .button--danger {
        &:focus-visible {
          outline-color: var(--color-danger-8);
        }
      }

      .button--small {
        --button-padding-block: 0.5em;
        --button-padding-inline: 0.8em;
        --button-column-gap: calc(var(--button-padding-inline) / 2);

        font-size: var(--label-medium);
      }

      .button--medium {
        --button-padding-block: 0.8em;
        --button-padding-inline: 1.1em;
        --button-column-gap: calc(var(--button-padding-inline) / 2);

        font-size: var(--label-large);
      }

      .button--large {
        --button-padding-block: 1.1em;
        --button-padding-inline: 1.4em;
        --button-column-gap: calc(var(--button-padding-inline) / 2);

        font-size: var(--label-large);
      }
    }
  }
</style>
