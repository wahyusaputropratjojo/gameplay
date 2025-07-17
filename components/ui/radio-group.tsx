"use client";

import { CircleIcon } from "lucide-react";
import { RadioGroup as RadioGroupPrimitives } from "radix-ui";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

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
				"peer aspect-square size-4 rounded-full border border-neutral-600 queries-[disabled]:queries-[state=checked]:border-neutral-600 queries-[state=checked]:border-neutral-100 queries-[disabled]:queries-[state=checked]:bg-neutral-600 queries-[state=checked]:bg-neutral-100 text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 disabled:cursor-not-allowed",
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
