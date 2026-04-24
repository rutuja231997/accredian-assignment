import React from "react";
import { Headphones } from "lucide-react"; // or any icon lib

const ContactBar = () => {
  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-[#2D6CDF] to-[#3B82F6] px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Background circles */}
        <div className="absolute right-0 top-0 w-100 h-100 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute right-10 top-10 w-75 h-75 bg-white/10 rounded-full"></div>

        {/* Left Content */}
        <div className="flex items-center gap-4 z-10">
          <div className="bg-white/20 p-4 rounded-xl">
            <Headphones className="text-white w-6 h-6" />
          </div>

          <div>
            <h3 className="text-white text-lg md:text-xl font-semibold">
              Want to Learn More About Our Training Solutions?
            </h3>
            <p className="text-white/80 text-sm">
              Get Expert Guidance for Your Team’s Success!
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="z-10">
          <button className="bg-white text-primary font-medium px-6 py-2 rounded-lg flex items-center gap-2 hover:shadow-md transition">
            Contact Us
            <span>›</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
