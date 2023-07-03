import React, { useState, useEffect } from "react";
import "../App.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
} from "@mui/lab";
 import DOC from "../assets/images/DOC.png"
 import CUST from "../assets/images/Customer.png"

  
  


const Box = ({ heading, text1, text2, color, ind }) => {
  return (
    <div
      className={` py-[15px] drop-shadow-xl bg-[#FFFDFD] flex flex-col items-center rounded-[10px] h-[253px] w-[337px] zero-op-slide absolute cara-slide top-20 right-40`}
      data-slide={ind}
    >
      <div className="bg-black flex justify-center items-center w-[194px] h-[48px] rounded-[18px] ">
        <h1 className="text-white text-xl font-bold">{heading}</h1>
      </div>
      <h2 className={color+"font-bold mt-[22px] mb-[17px] w-[298px] text-lg "}>{text1} </h2>
      <h3 className="w-[298px] text-[15px] text-[#525151]">{text2} </h3>
      <a href="" className="text-xs w-[298px] mt-5  text-[#0568FD]">
        Learn More <b> {">"} </b>
      </a>
    </div>
  );
};


const Slider = () => {

  const Dot = ({curSlide,ind, setSlide }) => {
    const handleClick = (e) => {
      const slide = +e.target.dataset.slide;
      console.log(slide);
      setSlide(slide);
      setCurSlide(ind)
    };
  
    return (
      <div className={` h-[50px] rounded-full  w-[50px] flex justify-center items-center ${ind===curSlide?"bg-gradient-to-br from-[#0595FD] to-[#0054D2] ":"bg-inherit"}` }>
      <div
        className={`     h-[39px] flex justify-center drop-shadow-lg items-center w-[39px] rounded-full bg-black `}
        data-slide={ind}
        style={{backgroundColor: ind === curSlide ? "black" : "#D9D9D9" }}
        onClick={handleClick}
        >
      </div>
        </div>
    );
  };
  const stuff = [
    {
      heading: "ZK KYC",
      text1: "Future of Identity Verification",
      text2:
        "Prove your details without revealing sensitive data and comply with KYC regulations while maintaining privacy.",
      color: "text-[#0568FD] ",
    },
    {
      heading: "Access Control",
      text1: "Flexible Accessibility Rules",
      text2:
      "Grant access to your content only to eligible participants who meet your accessibility criteria rules.",
      color: "text-[#CB04DC] ",
    },
    {
      heading: "Avex Handles",
      text1: "One ID to live the internet.",
      text2:
        "Claim your .avex handle for an unified experience across all apps and blockchain networks.",
      color: "text-[#D9D223] ",
    },
    {
      heading: "ZK KYC",
      text1: "Future of Identity Verification",
      text2:
        "Prove your details without revealing sensitive data and comply with KYC regulations while maintaining privacy.",
      color: "text-[#0568FD] ",
    },
    {
      heading: "Access Control",
      text1: "Flexible Accessibility Rules",
      text2:
      "Grant access to your content only to eligible participants who meet your accessibility criteria rules.",
      color: "text-[#CB04DC] ",
    },
  ];

  

  const [curSlide, setCurSlide] = useState(0);

  const Boxes = stuff.map((s, ind) => {
    return (
      <Box
        color={s.color}
        heading={s.heading}
        text1={s.text1}
        text2={s.text2}
        ind={ind}
        key={ind}
      />
    );
  });

  const Dots = [1,2,3,4,5].map((s, ind) => {
    return <Dot curSlide={curSlide} setCurSlide={setCurSlide}  ind={ind} key={ind} setSlide={setCurSlide} />;
  });

  useEffect(() => {
    const slides = document.querySelectorAll(".cara-slide");
    const slideCount = slides.length;

    if (slides && slideCount > 0) {
      for (let i = 0; i < slideCount; i++) {
        if (i == curSlide) {
          slides[i].classList.remove("zero-op-slide");
          slides[i].classList.remove("next-slide");
          slides[i].classList.remove("next-next-slide");
          slides[i].classList.remove("prev-slide");
          slides[i].classList.add("active-slide");
        } else if (i == (curSlide + 1) % slideCount) {
          slides[i].classList.remove("zero-op-slide");
          slides[i].classList.remove("active-slide");
          slides[i].classList.remove("next-next-slide");
          slides[i].classList.remove("prev-slide");
          slides[i].classList.add("next-slide");
        } else if (i == (curSlide + 2) % slideCount) {
          slides[i].classList.remove("zero-op-slide");
          slides[i].classList.remove("next-slide");
          slides[i].classList.remove("active-slide");
          slides[i].classList.remove("prev-slide");
          slides[i].classList.add("next-next-slide");
        } else if (i == (curSlide - 1 + slideCount) % slideCount) {
          slides[i].classList.remove("zero-op-slide");
          slides[i].classList.remove("next-slide");
          slides[i].classList.remove("next-next-slide");
          slides[i].classList.remove("active-slide");
          slides[i].classList.add("prev-slide");
        } else {
          slides[i].classList.add("zero-op-slide");
          slides[i].classList.remove("active-slide");
          slides[i].classList.remove("next-slide");
          slides[i].classList.remove("next-next-slide");
          slides[i].classList.remove("prev-slide");
        }
      }
    }
  }, [curSlide]);

  return (
    <div className="">
      <section className="bg-[#F2F2F2] flex flex-col  gap-8 py-16">
        <div className="md:mx-[8vw] mx-4">
          <article className="ml-4 max-w-xl z-10 mt-96">
            <h1 className="text-5xl font-bold leading-snug mb-4">
              <span className="text-primary">Decentralized Identity</span>{" "}
              Ecosystem
            </h1>
            <p className="text-xl">
              Manage and own your online identity with self-sovereign identity.
              Safely control and shape your personal information giving you
              freedom and choice. Own your digital story and reflect your true
              self.
            </p>
          </article>
        </div>
      </section>

      <main className="flex items-center justify-center overflow-hidden">
        <div className="h-[900px] w-full  relative">
          {Boxes}

          <div className="flex gap-5 absolute ml-36 top-[40%] -translate-y-1/2 flex-col space-y-3">
            {Dots}
          </div>
        </div>
      </main>
     
    </div>
  );
};

export default Slider;
