import TimelineItem from "../TimelineItem";

import { MdLightbulbOutline } from "react-icons/md";

import { HiOutlineUserGroup } from "react-icons/hi";

import { TbRefresh, TbWorld, TbArrowsDiagonal } from "react-icons/tb";

import { FiTarget } from "react-icons/fi";

import { BsBox } from "react-icons/bs";

import { accredians, IconKey, colorVariants } from "@/types/accredian";

import USPWheel from "../wheel/USPWheel";
import USPList from "../wheel/USPList";

export type AccredianProps = {
  accredian: accredians;
};

export const iconMap: Record<IconKey, React.ReactNode> = {
  lightbulb: <MdLightbulbOutline size={50} />,
  user: <HiOutlineUserGroup size={50} />,
  settings: <TbRefresh size={50} />,
  globe: <TbWorld size={50} />,
  arrow: <TbArrowsDiagonal size={50} />,
  target: <FiTarget size={50} />,
  box: <BsBox size={50} />,
};

const AccredianEdge = ({ accredian }: AccredianProps) => {
  return (
    <section
      id="accredianEdge"
      className="flex justify-center items-center mb-40 h-auto w-full"
    >
      <div className="flex flex-col justify-center items-center min-w-4xl space-y-20 lg:space-y-40">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="text-lg md:text-4xl font-semibold ">
            {accredian.title.split(" ").map((word, index) => (
              <span
                className={index === 1 || index === 2 ? "text-primary" : ""}
                key={index}
              >
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="font-medium font-lg md:text-xl">
            {accredian.description.split(" ").map((word, index) => (
              <span
                className={
                  index === 3 || index === 4 || index === 5
                    ? "text-primary"
                    : ""
                }
                key={index}
              >
                {word}{" "}
              </span>
            ))}
          </p>
        </div>

        {/* desktop view */}
        <div className="hidden lg:flex flex-row justify-center items-center">
          {accredian.items.map((item, index) => {
            const color = colorVariants[index % colorVariants.length];
            return (
              <TimelineItem
                key={item.id}
                item={{
                  ...item,
                  icon: iconMap[item.icon],
                  color,
                }}
                align="right"
                isFirst={index === 0}
                isLast={index === accredian.items.length - 1}
              />
            );
          })}
        </div>

        {/* mobile view */}
        <div className="relative flex items-center justify-center lg:hidden w-full h-125">
          <USPWheel
            items={accredian.items.map((item) => ({
              ...item,
              icon: iconMap[item.icon],
            }))}
          />
          <USPList items={accredian.items} />
        </div>
      </div>
    </section>
  );
};
export default AccredianEdge;
