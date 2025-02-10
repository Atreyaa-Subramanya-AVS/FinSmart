"use client";

import Image from "next/image";
import React from "react";
import illImg from "../public/images/hero-illustration.jpg";
import ill1 from "../public/images/ill-1.svg";
import ill2 from "../public/images/ill-2.svg";
import ill3 from "../public/images/ill-3.svg";
import ill4 from "../public/images/ill-4.svg";
import ill5 from "../public/images/ill-5.svg";
import ill6 from "../public/images/ill-6.svg";

const Illustration = () => {
  const Ills = [
    {
      id: 1,
      Image: ill1,
      Heading: "Two-way synchronization",
      Para: "Integrate your task tracker with GitHub to sync changes instantly.",
    },
    {
      id: 2,
      Image: ill2,
      Heading: "Private tasks",
      Para: "Integrate your task tracker with GitHub to sync changes instantly.",
    },
    {
      id: 3,
      Image: ill3,
      Heading: "Multiple repositories",
      Para: "Integrate your task tracker with GitHub to sync changes instantly.",
    },
    {
      id: 4,
      Image: ill4,
      Heading: "Milestone migration",
      Para: "Integrate your task tracker with GitHub to sync changes instantly.",
    },
    {
      id: 5,
      Image: ill5,
      Heading: "Track progress",
      Para: "Integrate your task tracker with GitHub to sync changes instantly.",
    },
    {
      id: 6,
      Image: ill6,
      Heading: "Advanced filtering",
      Para: "Integrate your task tracker with GitHub to sync changes instantly.",
    },
  ];

  return (
    <div className="w-full bg-[#111111]">
      <div className="h-fit pb-32 2xl:pb-56 max-w-screen-lg 2xl:max-w-screen-2xl mx-auto">
        <div className="max-w-screen-xl h-full mx-auto px-12">
          <div className="text-white pt-32">
            <h1 className="text-[#F6F7FD] text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl pr-1 z-30 max-w-3xl bg-gradient-to-br from-white from-30% via-[#d5d8f6] via-80% to-[#fdf7fe] bg-clip-text text-transparent tracking-tighter pb-2 font-bold">
              Sync with GitHub. <br /> Both Ways.
            </h1>
            <p className="max-w-screen-md text-slate-300 text-balance pt-2 pb-12">
              Manage your tasks efficiently with Meco's bidirectional GitHub
              synchronization. Use Meco as an advanced front-end for GitHub
              Issues and GitHub Projects.
            </p>
          </div>
          <div
              className="relative inset-0 m-auto h-[70vh] rounded-md 
              before:content-[''] before:absolute
              before:w-[130vw] before:h-[500vh] before:-top-[305%] before:-left-1/2 before:bg-[repeating-conic-gradient(transparent,#ffb25e,transparent,#fff,transparent,green,green)]
              before:animate-spin-slow overflow-hidden 2xl:before:-left-full"
            >
              <div className="absolute flex justify-center align-middle inset-[5px] rounded-md">
                <Image
                  src={illImg}
                  alt="Bg-Image"
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          <div className="grid grid-cols-3 grid-rows-2 text-white pt-28 2xl:gap-24 gap-16">
            {Ills.map((elem) => (
              <div key={elem.id} className="flex flex-col gap-3 px-4 py-12 hover:border transition-all">
                <Image
                  src={elem.Image}
                  alt="Illustration Images"
                  width={42}
                  height={42}
                />
                <div className="2xl:text-4xl text-3xl font-medium tracking-tight text-balance w-min">
                  {elem.Heading}
                </div>
                <p className="text-slate-400">{elem.Para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Illustration;
