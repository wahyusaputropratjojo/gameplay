import type { EmblaCarouselType } from 'embla-carousel';
import { useCallback, useEffect, useState } from 'react';

export function useDotButton(emblaAPI: EmblaCarouselType | undefined) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaAPI) {
        return;
      }
      emblaAPI.scrollTo(index);
    },
    [emblaAPI]
  );

  const onInit = useCallback((emblaAPICallback: EmblaCarouselType) => {
    setScrollSnaps(emblaAPICallback.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaAPICallback: EmblaCarouselType) => {
    setSelectedIndex(emblaAPICallback.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaAPI) {
      return;
    }

    onInit(emblaAPI);
    onSelect(emblaAPI);
    emblaAPI.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
  }, [emblaAPI, onInit, onSelect]);

  return {
    onDotButtonClick,
    scrollSnaps,
    selectedIndex,
  };
}
