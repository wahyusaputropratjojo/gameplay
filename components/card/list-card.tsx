import Image from "next/image";
import { cn } from "@/lib/cn";

type ListCardProps = {
	src: string;
	alt: string;
	name: string;
	className?: string;
};

export function ListCard({ className, src, alt, name }: ListCardProps) {
	return (
		<div
			className={cn(
				"group flex cursor-pointer select-none items-center gap-4 rounded-(--card-radius) bg-gray-100 p-(--card-padding) transition-all [--card-padding:--spacing(1.5)] [--card-radius:var(--radius-xl)] md:hover:bg-gray-200",
				className,
			)}
		>
			<div className="relative">
				<div className="absolute z-20 size-full rounded-[calc(var(--card-radius)-var(--card-padding))] bg-light/10 opacity-0 transition-opacity group-hover:opacity-100" />
				<Image
					alt={alt}
					src={src}
					width={300}
					height={450}
					placeholder="blur"
					blurDataURL="data:text/plain;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOU+g8AATkBG5//A4sAAAAASUVORK5CYII="
					sizes="(min-width: 1320px) 300px, (min-width: 640px) calc(2.88vw + 263px), calc(50vw - 23px)"
					className="w-16 rounded-[calc(var(--card-radius)-var(--card-padding))] xl:w-20"
					draggable="false"
				/>
			</div>
			<div>
				<p className="font-medium text-gray-700 text-sm">Base Game</p>
				<p className="font-semibold">{name}</p>
			</div>
		</div>
	);
}
