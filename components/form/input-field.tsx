"use client";

import { useId } from "react";
import { Input, type InputProps } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert } from "./alert";
import { useFieldContext } from "./form";

export type InputFieldProps = InputProps & {
	label: string;
};

export function InputField({ label, required, ...props }: InputFieldProps) {
	const id = useId();
	const field = useFieldContext<string>();

	return (
		<div className="space-y-2">
			<div className="relative">
				<Input
					className="peer placeholder:text-transparent"
					id={`${id}-${field.name}`}
					placeholder=" "
					required={required}
					name={field.name}
					value={field.state.value}
					onBlur={field.handleBlur}
					onChange={(event) => field.handleChange(event.target.value)}
					variant={!field.state.meta.isValid ? "error" : "default"}
					{...props}
				/>
				<Label
					htmlFor={`${id}-${field.name}`}
					className="-top-1.5 peer-placeholder-shown:-translate-y-1/2 peer-focus:-top-1.5 absolute left-0 ml-2 cursor-text bg-background-100 pr-2 pl-2 text-gray-1000 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:select-none peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-900 peer-placeholder-shown:text-sm peer-focus:translate-y-0 peer-focus:bg-background-100 peer-focus:text-gray-1000 peer-focus:text-xs"
				>
					{label}
					{required && <span className="ml-1 text-red-700">*</span>}
				</Label>
			</div>
			<Alert meta={field.state.meta} />
		</div>
	);
}
