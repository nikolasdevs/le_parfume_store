import React from "react";
import Image from "next/image";
import paypal from "../public/logos_paypal.svg";
import mastercard from "../public/logos_mastercard.svg";
import visa from "../public/logos_visa.svg";
import credit from "../public/simple-line-icons_credit-card.svg";
import add from "../public/ph_plus.svg";
import image6 from "../public/image6.png";
import image9 from "../public/image9.png";

const Checkout = () => {
  return (
    <div className=" bg-peach-100 w-full text-neutral-300 flex md:flex-row flex-col md:px-16 px-8 py-12 h-full gap-16 ">
      <div className="w-full md:w-1/2 md:px-16 px-0 ">
        <h1 className="md:text-[3.125rem] text-[1.25rem] text-start py-8 font-display text-neutral-200">
          Checkout
        </h1>
        <form className="flex flex-col gap-4">
          <fieldset>
            <legend className="sr-only w-full">Contact Information</legend>
            <input
              id="contact"
              name="contact"
              placeholder="Contact Info"
              className="w-full py-3 px-3  placeholder:text-neutral-300"
            />
          </fieldset>
          <div className=" pe-4 bg-neutral-100">
            <fieldset>
              <legend className="sr-only">Delivery Information</legend>
              <select
                id="delivery"
                name="delivery"
                className="w-full py-3 px-3"
              >
                <option>Delivery Option</option>
                <option>Standard Delivery</option>
                <option>Express Delivery</option>
              </select>
            </fieldset>
          </div>
          <fieldset>
            <legend className="sr-only">Shipping Address</legend>
            <input
              id="shipping"
              name="shipping"
              placeholder="Shipping Address"
              className="w-full py-3 px-3 placeholder:text-neutral-300"
            />
          </fieldset>

          <fieldset className=" flex flex-col ">
            <p className="block text-sm font-medium text-gray-700 px-3 py-3 w-full ">
              Payment Method:
            </p>
            <div className="flex flex-col gap-4 mt-4 bg-neutral-100 p-8">
              <label className="flex items-center gap-8 bg-neutral-100  py-3 px-3 border border-b-neutral-300 border-opacity-20 border-x-0 border-t-0">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  className="form-radio py-2 px-3"
                />
                <div className="flex gap-2 items-center">
                  <Image src={paypal} alt="PayPal" width={25} height={25} />
                  PayPal
                </div>
              </label>
              <label className="flex items-center gap-8 bg-neutral-100 py-3 px-3 border border-b-neutral-300 border-opacity-20 border-x-0 border-t-0">
                <input
                  type="radio"
                  name="payment"
                  value="mastercard"
                  className="form-radio"
                />
                <div className="flex gap-2 items-center">
                  <Image
                    src={mastercard}
                    alt="MasterCard"
                    width={30}
                    height={25}
                  />
                  MasterCard
                </div>
              </label>
              <label className="flex items-center gap-8 bg-neutral-100 py-3 px-3 border-b-neutral-300 border-opacity-20 border b border-x-0 border-t-0">
                <input
                  type="radio"
                  name="payment"
                  value="visa"
                  className="form-radio"
                />
                <div className="flex gap-2 items-center">
                  <Image src={visa} alt="Visa" width={28} height={18} />
                  <p> Visa</p>
                </div>
              </label>
              <label className="flex items-center gap-8 bg-neutral-100 py-3 px-3">
                <Image src={add} alt="Visa" width={24} height={24} />
                <div className="flex gap-2 items-center">
                  <Image src={credit} alt="Visa" width={28} height={18} />
                  <p> Add new credit or debit Card</p>
                </div>
              </label>
            </div>
          </fieldset>
        </form>
      </div>

      <div className=" w-full md:w-1/2 bg-neutral-100 py-14 md:px-16 px-4 ">
        <div className=" flex justify-between items-end ">
          <div className=" flex flex-col gap-2">
            <p className="font-display text-[1.25rem]">Final pick</p>
            <h1 className="font-display md:text-[2.5rem] text-[1.25rem] text-neutral-200">
              Total Items
            </h1>
          </div>
          <p>Amount</p>
        </div>
        <div className=" mt-4 flex flex-col gap-12 pb-8 ">
          <div className="cards flex justify-between items-end">
            <div className="flex flex-col gap-1">
              <Image src={image6} alt="" className=" w-[120px] h-[160px]" />
              <p className=" text-neutral-200 font-display">LANCOME LIBR</p>
              <p className="text-sm">Eua de parfume</p>
            </div>
            <p>$140</p>
          </div>
          <div className="cards flex justify-between items-end">
            <div className="flex flex-col gap-1">
              <Image src={image9} alt="" className=" w-[120px] h-[160px]" />
              <p className=" text-neutral-200 font-display">LANCOME LIBR</p>
              <p className="text-sm">Eua de parfume</p>
            </div>
            <p>$140</p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-9/12 h-[1px] bg-neutral-200 opacity-20 flex justify-center items-center"></div>
        </div>
        <div className="total mt-8 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <p> Sub Total </p>
            <p> $330</p>
          </div>
          <div className="flex justify-between items-center">
            <p> Delivery </p>
            <p> $40</p>
          </div>
          <div className="flex justify-between items-center font-semibold">
            <p> Total </p>
            <p> $370</p>
          </div>
          <div className="flex justify-center">
            <button className="py-4 px-16 bg-danger-200 text-neutral-100 mt-8 md:mt-16 flex items-start font-display">
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
