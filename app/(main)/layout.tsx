import { Header } from "@/components/header";
import { NavigationBar } from "@/components/navigation-bar";
import type { ReactNode } from "react";
import { Fragment } from "react";

export default function MainLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<Fragment>
			<Header />
			<NavigationBar />
			{children}
		</Fragment>
	);
}
