"use client";
import React, { useEffect, useState } from "react";
import { Item } from "../sections/AccredianEdge";

type Props = {
  items: Item[];
};

const USPList = ({ items }: Props) => {
  const angleStep = 360 / items.length;

  const [gap, setGap] = useState(50); // default (tablet)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setGap(20); // 📱 mobile → less space
      } else {
        setGap(50); // 💻 tablet → normal spacing
      }
    };

    handleResize(); // run once
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseRadius = 260 + gap;

  return (
    <div className="absolute inset-0 z-10">
      {items.map((item, index) => {
        const midAngle = index * angleStep + angleStep / 2;

        let extraOffsetY = 0;

        if (index === 0) extraOffsetY -= 10;
        if (index === Math.floor(items.length / 2)) extraOffsetY += 10;

        const x = baseRadius * Math.cos((midAngle - 90) * (Math.PI / 180));

        const y =
          baseRadius * Math.sin((midAngle - 90) * (Math.PI / 180)) +
          extraOffsetY;

        const isRight = x >= 0;

        return (
          <div
            key={item.id}
            className={`absolute w-35 sm:w-45 ${
              isRight ? "text-left" : "text-right"
            }`}
            style={{
              left: "50%",
              top: "50%",
              transform: `
                translate(-50%, -50%)
                translate(${x}px, ${y}px)
              `,
            }}
          >
            <h3 className="font-semibold text-sm sm:text-base mb-1">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-snug">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default USPList;
