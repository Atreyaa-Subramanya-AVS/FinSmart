"use client";

import React from "react";
import Image from "next/image";
import feat4 from "../public/images/Feat-Img/img1.jpg";
import feat3 from "../public/images/Feat-Img/img2.jpg";
import feat1 from "../public/images/Feat-Img/Img3.jpg";
import feat2 from "../public/images/Feat-Img/Img4.jpg";
import feat5 from "../public/images/Feat-Img/Img5.jpg";
import feat6 from "../public/images/Feat-Img/Img6.jpg";
import feat7 from "../public/images/Feat-Img/Img7.jpg";
import feat8 from "../public/images/Feat-Img/Img8.jpg";

const Features = () => {
  return (
    <div className="relative h-full">
      <div className="absolute h-full w-screen bg-white -z-10">
        <div className="absolute h-full w-full bg-[radial-gradient(blue_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      <div className=" px-12 pb-36 max-w-screen-lg 2xl:max-w-screen-2xl mx-auto">
        <div className=" max-w-screen-xl mx-auto">
          <h1 className="text-[#0b0d10] text-6xl 2xl:text-7xl text-left pt-36 font-semibold tracking-tighter text-balance">
            Smart Solution for your Investments
          </h1>
          <p className="text-balance py-4 text-sm md:text-base 2xl:text-lg font-medium text-slate-600">
            Meco is a process, project, time, and knowledge management platform
            that provides amazing collaboration opportunities for developers and
            product teams alike.
          </p>
          <div className="h-dvh flex items-center justify-center ">
            <div className="grid h-full w-full grid-cols-4 grid-rows-4 gap-3">
              <div className="col-span-2 row-span-1 rounded-xl">
                <Image
                  src={feat1}
                  alt="feat"
                  className="w-full h-full bg-center rounded-xl"
                />
              </div>
              <div className="col-span-2 row-span-1 rounded-xl">
                <Image
                  src={feat6}
                  alt="feat"
                  className="w-full h-full bg-center rounded-xl"
                />
              </div>
              <div className="col-span-1 row-span-1 rounded-xl">
                <Image
                  src={feat5}
                  alt="feat"
                  className="w-full h-full bg-center rounded-xl"
                />
              </div>

              <div className="col-span-2 row-span-2 rounded-xl overflow-hidden">
                <Image
                  src={feat3}
                  alt="feat"
                  className="w-full h-full bg-center rounded-xl"
                />
              </div>
              <div className="col-span-1 row-span-2 rounded-xl ">
                <Image
                  src={feat4}
                  alt="feat"
                  className="w-full h-full bg-center rounded-xl"
                />
              </div>
              <div className="col-span-1 row-span-1 rounded-xl">
                <Image
                  src={feat6}
                  alt="feat"
                  className="w-full h-full bg-center rounded-xl"
                />
              </div>

              <div className="col-span-2 row-span-1 rounded-xl">
                <Image
                  src={feat7}
                  alt="feat"
                  className="w-full h-full bg-center rounded-xl"
                />
              </div>
              <div className="col-span-1 row-span-1 rounded-xl">
                <Image
                  src={feat8}
                  alt="feat"
                  className="w-full h-full bg-center rounded-xl"
                />
              </div>
              <div className="col-span-1 row-span-1 rounded-xl">
                <Image
                  src={feat5}
                  alt="feat"
                  className="w-full h-full bg-center rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
