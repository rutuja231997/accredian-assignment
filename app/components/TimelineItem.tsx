import { LinePosition, ColorKey } from "@/types/accredian";

import CircleHalfBorder from "./CircleHalfBorder";

type Align = "left" | "right";

type Item = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  position: LinePosition;
  color: ColorKey;
};

type TimelineItemProps = {
  item: Item;
  align: Align;
  isFirst?: boolean;
  isLast?: boolean;
};

const TimelineItem = ({ item, align, isFirst, isLast }: TimelineItemProps) => {
  const isLeft = align === "left";
  const isTop = item.position === "bottom";

  return (
    <div className="relative flex flex-col items-center">
      {/* TOP CONTENT */}
      {isTop && (
        <div
          className={`absolute flex justify-center items-start flex-col bottom-full min-w-50 ${
            isLeft ? "right-1/2 pr-2 text-right" : "left-1/2 pl-2 text-left"
          }`}
        >
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-base text-gray-600">{item.description}</p>
        </div>
      )}

      {/* UPDATED COMPONENT */}
      <CircleHalfBorder
        icon={item.icon}
        position={item.position}
        isFirst={isFirst}
        isLast={isLast}
        color={item.color}
      />
      {/* BOTTOM CONTENT */}
      {!isTop && (
        <div
          className={`absolute top-full flex flex-col justify-center items-start min-w-50 ${
            isLeft ? "right-1/2 pr-2 text-right" : "left-1/2 pl-2 text-left"
          }`}
        >
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-base text-gray-600">{item.description}</p>
        </div>
      )}
    </div>
  );
};

export default TimelineItem;
