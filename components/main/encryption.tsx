"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-auto -z-20">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Education {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>{" "}
          Work Experience.
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          {/* <Image
            src="/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={70}
            height={70}
            className="z-10"
          /> */}
          


          
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
              <div className="col-span-3 row-span-5 col-start-2">
                <div className="text-center">
                  <h2 className="text-4xl font-semibold mb-2 text-gray-500 mt-20">🎓 Education</h2>
                  <p className="text-xl text-gray-200">B.Tech in Computer Science</p>
                  <p className="text-xl text-gray-300">Gayathri Vidhya Parishad College of Engineering, 2021 – 2025</p>
                </div>
                <div className="text-center">
                  <h2 className="text-4xl font-semibold mb-2 text-gray-500 mt-14">💼 Work Experience</h2>
                  <p className="text-xl text-gray-200">MERN Stack Developer Intern</p>
                  <p className="text-xl text-gray-300">Codedale Tech Solutions, March 2025 – Present</p>
                </div>
              </div>
        </div>
    
        </div>

        {/* <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042F88B] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div> */}
      </div>

      {/* <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption.
        </div>
      </div> */}

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
