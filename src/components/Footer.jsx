import React from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Footer = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(`${BASE_URL ?? "http://localhost:8000"}/api/newsletter`, {
      email: e.target[0].value,
    })
    .then((res) => {
      toast.success("Subscribed Successfully !");
    })
    .catch((err) => {
      toast.error("Something went wrong !");
    })
  }

  return (
    <>
      <footer className="py-12 px-4 bg-black">
        <div className="mx-auto max-w-7xl footer flex-wrap items-center justify-center md:justify-between">
          <div className="flex flex-col justify-center">
            <p className="text-base-100 text-xl">Meet our Team !</p>
            <a href="/" className="footer-description font-normal flex items-center gap-2 text-4xl">Drop a Hello{" "}
              <img className=" w-[44px] self-center h-[44px]" src="/images/Left Arrow.png" alt="Left Arrow" />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <img
              className=""
              src="/images/Footer Logo.png"
              alt="Avex Logo"
            />
            <div className="flex gap-8 mt-4">
              <a href="https://twitter.com/avex_xyz" className="hover:scale-105"><img className="w-[30px] h-[30px]" src="/images/Twitter.svg" alt="Twitter" /></a>
              <a href="https://www.instagram.com/avex_xyz/" className="hover:scale-105"><img className="w-[30px] h-[30px]" src="/images/Instagram.svg" alt="Instagram" /></a>
              <a href="mailto:team@avex.technology" className="hover:scale-105"><img className="w-[30px] h-[30px]" src="/images/Mail.svg" alt="Mail" /></a>
              <a href="https://www.linkedin.com/company/avex-xyz" className="hover:scale-105"><img className="w-[30px] h-[30px]" src="/images/LinkedIn.svg" alt="LinkedIn" /></a>
              <a href="/" className="hover:scale-105"><img className="w-[30px] h-[30px]" src="/images/Discord.svg" alt="Discord" /></a>   
            </div>
          </div>
            <form className="flex flex-col items-center justify-center" onSubmit={submitHandler}>
              <label htmlFor="footer-input" className="block md:text-2xl text-[#FFF]"> Subscribe to our newsletter </label>
              <div className="flex gap-2 flex-wrap">
                <input type="email" placeholder="abc@example.com" className="input rounded-[23px] text-white bg-[#323232] inline" />
                <button type="submit" className="btn rounded-[23px]"> <img src="/images/Send.png" alt="Send" /> </button>
              </div>
            </form>
        </div>
      </footer>
      <footer className="p-4 text-center bg-[#1E1E1E] text-base-100"><p> <span className="font-bold">A product of</span> &copy; Blockorps Pvt. Ltd </p></footer>
    </>
  );
};

export default Footer;
