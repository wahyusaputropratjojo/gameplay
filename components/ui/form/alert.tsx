import type { AnyFieldMeta } from "@tanstack/react-form";
import { OctagonAlertIcon } from "lucide-react";
import type { ZodError } from "zod";

export type AlertProps = {
	meta: AnyFieldMeta;
};

export function Alert({ meta }: AlertProps) {
	if (!meta.isTouched) return null;

	return (
		<ul>
			{meta.errors.slice(0, 1).map(({ message }: ZodError) => (
				<li
					key={message}
					className="flex items-start gap-1 text-red-900 text-sm"
				>
					<span className="flex h-[1lh] items-center">
						<OctagonAlertIcon
							size={14}
							className="shrink-0 text-error-800"
						/>
					</span>
					{message}
				</li>
			))}
		</ul>
	);
}
