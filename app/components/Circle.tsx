import { LinePosition } from "@/types/accredian";

type CircleProps = {
  icon: React.ReactNode;
  position?: LinePosition;
  color?: string;
};

const Circle = ({
  icon,
  position = "none",
  color = "primary",
}: CircleProps) => {
  const showTop = position === "bottom" || position === "both";
  const showBottom = position === "top" || position === "both";

  return (
    <div className="relative flex items-center justify-center">
      {/* 🔹 Top Line */}
      {showTop && (
        <div className="absolute bottom-full left-1/2 h-[95%] w-0.5 -translate-x-1/2 bg-sky-400 z-10">
          <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-sky-600" />
        </div>
      )}

      {/* 🔹 Main Circle */}
      <div
        className={`h-32 w-32 border-2 border-${color} relative z-10 flex items-center justify-center rounded-full bg-white p-2 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)]`}
      >
        <div className="flex items-center justify-center rounded-full border-2 border-sky-400 p-1">
          <div
            className={`text-white flex h-20 w-20 items-center justify-center rounded-full bg-${color} shadow-inner`}
          >
            {icon}
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Line */}
      {showBottom && (
        <div className="absolute top-full left-1/2 h-[95%] w-0.5 -translate-x-1/2 bg-sky-400 z-10">
          <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-sky-600" />
        </div>
      )}
    </div>
  );
};

export default Circle;
