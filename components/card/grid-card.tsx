import Image from "next/image";
import { cn } from "@/lib/cn";

type GridCardProps = {
	src: string;
	alt: string;
	name: string;
	className?: string;
};

export function GridCard({ className, src, alt, name }: GridCardProps) {
	return (
		<div
			className={cn(
				"group select-none space-y-2 hover:cursor-pointer",
				className,
			)}
		>
			<div className="relative">
				<div className="absolute z-20 size-full rounded-xl bg-light/10 opacity-0 transition-opacity group-hover:opacity-100" />
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
				<p className="line-clamp-1 font-medium text-gray-700 text-sm">
					Base Game
				</p>
				<p className="line-clamp-1 font-semibold">{name}</p>
			</div>
		</div>
	);
}
