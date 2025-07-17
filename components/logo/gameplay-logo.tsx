import Link from "next/link";
import type { SVGProps } from "react";
import { cn } from "@/lib/cn";

export function GameplayLogo({ className, ...props }: SVGProps<SVGSVGElement>) {
	return (
		<Link
			href="/"
			className="group size-fit focus:outline-0"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				id="uuid-ee8de19f-995b-4bb6-a5d4-58ff68715a23"
				viewBox="0 0 1802.06 885.99"
				className={cn(
					"h-8 text-dark transition-all hover:text-dark/70 group-focus:text-dark/70 dark:text-light dark:group-focus:text-light/70 dark:hover:text-light/70",
					className,
				)}
				{...props}
			>
				<title>Gameplay logo</title>
				<g id="uuid-0c35559d-c6fb-4bf6-8614-048ccca74a2e">
					<g
						id="uuid-74c3c132-214c-4718-b0f8-9160a18091d5"
						fill="currentColor"
					>
						<path d="M61.53 354.4H0V59.07h61.53V0h369.16v59.07H123.06V354.4h184.58V236.27H184.59V177.2H430.7v236.26H61.53v-59.07ZM456.48 413.46V118.13h61.53V59.06h61.53V0h184.58v59.07h61.53v59.07h61.53v295.33H764.12V295.34H579.54v118.13H456.48Zm307.64-177.2V118.13h-61.53V59.06h-61.53v59.07h-61.53v118.13h184.58ZM913.9 413.46V0h123.06v59.07h61.53v59.07h61.53V59.07h61.53V0h123.06v413.46h-123.06V177.2h-61.53v59.07h-61.53V177.2h-61.53v236.26zM1371.37 413.46V0h430.69v59.07h-307.64V177.2H1679v59.07h-184.58V354.4h307.64v59.07h-430.69ZM369.16 531.6h61.53v118.13h-61.53v59.07h-246.1V886H0V472.54h369.16v59.07Zm-61.52 118.13V531.6H123.06v118.13zM456.48 885.99V472.53h123.06v354.4h307.64V886H456.49ZM912.97 885.99V590.66h61.53v-59.07h61.53v-59.07h184.58v59.07h61.53v59.07h61.53v295.33h-123.06V767.86h-184.58v118.13zm307.63-177.2V590.66h-61.53v-59.07h-61.53v59.07h-61.53v118.13h184.58ZM1458.69 649.73h-61.53v-177.2h123.06v177.2h123.05v-177.2h123.06v177.2h-61.53v59.07h-61.53V886h-123.05V708.8h-61.53z" />
					</g>
				</g>
			</svg>
		</Link>
	);
}
