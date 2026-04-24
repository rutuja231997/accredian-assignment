"use client";

import ContactBar from "../Contact";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "../TestimonialCard";

import { Testimonial } from "@/types/testimonials";

type Props = {
  testimonials: {
    title: string;
    subtitle: string;
    testimonials: Testimonial[];
  };
};

const Testimonials = ({ testimonials }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: "start",
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // ✅ Directly get snap points (NO state)
  const snapPoints = emblaApi ? emblaApi.scrollSnapList() : [];

  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-10">
        {/* Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {testimonials.title.split(" ").map((word, index) => (
              <span
                key={index}
                className={index === 2 || index === 3 ? "text-primary" : ""}
              >
                {word}{" "}
              </span>
            ))}
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            {testimonials.subtitle.split(" ").map((word, index) => (
              <span
                key={index}
                className={index === 1 || index === 2 ? "text-primary" : ""}
              >
                {word}{" "}
              </span>
            ))}
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.testimonials.map((item) => (
              <div
                key={item.id}
                className="flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_48%]"
              >
                <TestimonialCard {...item} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {snapPoints.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? "w-5 bg-primary" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
        <ContactBar />
      </div>
    </section>
  );
};

export default Testimonials;
