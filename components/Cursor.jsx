"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const cursorSize = 15;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = {damping: 20,stiffness: 300,mass: 0.5}

  const smoothMouse = {
    x: useSpring(mouse.x,smoothOptions),
    y: useSpring(mouse.y,smoothOptions)
  }

  const manageMouseMove = (e) => {
    const { pageX, pageY } = e; // Use pageX and pageY to account for scrolling
    mouse.x.set(pageX - cursorSize / 2);
    mouse.y.set(pageY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="absolute z-50 h-[15px] w-[15px] rounded-full bg-white pointer-events-none mix-blend-difference"
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
    ></motion.div>
  );
};

export default Cursor;
