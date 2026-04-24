"use client";

import React, { useRef, useEffect, useState } from "react";
import { Item } from "../sections/AccredianEdge";

type USPWheelItem = Omit<Item, "icon"> & {
  icon: React.ReactNode;
};

type Props = {
  items: USPWheelItem[];
};

const colors = [
  "#1e3a8a",
  "#1d4ed8",
  "#2563eb",
  "#3b82f6",
  "#1d4ed8",
  "#1e40af",
  "#1e3a8a",
];

const USPWheel = ({ items }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;

      const size = Math.min(rect.width, rect.height);
      setRadius(size / 2);
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const angle = 360 / items.length;

  const innerRadius = radius * 0.55;
  const iconRadius = (radius + innerRadius) / 2;

  return (
    <div
      ref={containerRef}
      className="relative w-70 h-70 sm:w-95 sm:h-95 md:w-105 md:h-105 flex items-center justify-center"
    >
      {/* 🔵 Segmented Circle */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(${colors
            .map((color, i) => `${color} ${i * angle}deg ${(i + 1) * angle}deg`)
            .join(",")})`,
        }}
      />

      {/* 🔹 Icons */}
      {items.map((item, index) => {
        if (radius === 0) return null; // safety

        const midAngle = index * angle + angle / 2;

        const x = iconRadius * Math.cos((midAngle - 90) * (Math.PI / 180));

        const y = iconRadius * Math.sin((midAngle - 90) * (Math.PI / 180));

        return (
          <div
            key={item.id}
            className="absolute text-white"
            style={{
              left: "50%",
              top: "50%",
              transform: `
                translate(-50%, -50%)
                translate(${x}px, ${y}px)
              `,
            }}
          >
            {item.icon}
          </div>
        );
      })}

      {/* ⚪ Center Circle */}
      <div className="absolute w-[55%] h-[55%] bg-gray-100 rounded-full flex items-center justify-center shadow-md">
        <h2 className="text-base sm:text-xl md:text-2xl font-bold text-gray-800 text-center leading-tight">
          OUR <br /> USPs
        </h2>
      </div>
    </div>
  );
};

export default USPWheel;
