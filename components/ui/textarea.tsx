import { cn } from "@/lib/cn";
import { type VariantProps, cva } from "class-variance-authority";
import type { ComponentProps } from "react";

export type TextareaProps = ComponentProps<"textarea"> &
	VariantProps<typeof textareaVariants>;

export const textareaVariants = cva(
	"focus- field-sizing-content min-h-20 w-full resize-none rounded-sm border px-4 py-3 text-sm transition-colors placeholder:text-neutral-600 focus:border-neutral-100 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:text-neutral-600",
	{
		variants: {
			intent: {
				primary:
					"border-neutral-600 focus-visible:border-neutral-500 focus-visible:ring-neutral-700",
				destructive: "border-error-800",
			},
		},
		defaultVariants: {
			intent: "primary",
		},
	},
);

export function Textarea({ className, intent, ref, ...props }: TextareaProps) {
	return (
		<textarea
			ref={ref}
			className={cn(textareaVariants({ intent, className }))}
			{...props}
		/>
	);
}
Textarea.displayName = "Textarea";
