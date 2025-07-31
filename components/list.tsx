"use client";

import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { ListCard } from "@/components/card/list-card";
import { DotButton } from "@/components/carousel/dot-button";
import { useDotButton } from "@/hooks/carousel/use-dot-button";
import { cn } from "@/lib/cn";

type ListItems = {
	id: string;
	name: string;
	slug: string;
	gridURL: string;
}[];

type ListProps = {
	sectionOneTitle: string;
	sectionTwoTitle: string;
	sectionThreeTitle: string;
	sectionOneItems: ListItems;
	sectionTwoItems: ListItems;
	sectionThreeItems: ListItems;
};

export function List({
	sectionOneTitle,
	sectionTwoTitle,
	sectionThreeTitle,
	sectionOneItems,
	sectionTwoItems,
	sectionThreeItems,
}: ListProps) {
	const [emblaRef, emblaAPI] = useEmblaCarousel();

	const { onDotButtonClick, selectedIndex, scrollSnaps } =
		useDotButton(emblaAPI);

	return (
		<div
			className="flex flex-col gap-2 overflow-hidden"
			ref={emblaRef}
		>
			<div className="-ml-4 flex">
				<ListSection
					title={sectionOneTitle}
					items={sectionOneItems}
					className="shrink-0 grow-0 basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
				/>
				<ListSection
					title={sectionTwoTitle}
					items={sectionTwoItems}
					className="shrink-0 grow-0 basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
				/>
				<ListSection
					title={sectionThreeTitle}
					items={sectionThreeItems}
					className="shrink-0 grow-0 basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
				/>
			</div>

			<div className="flex size-full w-min items-center justify-center space-x-1.5 self-center rounded-full p-1.5 lg:hidden">
				{scrollSnaps.map((id, index) => (
					<DotButton
						key={id}
						index={index}
						selectedIndex={selectedIndex}
						onClick={() => onDotButtonClick(index)}
						className="cursor-pointer"
					/>
				))}
			</div>
		</div>
	);
}

type ListSectionProps = {
	title: string;
	className: string;
	items: ListItems;
};

function ListSection({ title, className, items }: ListSectionProps) {
	return (
		<section className={cn("flex flex-row gap-2", className)}>
			<div className="flex w-full flex-col gap-4">
				<h3 className="line-clamp-1">{title}</h3>
				<div className="flex flex-col gap-2 xl:gap-3">
					{items.map((item) => (
						<Link
							key={item.id}
							href={`/game/${item.slug}`}
						>
							<ListCard
								name={item.name}
								src={item.gridURL}
								alt={`${item.name} - Grid`}
							/>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
