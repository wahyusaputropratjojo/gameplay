import { CornerUpLeftIcon } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";

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
