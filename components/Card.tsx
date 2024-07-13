import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

export interface Items {
  id: string;
  title: string;
  image: StaticImageData | string; // Adjust to handle string URLs if needed
  altText: string;
  cost: string;
  customStyles?: React.CSSProperties;
}

const Card: React.FC<Items> = ({
  id,
  title,
  image,
  altText,
  cost,
  customStyles,
}) => {
  return (
    <div className="flex flex-col items-start gap-4" style={customStyles}>
      {typeof image === "string" ? (
        <img src={image} alt={altText} className="card-image" />
      ) : (
        <Image src={image} alt={altText} className="card-image" />
      )}
      <div className="card-body flex flex-col gap-1 text-neutral-300">
        <Link
          href={`/item/${id}`}
          className="card-title text-neutral-200 font-display md:text-base text-sm"
        >
          {title}
        </Link>
        <p className="card-content">{altText}</p>
        <p className="card-content">{cost}</p>
      </div>
    </div>
  );
};

export default Card;
