import { Button, ButtonProps } from "@/components/ui/button";
import { CornerUpLeftIcon } from "lucide-react";

export function PrevButton(props: ButtonProps) {
	return (
		<Button
			variant="secondary"
			{...props}
		>
			<CornerUpLeftIcon size={16} />
		</Button>
	);
}
