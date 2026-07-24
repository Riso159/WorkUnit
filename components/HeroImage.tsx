import Image from "next/image";
import type { WorkunitImage } from "@/lib/images";

type HeroImageProps = {
  image: WorkunitImage;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
  className?: string;
};

export function HeroImage({
  image,
  priority = false,
  sizes = "100vw",
  objectPosition = "center",
  className = "",
}: HeroImageProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden bg-ink ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition }}
      />
    </div>
  );
}
