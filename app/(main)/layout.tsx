import type { ReactNode } from "react";
import { Fragment } from "react";
import { Header } from "@/components/header";
import { NavigationBar } from "@/components/navigation-bar";

type MainLayoutProps = {
	children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
	return (
		<Fragment>
			<Header />
			<NavigationBar />
			{children}
		</Fragment>
	);
}
