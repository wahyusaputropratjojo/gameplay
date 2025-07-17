import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type SkeletonProps = ComponentProps<"div">;

export function Skeleton({ className, ...props }: SkeletonProps) {
	return (
		<div
			data-slot="skeleton"
			className={cn("m-0 animate-pulse rounded-xl bg-gray-100 p-0", className)}
			{...props}
		/>
	);
}
