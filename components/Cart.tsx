import Image from "next/image";
import React from "react";
import image6 from "../public/image6.png";
import image11 from "../public/image11.svg";
import star from "../public/iconamoon_star-fill-1.svg";
import rec1 from "../public/rec1.svg";
import rec2 from "../public/rec2.svg";
import rec3 from "../public/rec3.svg";
import rec4 from "../public/rec4.svg";
import Link from "next/link";

const Cart = () => {
  return (
    <div className=" flex flex-col gap-4">
      <div className="container m-auto bg-neutral-100 w-full text-neutral-300 ">
        <h1 className="text-[3.125rem] text-start py-8 px-8 font-display text-neutral-200">
          Cart
        </h1>
        <div className="w-full bg-neutral-100 h-auto my-16 flex  lg:flex-row flex-col justify-between">
          <div className=" relative  bg-peach-100 h-[42.625rem] w-[25rem]">
            <div className=" bg-neutral-200 absolute -right-32 top-20">
              <Image src={image6} alt="" className=" w-[340px] h-[520px]" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-8">
            <div className="top flex flex-col">
              <p className=" text-[1.875rem] font-display hidden lg:flex">
                Your cart top pick
              </p>
              <h2 className=" text-[3.125rem] font-display text-neutral-200 ">
                LANCOME LIBR
              </h2>
              <p>Eua de parfume</p>
            </div>
            <div className="desc flex flex-col gap-2 my-8">
              <p>
                The perfect female blend of flowery and herbal touch with long
                lasting touch, a classy fragrance that can be use for any
                occasion for both winter and summer. was lunched in 2012.
              </p>
              <p>$140</p>
              <div className=" flex">
                <Image src={star} alt="" />
                <Image src={star} alt="" />
                <Image src={star} alt="" />
                <Image src={star} alt="" />
                <Image src={star} alt="" />
              </div>
            </div>
            <div className=" flex flex-col gap-4">
              <p className=" font-semibold">Notes</p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Image src={rec1} alt="" />
                  <p>Vanilla</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image src={rec2} alt="" />
                  <p>Fruity</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image src={rec3} alt="" />
                  <p>Woody</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image src={rec4} alt="" />
                  <p>powdery</p>
                </div>
              </div>
            </div>
            <Link href={"/checkout"} className="w-full flex justify-end ">
              <button className="py-4 px-8 bg-danger-200 text-neutral-100 mt-8 md:mt-16 flex items-start  font-display">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container m-auto bg-neutral-100 w-full text-neutral-300 ">
        <div className="w-full bg-neutral-100 h-auto my-16 flex  lg:flex-row flex-col justify-between">
          <div className=" relative  bg-peach-100  h-[42.625rem] w-[25rem]">
            <div className=" absolute -right-32 top-20">
              <Image src={image11} alt="" className=" w-[340px] h-[520px]" />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-8">
            <div className="top flex flex-col">
              <p className=" text-[1.875rem] font-display hidden lg:flex">
                Your cart top pick
              </p>
              <h2 className=" text-[3.125rem] font-display text-neutral-200 ">
                LANCOME LIBR
              </h2>
              <p>Eua de parfume</p>
            </div>
            <div className="desc flex flex-col gap-2 my-8 w-full">
              <p className="">
                The perfect female blend of flowery and herbal touch with long
                lasting touch, a classy fragrance that can be use for any
                occasion for both winter and summer. was lunched in 2012.
              </p>
              <p>$140</p>
              <div className=" flex">
                <Image src={star} alt="" />
                <Image src={star} alt="" />
                <Image src={star} alt="" />
                <Image src={star} alt="" />
                <Image src={star} alt="" />
              </div>
            </div>
            <div className=" flex flex-col gap-4">
              <p className=" font-semibold">Notes</p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Image src={rec1} alt="" />
                  <p>Vanilla</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image src={rec2} alt="" />
                  <p>Fruity</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image src={rec3} alt="" />
                  <p>Woody</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image src={rec4} alt="" />
                  <p>powdery</p>
                </div>
              </div>
            </div>
            <Link href={"/checkout"} className="w-full flex justify-end ">
              <button className="py-4 px-8 bg-danger-200 text-neutral-100 mt-8 md:mt-16 flex items-start font-display">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
