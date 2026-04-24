import React from "react";
import { ChevronsRight } from "lucide-react"; // Assuming lucide-react for the icon
import Circle from "./Circle";

export type LinePosition = "top" | "bottom" | "both" | "none";

type ColorKey = "primary" | "secondary" | "accent";

type CircleProps = {
  position: LinePosition;
  isFirst?: boolean;
  isLast?: boolean;
  icon?: React.ReactNode;
  color?: ColorKey;
};

const CircleHalfBorder = ({ position, isFirst, isLast, icon }: CircleProps) => {
  return (
    <div className="relative flex items-center justify-center h-55 w-45">
      {/* Outer Arc */}
      <div
        className={`absolute flex justify-center overflow-hidden ${
          position === "top" ? "top-0" : "bottom-2"
        }`}
        style={{ width: 200, height: 100 }}
      >
        <div
          className={`w-45 h-45 rounded-full border-2 border-dashed border-gray-400 ${
            position === "top" ? "translate-y-6" : "-translate-y-1/2"
          }`}
        />
      </div>

      {/* Dot */}
      {isFirst && position === "bottom" && (
        <div className="absolute w-2.5 h-2.5 bg-gray-400 rounded-full bottom-[48%] left-[-2%]" />
      )}

      {/* Triangle */}
      {isLast && (
        <div
          className={`absolute w-0 h-0 ${
            position === "top"
              ? "top-[24%] right-[10%]"
              : "bottom-[48%] right-[-1%]"
          }
          border-l-8 border-l-gray-400
          border-t-[5px] border-t-transparent
          border-b-[5px] border-b-transparent`}
        />
      )}

      {/* Arrow */}
      {!isLast && (
        <ChevronsRight
          color="#9a9393"
          className={`absolute -right-3 ${
            position === "top" ? "top-[42%]" : "bottom-[42%]"
          }`}
          size={32}
        />
      )}

      <Circle icon={icon} position={position} />
    </div>
  );
};

export default CircleHalfBorder;
