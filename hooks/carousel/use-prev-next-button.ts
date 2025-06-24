"use client";

import { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";

export function usePrevNextButton(emblaAPI: EmblaCarouselType | undefined) {
	const [prevButtonDisabled, setPrevButtonDisabled] = useState<boolean>(true);
	const [nextButtonDisabled, setNextButtonDisabled] = useState<boolean>(true);

	const onPrevButtonClick = useCallback(() => {
		if (!emblaAPI) return;
		emblaAPI.scrollPrev();
	}, [emblaAPI]);

	const onNextButtonClick = useCallback(() => {
		if (!emblaAPI) return;
		emblaAPI.scrollNext();
	}, [emblaAPI]);

	const onSelect = useCallback((emblaAPI: EmblaCarouselType) => {
		setPrevButtonDisabled(!emblaAPI.canScrollPrev());
		setNextButtonDisabled(!emblaAPI.canScrollNext());
	}, []);

	useEffect(() => {
		if (!emblaAPI) return;

		onSelect(emblaAPI);
		emblaAPI.on("reInit", onSelect).on("select", onSelect);
	}, [emblaAPI, onSelect]);

	return {
		prevButtonDisabled,
		nextButtonDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	};
}
