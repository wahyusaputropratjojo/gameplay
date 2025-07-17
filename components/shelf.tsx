"use client";

import useEmblaCarousel from "embla-carousel-react";
import { GridCard } from "@/components/card/grid-card";
import { NextButton } from "@/components/carousel/next-button";
import { PrevButton } from "@/components/carousel/prev-button";
import { usePrevNextButton } from "@/hooks/carousel/use-prev-next-button";

type ShelfProps = {
	title: string;
	items: {
		id: string;
		title: string;
		gridURL: string;
	}[];
};

export function Shelf({ title, items }: ShelfProps) {
	const [emblaRef, emblaAPI] = useEmblaCarousel({
		slidesToScroll: "auto",
		breakpoints: {
			"(min-width: 1280px)": {
				watchDrag: false,
			},
		},
	});

	const {
		onNextButtonClick,
		onPrevButtonClick,
		prevButtonDisabled,
		nextButtonDisabled,
	} = usePrevNextButton(emblaAPI);

	return (
		<section className="flex flex-col gap-2">
			<div className="flex justify-between">
				<h3>{title}</h3>
				<div className="space-x-2">
					<PrevButton
						onClick={onPrevButtonClick}
						disabled={prevButtonDisabled}
						className="rounded-full"
					/>
					<NextButton
						onClick={onNextButtonClick}
						disabled={nextButtonDisabled}
						className="rounded-full"
					/>
				</div>
			</div>
			<div
				className="overflow-hidden"
				ref={emblaRef}
			>
				<div className="-ml-4 flex">
					{items.map((item) => (
						<GridCard
							key={item.id}
							src={item.gridURL}
							alt={`${item.title} - Grid`}
							title={item.title}
							className="shrink-0 grow-0 basis-6/10 pl-4 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
						/>
					))}
				</div>
			</div>
		</section>
	);
}
