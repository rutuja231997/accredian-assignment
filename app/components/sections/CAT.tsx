import { Lightbulb, Settings, Wrench } from "lucide-react";
import { cat_framework } from "@/types/cat";

import CurvedCard from "../CurvedCard";

type cat = {
  title: string;
  description: string;
  cat_framework: cat_framework[];
};

export const iconMap: Record<string, React.ReactNode> = {
  concept: <Lightbulb size={32} />,
  application: <Settings size={32} />,
  tools: <Wrench size={32} />,
};

const CAT = ({ cat }: { cat: cat }) => {
  return (
    <section
      id="cat"
      className="flex flex-col justify-center items-center h-screen w-full"
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="font-semibold md:text-4xl text-2xl">
          {cat.title.split(" ").map((word, index) => (
            <span
              key={index}
              className={index === 1 || index === 2 ? "text-primary" : ""}
            >
              {word}{" "}
            </span>
          ))}
        </h2>
        <p className="text-base md:text-lg font-medium">
          {cat.description.split(" ").map((word, index) => (
            <span
              key={index}
              className={index === 4 || index === 5 ? "text-primary" : ""}
            >
              {word}{" "}
            </span>
          ))}
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mt-8">
        {cat.cat_framework.map((c) => (
          <CurvedCard
            key={c.id}
            title={c.title}
            description={c.description}
            icon={iconMap[c.icon]}
          />
        ))}
      </div>
    </section>
  );
};

export default CAT;
