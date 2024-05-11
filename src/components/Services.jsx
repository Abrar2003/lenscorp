import React from "react";

// "#17bfa4"
// "#41bdef"
// "#e56b6a"
// "#f1a14d"

function Services() {
  return (
    <div className="text-center text-black dark:text-white mb-10">
      <h1 className="text-2xl font-medium">SERVICES</h1>
      <div className="w-20 h-1 bg-gradient-to-r from-[#0594ff] to-[#93f3f6] rounded mx-auto mt-1 mb-10"></div>
      <h1 className="mb-10 text-5xl font-nomral tracking-wide">
        We provide Artificial Intelligence Services
      </h1>
      <div className="w-1/2 text-left m-auto grid grid-cols-2 grid-rows-2 gap-10">
        <div className="w-full h-[320px] bg-white dark:bg-[#1b1c1f] hover:border-2 hover:border-[#17bfa4] p-5 rounded-xl dark:hover:bg-gradient-to-b dark:from-[#4b978a56] dark:via-[#31d6bb2c] dark:to-black hover:bg-gradient-to-b from-[#4b978a56] via-[#31d6bb2c] to-white">
          <div className="text-5xl font-semibold gap-2 mb-5 flex items-center">
            <span className="text-gray-500">0</span>
            <span className="text-gray-500 hover:text-[#17bfa4]">1</span>
            <span className="text-[#17bfa4] text-2xl"> Biometrics</span>
          </div>
          <div>
            <p className="font-medium text-xl">
              Academia-backed & In-house researched State-of-the-Art Face,
              Fingerprint, and Iris Recognition SDKs. Enable real-time automated
              Biometric applications on edge devices even without an active
              internet connection.
            </p>
          </div>
        </div>
        <div className="w-full h-[320px] bg-white dark:bg-[#1b1c1f] hover:border-2 hover:border-[#41bdef] p-5 rounded-xl dark:hover:bg-gradient-to-b dark:from-[#55899e80] dark:via-[#24718f49] dark:to-black hover:bg-gradient-to-b from-[#55899e80] via-[#24718f49] to-white">
          <div className="text-5xl font-semibold gap-2 mb-5 flex items-center">
            <span className="text-gray-500">0</span>
            <span className="text-gray-500 hover:text-[#41bdef]">2</span>
            <span className="text-[#41bdef] text-2xl"> Image Analysis</span>
          </div>
          <div>
            <p className="font-medium text-xl">
              Outsource the overly complex image analysis work to our
              intelligent machines that adaptively learn, so you can focus on
              making the best decisions for your business.{" "}
            </p>
          </div>
        </div>
        <div className="w-full h-[320px] bg-white dark:bg-[#1b1c1f] hover:border-2 hover:border-[#e56b6a] p-5 rounded-xl dark:hover:bg-gradient-to-b dark:from-black dark:via-[#7e43433f] dark:to-[#a3535363] hover:bg-gradient-to-b from-white via-[#7e43433f] to-[#a3535363]">
          <div className="text-5xl font-semibold gap-2 mb-5 flex items-center">
            <span className="text-gray-500">0</span>
            <span className="text-gray-500 hover:text-[#e56b6a]">3</span>
            <span className="text-[#e56b6a] text-2xl"> Cross-Media <br /> Translation</span>
          </div>
          <div>
            <p className="font-medium text-xl">
              Outsource the overly complex image analysis work to our
              intelligent machines that adaptively learn, so you can focus on
              making the best decisions for your business.{" "}
            </p>
          </div>
        </div>
        <div className="w-full h-[320px] bg-white dark:bg-[#1b1c1f] hover:border-2 hover:border-[#f1a14d] p-5 rounded-xl dark:hover:bg-gradient-to-b dark:from-black dark:via-[#9c6d3a28] dark:to-[#966b3e73] hover:bg-gradient-to-b from-white via-[#9c6d3a28] to-[#966b3e73]">
          <div className="text-5xl font-semibold gap-2 mb-5 flex items-center">
            <span className="text-gray-500">0</span>
            <span className="text-gray-500 hover:text-[#f1a14d]">4</span>
            <span className="text-[#f1a14d] text-2xl"> Biometrics</span>
          </div>
          <div>
            <p className="font-medium text-xl">
              Academia-backed & In-house researched State-of-the-Art Face,
              Fingerprint, and Iris Recognition SDKs. Enable real-time automated
              Biometric applications on edge devices even without an active
              internet connection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
