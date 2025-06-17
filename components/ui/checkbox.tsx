"use client";

import { cn } from "@/lib/cn";
import { CheckIcon } from "lucide-react";
import { Checkbox as CheckboxPrimitives } from "radix-ui";
import type { ComponentProps } from "react";

export type CheckboxProps = ComponentProps<typeof CheckboxPrimitives.Root>;

export function Checkbox({ className, ref, ...props }: CheckboxProps) {
	return (
		<CheckboxPrimitives.Root
			ref={ref}
			className={cn(
				"peer size-4 shrink-0 rounded-sm border border-neutral-600 transition-all focus-visible:border-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 disabled:cursor-not-allowed data-[disabled]:data-[state=checked]:border-neutral-600 data-[disabled]:data-[state=checked]:bg-neutral-600 data-[state=checked]:border-neutral-100 data-[state=checked]:bg-neutral-100 data-[state=checked]:text-neutral-900",
				className,
			)}
			{...props}
		>
			<CheckboxPrimitives.Indicator
				className={cn("flex items-center justify-center text-current")}
			>
				<CheckIcon size={16} />
			</CheckboxPrimitives.Indicator>
		</CheckboxPrimitives.Root>
	);
}
Checkbox.displayName = CheckboxPrimitives.Root.displayName;
