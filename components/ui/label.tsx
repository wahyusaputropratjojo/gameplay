import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { Label as LabelPrimitives } from "radix-ui";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export type LabelProps = ComponentProps<typeof LabelPrimitives.Root> &
	VariantProps<typeof labelVariants>;

export const labelVariants = cva(
	"font-medium text-neutral-100 text-sm leading-none peer-disabled:cursor-not-allowed",
	{
		variants: {
			variant: {
				error: "text-error-500",
			},
			position: {
				inset: "absolute top-3 left-4 z-50 text-xs transition-all",
			},
		},
	},
);

export function Label({
	className,
	variant,
	position,
	ref,
	...props
}: LabelProps) {
	return (
		<LabelPrimitives.Root
			ref={ref}
			className={cn(labelVariants({ variant, position, className }))}
			{...props}
		/>
	);
}
Label.displayName = LabelPrimitives.Root.displayName;
