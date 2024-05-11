import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export const About = () => {
  return (
    <div className="w-3/4 m-auto py-20 px-32 text-black dark:text-white">
      <div className="w-full text-center">
        <h1 className="text-6xl font-medium">About Us</h1>
        <div className="w-36 h-2 bg-gradient-to-r from-[#0594ff] to-[#93f3f6] rounded mx-auto mt-2"></div>
      </div>
      <div className="group/item w-[95%] m-auto shadow-md bg-[#e2f2ff] dark:bg-[#1b1c1e] rounded-lg p-10 flex justify-between items-center mt-20 hover:w-full hover:p-14 transition-all delay-150">
        <div className="w-1/2 pr-10 pt-10 flex flex-col gap-10 justify-start h-[400px]">
          <h2 className="text-5xl font-medium">Welcome To LENS</h2>
          <p className="text-lg">
            We put our hearts, souls and sweat into designing and developing
            custom AI - powered solutions for your business so you don&apos;t
            have to.
          </p>
          <button className="group/arrow px-8 py-2 w-44 rounded-lg border border-black dark:border-white text-lg hover:w-48 hover:border-white dark:hover:border-black dark:hover:bg-white hover:text-white hover:bg-black dark:hover:text-black transition-all flex items-center">
            <span>Learn More</span>
            <FaArrowRightLong  className="hidden group-hover/arrow:block ml-2 transition-all delay-100 text-white dark:text-black" />
            
          </button>
        </div>
        <div>
          <div className="p-3 rounded-lg bg-white group-hover/item:p-0 transition-all delay-150">
            <div className="relative w-[400px] h-[400px]">
              <Image
                src="/about.webp"
                alt="about"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="rounded-lg"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
