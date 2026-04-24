import Image from "next/image";

type Testimonials = {
  id?: number;
  logo: string;
  company: string;
  description: string;
};

const TestimonialCard = ({ logo, company, description }: Testimonials) => {
  return (
    <div className="bg-white border rounded-xl p-6 flex flex-col gap-4 shadow-sm h-full">
      {/* Logo */}
      <div className="h-10">
        <Image
          src={logo}
          alt={company}
          className="h-full object-contain"
          width={40}
          height={40}
        />
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default TestimonialCard;
