import React from "react";

const PreLoader = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <p className="text-2xl text-white tracking-widest">LOADING</p>
      <div class="loader-line"></div>
    </div>
  );
};

export default PreLoader;
