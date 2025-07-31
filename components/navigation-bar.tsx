"use client";

import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { cn } from "@/lib/cn";

export function NavigationBar() {
	return (
		<Fragment>
			<NavigationBarDesktop />
			<NavigationBarMobile />
		</Fragment>
	);
}

export function NavigationBarMobile() {
	const pathname = usePathname();

	return (
		<nav className="fixed bottom-0 z-50 grid h-18 w-full items-center bg-gray-100/80 backdrop-blur-xl xl:hidden">
			<div className="flex justify-evenly gap-8">
				<Link href="/">
					<div className="flex flex-col items-center gap-1.5">
						<HomeIcon
							size={20}
							className={cn(
								"text-gray-900",
								pathname === "/" && "text-gray-1000",
							)}
						/>
						<p
							className={cn(
								"text-gray-900 text-xs",
								pathname === "/" && "text-gray-1000",
							)}
						>
							Home
						</p>
					</div>
				</Link>
			</div>
		</nav>
	);
}

export function NavigationBarDesktop() {
	const pathname = usePathname();

	return (
		<nav className="sticky top-0 z-50 hidden bg-background-100/80 py-6 backdrop-blur-xl xl:block">
			<div className="container flex items-center justify-between">
				<ul className="flex gap-6">
					<Link href="/">
						<li
							className={cn(
								"text-gray-900",
								pathname === "/" && "text-gray-1000",
							)}
						>
							Home
						</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
}
