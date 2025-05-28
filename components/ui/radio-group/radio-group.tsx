"use client";

import { cn } from "@/lib/cn";
import { CircleIcon } from "lucide-react";
import { RadioGroup as RadioGroupPrimitives } from "radix-ui";
import type { ComponentProps } from "react";

export type RadioGroupProps = ComponentProps<typeof RadioGroupPrimitives.Root>;
export type RadioGroupItemProps = ComponentProps<
	typeof RadioGroupPrimitives.Item
>;

export function RadioGroup({ className, ref, ...props }: RadioGroupProps) {
	return (
		<RadioGroupPrimitives.Root
			className={cn("grid gap-2", className)}
			ref={ref}
			{...props}
		/>
	);
}
RadioGroup.displayName = RadioGroupPrimitives.Root.displayName;

export function RadioGroupItem({
	className,
	ref,
	...props
}: RadioGroupItemProps) {
	return (
		<RadioGroupPrimitives.Item
			className={cn(
				"peer aspect-square size-4 rounded-full border border-neutral-600 text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 disabled:cursor-not-allowed data-[disabled]:data-[state=checked]:border-neutral-600 data-[disabled]:data-[state=checked]:bg-neutral-600 data-[state=checked]:border-neutral-100 data-[state=checked]:bg-neutral-100",
				className,
			)}
			ref={ref}
			{...props}
		>
			<RadioGroupPrimitives.Indicator className="flex items-center justify-center">
				<CircleIcon className="size-2 fill-current text-current" />
			</RadioGroupPrimitives.Indicator>
		</RadioGroupPrimitives.Item>
	);
}
RadioGroupItem.displayName = RadioGroupPrimitives.Item.displayName;
