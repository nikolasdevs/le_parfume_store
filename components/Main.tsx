import Image from "next/image";
import React from "react";
import heroImg from "../public/Rectangle.png";
import Card from "./Card";
import image1 from "../public/image1.png";
import image2 from "../public/image2.png";
import image3 from "../public/image3.png";
import image4 from "../public/image4.png";
import image5 from "../public/image5.png";
import image6 from "../public/image6.png";
import image7 from "../public/image7.png";
import image8 from "../public/image8.png";
import image9 from "../public/image9.png";
import image10 from "../public/image19.png";
import Link from "next/link";

const Main = () => {
  return (
    <div className=" bg-neutral-100 w-full md:px-16 px-8">
      <div className=" bg-neutral-100 ">
        <div className="heroPage flex flex-col md:flex-row justify-center items-center w-full bg-peach-100">
          <Image
            src={heroImg}
            alt="product image"
            className="w-1/2 hidden md:block"
          />
          <div className="heroText text-neutral-200 w-full md:w-1/2 md:p-14 p-8 gap-8 flex flex-col items-center md:items-start mt-8 text-center md:text-start">
            <h1 className="md:text-6xl text-3xl leading-tight font-display">
              The Perfect Blend Of Unforgettable Scent Head Tuner
            </h1>
            <p className=" text-sm font-body">
              Don’t just look the part, Smell the part with our fragrance you
              get to look and smell like the best with our unforgettable flowery
              based sent
            </p>
            <Link
              href={"/products"}
              className="py-4 px-8 bg-danger-200 text-neutral-100 mt-8 md:mt-16 flex items-start font-display"
            >
              Shop Now
            </Link>
          </div>
          <Image
            src={heroImg}
            alt="product image"
            className="w-full md:hidden"
          />
        </div>

        <div className=" w-full ">
          <div className="collection bg-neutral-100 w-full h-auto flex flex-col items-center gap-16 mt-36 md:px-24">
            <h1 className=" font-display text-neutral-200 text-2xl text-center md:text-5xl font-medium">
              {" "}
              Perfect Collection
            </h1>
            <div className="flex flex-col items-center  ">
              <div className="collectionCards flex md:gap-16 gap-8 justify-center w-full flex-wrap gap-y-4 items-center">
                <Card
                  id={""}
                  image={image1}
                  title="L’EAU LAURISSI"
                  altText="De parfume"
                  cost="$190"
                />
                <Card
                  id={""}
                  image={image2}
                  title="L’EAU LAURISSI"
                  altText="De parfume"
                  cost="$120"
                />
                <Card
                  id={""}
                  image={image3}
                  title="L’EAU LAURISSI"
                  altText="De parfume"
                  cost="$190"
                />
                <Card
                  id={""}
                  image={image4}
                  title="L’EAU LAURISSI"
                  altText="De parfume"
                  cost="$190"
                />
              </div>
              <Link
                href={"/products"}
                className="text-danger-100 w-full flex justify-end mt-8 font-display"
              >
                Shop more
              </Link>
            </div>
          </div>

          <div className="collection bg-neutral-100 w-full h-auto flex flex-col items-center gap-16 mt-36 md:px-24 ">
            <h1 className=" font-display text-neutral-200 text-2xl text-center md:text-5xl font-medium">
              {" "}
              Summer Collection
            </h1>

            <div className="flex flex-col items-center w-full">
              <div className="collectionCards md:flex gap-12 justify-center w-full hidden">
                <div className=" mt-96">
                  <Card
                    id={""}
                    image={image5}
                    title="L’EAU LAURISSI"
                    altText="De parfume"
                    cost="$190"
                  />
                </div>
                <div className=" mt-36">
                  <Card
                    id={""}
                    image={image6}
                    title="L’EAU LAURISSI"
                    altText="De parfume"
                    cost="$120"
                  />
                </div>
                <div className="">
                  <Card
                    id={""}
                    image={image7}
                    title="L’EAU LAURISSI"
                    altText="De parfume"
                    cost="$190"
                  />
                </div>{" "}
              </div>{" "}
              <div className="collectionCards flex flex-col gap-12 justify-center w-full md:hidden">
                <div className=" w-full flex justify-center">
                  <Card
                    id={""}
                    image={image6}
                    title="L’EAU LAURISSI"
                    altText="De parfume"
                    cost="$120"
                  />
                </div>
                <div className="flex gap-4">
                  <div className=" ">
                    <Card
                      id={""}
                      image={image5}
                      title="L’EAU LAURISSI"
                      altText="De parfume"
                      cost="$190"
                    />
                  </div>
                  <div className="">
                    <Card
                      id={""}
                      image={image7}
                      title="L’EAU LAURISSI"
                      altText="De parfume"
                      cost="$190"
                    />
                  </div>{" "}
                </div>
              </div>{" "}
              <Link
                href={"/products"}
                className="text-danger-100 w-full flex justify-end mt-8 font-display"
              >
                Shop more
              </Link>
            </div>
          </div>

          <div className="summer bg-neutral-100 w-full h-auto md:flex justify-center items-center gap-40 mt-36 hidden">
            <div className="  w-full bg-peach-100 justify-end flex">
              {" "}
              <Card id={""} image={image8} title="" altText="" cost="" />
            </div>
            <div className="flex flex-col items-center w-full">
              <div className="collectionCards flex flex-col gap-14 justify-around">
                <div className=" flex flex-col gap-2">
                  <p className="text-neutral-300 font-display">
                    Art of perfume
                  </p>
                  <h1 className=" font-display text-neutral-200 text-2xl text-center md:text-5xl font-medium">
                    Female Floral range
                  </h1>
                </div>
                <div className="flex gap-12">
                  <Card
                    id={""}
                    image={image9}
                    title="LANCOME LIBR"
                    altText="Eua de parfume"
                    cost="$190"
                  />
                  <Card
                    id={""}
                    image={image10}
                    title="CHANEL DOUBLE"
                    altText="De parfume"
                    cost="$190"
                  />
                </div>
              </div>

              <Link
                href={"/products"}
                className="text-danger-100 w-full flex justify-end mt-8"
              >
                Shop more
              </Link>
            </div>
          </div>

          <div className="summer bg-neutral-100 w-full h-auto flex justify-center items-center mt-36 md:hidden ">
            <div className="flex flex-col justify-center items-center w-full gap-16">
              <div className=" flex flex-col gap-2">
                <p className="text-neutral-300 font-display">Art of perfume</p>
                <h1 className=" font-display text-neutral-200 text-2xl text-center md:text-5xl font-medium">
                  Female Floral range
                </h1>
              </div>
              <div className="collectionCards flex flex-col gap-8 justify-center items-center w-full">
                {" "}
                <div className=" w-full flex justify-center ">
                  <Card id={""} image={image8} title="" altText="" cost="" />
                </div>
                <div className="w-full flex gap-4 justify-center">
                  <Card
                    id={""}
                    image={image9}
                    title="LANCOME LIBR"
                    altText="Eua de parfume"
                    cost="$190"
                  />
                  <Card
                    id={""}
                    image={image10}
                    title="CHANEL DOUBLE"
                    altText="De parfume"
                    cost="$190"
                  />
                </div>
              </div>

              <Link
                href={"/products"}
                className="text-danger-100 w-full flex justify-end mt-8"
              >
                Shop more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
