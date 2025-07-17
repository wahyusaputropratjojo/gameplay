import { HighlightCard } from "@/components/card/highlight-card";

type DiscoveryProps = {
	title?: string;
	items: {
		id: string;
		title: string;
		description: string;
		heroURL: string;
	}[];
};

export function Discovery({ title, items }: DiscoveryProps) {
	return (
		<div className="flex flex-col gap-2">
			{title && <h3>{title}</h3>}
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
				{items.map((item) => (
					<HighlightCard
						className="last:hidden lg:last:block"
						key={item.id}
						src={item.heroURL}
						alt={`${item.title} - Hero`}
						title={item.title}
						description={item.description}
					/>
				))}
			</div>
		</div>
	);
}
