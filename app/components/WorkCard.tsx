// utils/iconMapper.tsx
import { BarChart3, Presentation, Monitor } from "lucide-react";

export const iconMapper: Record<string, React.ReactNode> = {
  chart: <BarChart3 size={22} />,
  board: <Presentation size={22} />,
  monitor: <Monitor size={22} />,
};

type Props = {
  step: number;
  title: string;
  description: string;
  icon: string;
};

const WorkCard: React.FC<Props> = ({ step, title, description, icon }) => {
  return (
    <div className="relative bg-[#eef2f7] border border-blue-200 rounded-2xl p-8 w-full max-w-77.5 shadow-sm overflow-visible">
      {/* Step Number */}
      <div className="absolute top-4 left-4 w-8 h-8 rounded-full border border-blue-400 text-sm flex items-center justify-center bg-white font-semibold">
        {step}
      </div>

      {/* 🔵 LEFT BAR */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-2 h-[75%] bg-blue-600 rounded-full" />

      {/* 🔵 RIGHT BAR */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-2 h-[75%] bg-blue-600 rounded-full" />

      {/* Icon */}
      <div className="flex justify-center mb-5">
        <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md">
          {iconMapper[icon]}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-center mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm font-medium text-gray-600 text-center max-w-100">
        {description}
      </p>
    </div>
  );
};

export default WorkCard;
