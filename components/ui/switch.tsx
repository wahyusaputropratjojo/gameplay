"use client";

import { Switch as SwitchPrimitives } from "radix-ui";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export type SwitchProps = ComponentProps<typeof SwitchPrimitives.Root>;

export function Switch({ className, ref, ...props }: SwitchProps) {
	return (
		<SwitchPrimitives.Root
			className={cn(
				"peer inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border border-transparent queries-[disabled]:queries-[state=checked]:bg-neutral-600 queries-[state=checked]:bg-neutral-100 queries-[state=unchecked]:bg-neutral-600 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 disabled:cursor-not-allowed",
				className,
			)}
			ref={ref}
			{...props}
		>
			<SwitchPrimitives.Thumb
				className={cn(
					"pointer-events-none block size-5 queries-[state=checked]:translate-x-4 queries-[state=unchecked]:translate-x-0.5 rounded-full bg-neutral-900 ring-0 transition-transform",
				)}
			/>
		</SwitchPrimitives.Root>
	);
}
Switch.displayName = SwitchPrimitives.Root.displayName;
