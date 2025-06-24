import { Button, ButtonProps } from "@/components/ui/button";
import { CornerUpRightIcon } from "lucide-react";

export function NextButton(props: ButtonProps) {
	return (
		<Button
			variant="secondary"
			{...props}
		>
			<CornerUpRightIcon size={16} />
		</Button>
	);
}
