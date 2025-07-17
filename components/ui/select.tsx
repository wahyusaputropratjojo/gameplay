import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Select as SelectPrimitives } from "radix-ui";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export type SelectContentProps = ComponentProps<
	typeof SelectPrimitives.Content
>;
export type SelectItemProps = ComponentProps<typeof SelectPrimitives.Item>;
export type SelectLabelProps = ComponentProps<typeof SelectPrimitives.Label>;
export type SelectScrollDownButtonProps = ComponentProps<
	typeof SelectPrimitives.ScrollDownButton
>;
export type SelectScrollUpButtonProps = ComponentProps<
	typeof SelectPrimitives.ScrollUpButton
>;
export type SelectSeparatorProps = ComponentProps<
	typeof SelectPrimitives.Separator
>;
export type SelectTriggerProps = ComponentProps<
	typeof SelectPrimitives.Trigger
>;

export const Select = SelectPrimitives.Root;
export const SelectGroup = SelectPrimitives.Group;
export const SelectValue = SelectPrimitives.Value;

export function SelectContent({
	className,
	children,
	position = "popper",
	ref,
	...props
}: SelectContentProps) {
	return (
		<SelectPrimitives.Portal>
			<SelectPrimitives.Content
				ref={ref}
				className={cn(
					"queries-[state=closed]:fade-out-0 queries-[state=open]:fade-in-0 queries-[state=closed]:zoom-out-95 queries-[state=open]:zoom-in-95 queries-[side=bottom]:slide-in-from-top-2 queries-[side=left]:slide-in-from-right-2 queries-[side=right]:slide-in-from-left-2 queries-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] origin-[--radix-select-content-transform-origin] queries-[state=closed]:animate-out queries-[state=open]:animate-in overflow-y-auto overflow-x-hidden rounded-sm border border-neutral-500 bg-neutral-900 text-neutral-100",
					position === "popper" &&
						"queries-[side=left]:-translate-x-1 queries-[side=top]:-translate-y-1 queries-[side=right]:translate-x-1 queries-[side=bottom]:translate-y-1",
					className,
				)}
				position={position}
				{...props}
			>
				<SelectScrollUpButton />
				<SelectPrimitives.Viewport
					className={cn(
						"p-1",
						position === "popper" &&
							"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
					)}
				>
					{children}
				</SelectPrimitives.Viewport>
				<SelectScrollDownButton />
			</SelectPrimitives.Content>
		</SelectPrimitives.Portal>
	);
}
SelectContent.displayName = SelectPrimitives.Content.displayName;

export function SelectItem({
	className,
	children,
	ref,
	...props
}: SelectItemProps) {
	return (
		<SelectPrimitives.Item
			ref={ref}
			className={cn(
				"queries-[disabled]:pointer-events-none relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm queries-[disabled]:opacity-50 outline-none focus:bg-neutral-800 focus:text-neutral-100",
				className,
			)}
			{...props}
		>
			<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
				<SelectPrimitives.ItemIndicator>
					<CheckIcon size={16} />
				</SelectPrimitives.ItemIndicator>
			</span>

			<SelectPrimitives.ItemText>{children}</SelectPrimitives.ItemText>
		</SelectPrimitives.Item>
	);
}
SelectItem.displayName = SelectPrimitives.Item.displayName;

export function SelectLabel({ className, ref, ...props }: SelectLabelProps) {
	return (
		<SelectPrimitives.Label
			ref={ref}
			className={cn("pt-3 pr-2 pb-1.5 pl-8 font-bold text-sm", className)}
			{...props}
		/>
	);
}
SelectLabel.displayName = SelectPrimitives.Label.displayName;

export function SelectScrollDownButton({
	className,
	ref,
	...props
}: SelectScrollDownButtonProps) {
	return (
		<SelectPrimitives.ScrollDownButton
			ref={ref}
			className={cn(
				"flex cursor-default items-center justify-center bg-error-500 py-1",
				className,
			)}
			{...props}
		>
			<ChevronDownIcon className="h-4 w-4" />
		</SelectPrimitives.ScrollDownButton>
	);
}
SelectScrollDownButton.displayName =
	SelectPrimitives.ScrollDownButton.displayName;

export function SelectScrollUpButton({
	className,
	ref,
	...props
}: SelectScrollUpButtonProps) {
	return (
		<SelectPrimitives.ScrollUpButton
			ref={ref}
			className={cn(
				"flex cursor-default items-center justify-center py-1",
				className,
			)}
			{...props}
		>
			<ChevronUpIcon className="h-4 w-4" />
		</SelectPrimitives.ScrollUpButton>
	);
}
SelectScrollUpButton.displayName = SelectPrimitives.ScrollUpButton.displayName;

export function SelectSeparator({
	className,
	ref,
	...props
}: SelectSeparatorProps) {
	return (
		<SelectPrimitives.Separator
			ref={ref}
			className={cn("-mx-1 my-1 h-px bg-muted", className)}
			{...props}
		/>
	);
}
SelectSeparator.displayName = SelectPrimitives.Separator.displayName;

export function SelectTrigger({
	className,
	children,
	ref,
	...props
}: SelectTriggerProps) {
	return (
		<SelectPrimitives.Trigger
			ref={ref}
			className={cn(
				"flex w-full items-center justify-between rounded-sm border border-neutral-500 bg-transparent px-4 py-3 text-sm focus:border-neutral-100 focus:outline-none disabled:cursor-not-allowed [&>span]:line-clamp-1",
				className,
			)}
			{...props}
		>
			{children}
			<SelectPrimitives.Icon asChild>
				<ChevronDownIcon className="h-4 w-4 opacity-50" />
			</SelectPrimitives.Icon>
		</SelectPrimitives.Trigger>
	);
}
SelectTrigger.displayName = SelectPrimitives.Trigger.displayName;
