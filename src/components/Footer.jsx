import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer py-12 md:h-[394px] px-4 flex flex-wrap items-center justify-between bg-black">
        <div className="py-16 px-4">
          <p className="text-base-100 text-xl">Meet our Team !</p>
          <a
            href="/"
            className="footer-description font-normal md:text-[45px] items-center flex gap-2">
            Drop a Hello{" "}
            <img
              className=" w-[44px] self-center h-[44px]"
              src="/images/Left Arrow.png"
              alt="Left Arrow"
            />
          </a>
        </div>
        <div className="flex flex-col items-center ml-5">
          <img
            className="md:mb-[39px]"
            src="/images/Footer Logo.png"
            alt="Avex Logo"
          />
          <div className="flex md:mt-[29px]">
            <a
              href="https://github.com/Anubhav-Pathak/avex-website2023"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-0 ml-0 instagram-link">
              <img src="/images/github.png" alt="GitHub" />
            </a>
            <a
              href="https://twitter.com/avex_xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-0 ml-8 instagram-link">
              <img src="/images/twitter.png" alt="Twitter" />
            </a>
            <a
              href="mailto:team@avex.technology"
              className="mb-0 ml-8 instagram-link">
              <img src="/images/mail.png.png" alt="Mail" />
            </a>
            <img
              src="/images/phone.png"
              alt="Phone"
              className="mb-0 ml-8 instagram-link"
            />
            s
            <a
              href="https://www.instagram.com/avex_xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-0 ml-7 instagram-link">
              <img src="/images/Vector.png" alt="Instagram" />
            </a>
          </div>
        </div>
        <form action="#" className="mr-[86px]">
          <label
            htmlFor="footer-input"
            className="block md:text-2xl   text-[#FFF]">
            Subscribe to our newsletter
          </label>
          <div className="flex gap-2  ">
            <input
              type="email"
              placeholder="abc@example.com"
              className="input rounded-[23px] bg-[#323232] w-full md:w-[218px] inline"
            />
            <button type="submit" className="btn rounded-[23px]">
              <img src="/images/Send.png" alt="Send" />
            </button>
          </div>
        </form>
      </footer>
      <footer className="p-4 md:h-[61px] text-center bg-[#1E1E1E] text-base-100">
        <p>
          <span className="font-bold">A product of</span> &copy; Blockorps Pvt.
          Ltd
        </p>
      </footer>
    </>
  );
};

export default Footer;
