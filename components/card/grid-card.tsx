import { cn } from "@/lib/cn";
import Image from "next/image";

type GridCardProps = {
	src: string;
	alt: string;
	title: string;
	className: string;
};

export function GridCard({ className, src, alt, title }: GridCardProps) {
	return (
		<div
			className={cn("select-none space-y-2 hover:cursor-pointer", className)}
		>
			<div className="group relative">
				<div className="absolute z-20 size-full rounded-xl bg-light/15 opacity-0 transition-opacity group-hover:opacity-100" />
				<Image
					alt={alt}
					src={src}
					width={300}
					height={450}
					placeholder="blur"
					blurDataURL="data:text/plain;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOU+g8AATkBG5//A4sAAAAASUVORK5CYII="
					sizes="(min-width: 1320px) 300px, (min-width: 640px) calc(2.88vw + 263px), calc(50vw - 23px)"
					className="w-full rounded-xl"
					draggable="false"
				/>
			</div>
			<div>
				<p className="font-medium text-gray-700 text-sm">Base Game</p>
				<p className="font-semibold">{title}</p>
			</div>
		</div>
	);
}
