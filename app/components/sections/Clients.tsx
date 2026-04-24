"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import Image from "next/image";
import { clientsProps } from "@/types/clients";

type ClientProps = {
  clients: clientsProps;
};

const Clients = ({ clients }: ClientProps) => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [
      AutoScroll({
        speed: 1.2,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );
  return (
    <section
      id="clients"
      className="flex justify-center items-center h-screen w-full"
    >
      <div className="flex flex-col justify-center items-center min-w-5xl gap-6">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-semibold">
            {clients.title.split(" ").map((word, index) => (
              <span
                className={index === 2 ? "text-blue-600" : "text-black"}
                key={index}
              >
                {word}{" "}
              </span>
            ))}
          </h1>
          <p>
            {clients.description.split(" ").map((word, index) => (
              <span
                className={
                  index === 4 || index === 5 ? "text-blue-600" : "text-black"
                }
                key={index}
              >
                {word}{" "}
              </span>
            ))}
          </p>
        </div>
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex">
            {clients.clients.map((client) => (
              <div
                key={client.id}
                className="flex-[0_0_25%] sm:flex-[0_0_25%] md:flex-[0_0_20%] lg:flex-[0_0_16.66%] flex justify-center items-center"
              >
                <div className="relative w-20 h-15 md:w-25 md:h-17.5 lg:w-30 lg:h-20">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 25vw, (max-width: 1024px) 20vw, 16.66vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Clients;
