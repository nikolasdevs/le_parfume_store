import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardProps {
  title: string;
  image?: StaticImageData;
  altText?: string;
  cost?: string;
  onButtonClick?: () => void;
  customStyles?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  altText,
  cost,
  onButtonClick,
  customStyles,
}) => {
  return (
    <div className="flex flex-col items-start gap-4" style={customStyles}>
      {image && (
        <Image
          src={image}
          alt={altText || "Card Image"}
          className="card-image"
        />
      )}
      <div className="card-body flex flex-col gap-1 text-neutral-300">
        <h3 className="card-title text-neutral-200 font-display md:text-base text-sm  ">{title}</h3>
        <p className="card-content ">{altText}</p>
        <p className="card-content">{cost}</p>
      </div>
    </div>
  );
};

export default Card;
