type CardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const CurvedCard = ({ title, description, icon }: CardProps) => {
  return (
    <div
      className="
        w-55 h-55 
        sm:w-65 sm:h-65 
        md:w-75 md:h-75 
        lg:w-[320px] lg:h-80
        p-4 md:p-6
        border-4 md:border-8 border-primary
        rounded-full
        flex flex-col justify-center items-center text-center
        mx-auto
      "
    >
      {/* Icon */}
      <div className="text-blue-600 mb-3 md:mb-5 flex justify-center text-xl md:text-2xl">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base font-semibold px-2">
        {description}
      </p>
    </div>
  );
};

export default CurvedCard;
