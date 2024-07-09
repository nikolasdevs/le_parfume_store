import Image from "next/image";
import React from "react";
import mail from "../public/mail.svg";
import phone from "../public/phone.svg";
import instagram from "../public/instagram.svg";
import logo2 from "../public/logo2.svg";
const Footer = () => {
  return (
    <div className=" bg-peach-100 h-80 text-center flex items-center justify-center mt-48">
      <div className=" md:w-1/3 px-12 flex flex-col justify-center items-center gap-16 text-sm">
        <div className="icons flex md:gap-24 gap-8">
          <Image src={mail} alt="social icons" />
          <Image src={phone} alt="social icons" />
          <Image src={instagram} alt="social icons" />
        </div>
        <div className="logo2 flex  flex-col  items-center gap-6">
          <Image src={logo2} alt="logo icon" />
          <p className=" text-neutral-200">
            Don’t just look the part, Smell the part with our fragrance you get
            to look and smell like the best with our unforgettable flowery based
            sent
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
