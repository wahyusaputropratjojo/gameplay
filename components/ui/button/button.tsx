import { cn } from "@/lib/cn";
import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	};

export const buttonVariants = cva(
	"inline-flex w-max cursor-pointer items-center gap-2 rounded-lg font-medium underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-gray-500 disabled:border disabled:border-gray-300 disabled:bg-gray-400 disabled:text-gray-1000/50",
	{
		variants: {
			size: {
				small: "h-8 px-3 text-sm decoration-1",
				medium: "h-10 px-4 text-sm decoration-2",
				large: "h-12 px-5 text-base decoration-2",
			},
			fullWidth: {
				true: "w-full",
			},
			disabled: {
				true: "disabled:cursor-not-allowed",
			},
			align: {
				start: "justify-start",
				center: "justify-center",
				end: "justify-end",
			},
			variant: {
				primary: "bg-gray-1000 text-background-100 hover:bg-gray-900",
				secondary: "border border-gray-400 text-gray-1000 hover:bg-gray-200",
				tertiary: "bg-neutral-700 text-gray-1000 hover:bg-gray-200",
				warning: "bg-amber-800 text-dark hover:bg-amber-900",
				error: "bg-red-800 text-light hover:bg-red-900",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "medium",
			align: "center",
		},
	},
);

export function Button({
	asChild = false,
	className,
	variant,
	size,
	align,
	prefix,
	children,
	disabled,
	fullWidth,
	ref,
	...props
}: ButtonProps) {
	const Component = asChild ? Slot : "button";

	return (
		<Component
			className={cn(
				buttonVariants({
					size,
					align,
					fullWidth,
					disabled,
					variant,
					className,
				}),
			)}
			disabled={disabled}
			ref={ref}
			{...props}
		>
			{children}
		</Component>
	);
}
