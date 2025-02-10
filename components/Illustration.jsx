"use client";

import Image from "next/image";
import React from "react";
import illImg from "../public/images/hero-illustration.jpg";
import ill1 from "../public/images/ill-1.svg"
import ill2 from "../public/images/ill-2.svg"
import ill3 from "../public/images/ill-3.svg"
import ill4 from "../public/images/ill-4.svg"
import ill5 from "../public/images/ill-5.svg"
import ill6 from "../public/images/ill-6.svg"


const Illustration = () => {

    const Ills = [
        {
            id:1,
            Image:ill1,
            Heading:"Two-way synchronization",
            Para:"Integrate your task tracker with GitHub to sync changes instantly."
        },
        {
            id:2,
            Image:ill2,
            Heading:"Private tasks",
            Para:"Integrate your task tracker with GitHub to sync changes instantly."
        },
        {
            id:3,
            Image:ill3,
            Heading:"Multiple repositories",
            Para:"Integrate your task tracker with GitHub to sync changes instantly."
        },
        {
            id:4,
            Image:ill4,
            Heading:"Milestone migration",
            Para:"Integrate your task tracker with GitHub to sync changes instantly."
        },
        {
            id:5,
            Image:ill5,
            Heading:"Track progress",
            Para:"Integrate your task tracker with GitHub to sync changes instantly."
        },
        {
            id:6,
            Image:ill6,
            Heading:"Advanced filtering",
            Para:"Integrate your task tracker with GitHub to sync changes instantly."
        },
    ]

  return (
    <div className="h-fit bg-[#111111] pb-56">
      <div className="max-w-screen-xl h-full mx-auto px-4 ">
        <div className="text-white pt-32">
          <h1 className="text-[#F6F7FD] text-4xl md:text-5xl lg:text-6xl xl:text-7xl pr-1 z-30 max-w-xl bg-gradient-to-br from-white from-30% via-[#d5d8f6] via-80% to-[#fdf7fe] bg-clip-text text-transparent tracking-tighter pb-2 font-bold">
            Sync with GitHub. <br /> Both Ways.{" "}
          </h1>
          <p className="max-w-screen-md text-slate-300 text-balance pt-2 pb-12">
            Manage your tasks efficiently with Meco's bidirectional GitHub
            synchronization. Use Meco as an advanced front-end for GitHub Issues
            and GitHub Projects.
          </p>
        </div>
        <div
          className="relative h-[70vh] w-full rounded-md bg-[rgba(0,0,0,0.5)]
            before:content-[''] before:absolute inset-0 
            before:w-[130vw] before:h-[500vh] before:-top-[305%] before:-left-[48%] before:bg-[repeating-conic-gradient(transparent,#ffb25e,transparent,#fff,transparent,green,green)]
            before:animate-spin-slow overflow-hidden"
        >
            <div className="absolute flex justify-center align-middle inset-[7px] rounded-md">
                <Image src={illImg} alt="Bg-Image" className="object-cover"/>
            </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 text-white pt-32 gap-32">
            {Ills.map((elem)=> (
                <div key={elem.id} className="flex flex-col gap-3">
                    <Image src={elem.Image} alt="Illustration Images" width={42} height={42} />
                    <div className="text-4xl font-medium tracking-tight text-balance  w-min">{elem.Heading}</div>
                    <p className="text-slate-400">{elem.Para}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Illustration;
