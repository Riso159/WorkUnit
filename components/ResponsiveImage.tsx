import Image from "next/image";
import type { WorkunitImage } from "@/lib/images";

type ResponsiveImageProps = {
  image: WorkunitImage;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  objectPosition?: string;
  overlay?: boolean;
  overlayClassName?: string;
};

export function ResponsiveImage({
  image,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "min-h-80",
  imageClassName = "",
  objectPosition = "center",
  overlay = false,
  overlayClassName = "bg-gradient-to-t from-ink/70 via-ink/20 to-transparent",
}: ResponsiveImageProps) {
  return (
    <figure
      className={`relative overflow-hidden border border-slate-200 bg-ink shadow-lift ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${imageClassName}`}
        style={{ objectPosition }}
      />
      {overlay ? <div className={`absolute inset-0 ${overlayClassName}`} /> : null}
    </figure>
  );
}
