import React, { useState, useEffect } from "react";
import "../App.css";
const Box = ({ heading, text1, text2, color, ind }) => {
  return (
    <div
      className={`drop-shadow-xl bg-white ml-44 flex gap-4 flex-col p-4 rounded-[10px] w-64 zero-op-slide absolute cara-slide md:top-20 md:right-20`}
      data-slide={ind}
    >
      <div className="bg-black flex justify-center min-w-min rounded-[18px] ">
        <h1 className="text-white md:text-xl text-base font-bold">{heading}</h1>
      </div>
      <h2 className={color+"font-bold text-center text-sm md:text-lg "}>{text1} </h2>
      <h3 className="text-sm text-[#525151]">{text2} </h3>
      <a href="/" className="text-xs text-[#0568FD]">
        Learn More <b> {">"} </b>
      </a>
    </div>
  );
};
const Slider = () => {
    const Dot = ({ curSlide, ind, setSlide }) => {
      const [clicked, setClicked] = useState(false);
  
      const handleClick = (e) => {
        const slide = +e.target.dataset.slide;
        console.log(slide);
        setSlide(slide);
        setCurSlide(ind);
        setClicked(true);
      };
  
      // Define an array of image paths for each dot
      const imagePaths = [
        "/images/DOC.png",
        "/images/Customer.png",
        "/images/DOC.png",
        "/images/Customer.png",
        "/images/DOC.png",
      ];
  
      return (
        <div
          className={`h-[40px] rounded-full w-[40px] md:h-[50px] md:w-[50px] flex justify-center items-center ${
            ind === curSlide ? "bg-white border-[5px] border-blue-500" : "bg-black"
          } ${clicked ? "border-[50px] border-blue-500" : ""}`}
          style={{
            background: ind === curSlide ? "white" : "black", 
          }}
          onClick={handleClick}
        >
    
          <img
            src={imagePaths[ind]}
            alt={`Dot ${ind + 1}`}
            style={{
              filter: ind === curSlide ? "invert(100%)" : "none",
            }}
          />
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
        if (i === curSlide) {
          slides[i].classList.remove("zero-op-slide");
          slides[i].classList.remove("next-slide");
          slides[i].classList.remove("next-next-slide");
          slides[i].classList.remove("prev-slide");
          slides[i].classList.add("active-slide");
        } else if (i === (curSlide + 1) % slideCount) {
          slides[i].classList.remove("zero-op-slide");
          slides[i].classList.remove("active-slide");
          slides[i].classList.remove("next-next-slide");
          slides[i].classList.remove("prev-slide");
          slides[i].classList.add("next-slide");
        } else if (i === (curSlide + 2) % slideCount) {
          slides[i].classList.remove("zero-op-slide");
          slides[i].classList.remove("next-slide");
          slides[i].classList.remove("active-slide");
          slides[i].classList.remove("prev-slide");
          slides[i].classList.add("next-next-slide");
        } else if (i === (curSlide - 1 + slideCount) % slideCount) {
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
    <div className="pt-36 px-4 max-w-7xl mx-auto">
      <h1 className="text-primary text-5xl leading-snug">Decentralized Identity</h1> 

      <main className="flex flex-col-reverse xl:flex-row items-center justify-center mt-8 xl:mt-0 overflow-hidden">
        <div className="flex flex-row xl:flex-col gap-5">{Dots}</div>
        <div className="min-h-[60vh] md:min-h-[80vh] w-full relative">
          {Boxes}
        </div>
      </main>
    </div>
  );
};

export default Slider;
