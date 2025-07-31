import Image from "next/image";
import { cn } from "@/lib/cn";

type HighlightCardProps = {
	src: string;
	alt: string;
	name: string;
	description: string;
	className?: string;
};

export function HighlightCard({
	className,
	src,
	alt,
	name,
	description,
}: HighlightCardProps) {
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
					width="1280"
					height="720"
					placeholder="blur"
					blurDataURL="data:text/plain;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOU+g8AATkBG5//A4sAAAAASUVORK5CYII="
					className="aspect-wide-horizontal w-full rounded-xl object-cover"
				/>
			</div>
			<div>
				<p className="line-clamp-1 font-semibold text-lg">{name}</p>
				<p className="line-clamp-2 max-w-[35ch] text-gray-700 text-sm">
					{description}
				</p>
			</div>
		</div>
	);
}
