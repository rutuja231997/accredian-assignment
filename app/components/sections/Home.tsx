import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";

import { Hero } from "@/types/home";

type HomeProps = {
  hero: Hero;
};

const Home = ({ hero }: HomeProps) => {
  return (
    <section
      id="home"
      className="flex justify-center items-center h-auto w-full"
    >
      <div className="mt-48 md:mt-32 sm:min-w-md md:min-w-7xl  bg-blue-50 rounded-xl flex-col flex md:flex-row justify-between items-center">
        <div className="md:flex-1 w-full order-1 md:order-2 relative h-100 md:h-120 lg:h-120">
          <Image
            src={hero.image}
            fill
            className="object-cover"
            alt="hero image"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="md:flex-1 w-full p-12 order-2 md:order-1 flex flex-col justify-between items-start gap-8">
          <h1 className="font-semibold md:font-bold text-2xl md:text-6xl">
            {hero.title.split(" ").map((word, index) => (
              <span
                key={index}
                className={
                  index === 1 || index === 4 ? "text-blue-500" : "text-black"
                }
              >
                {word}{" "}
              </span>
            ))}
          </h1>
          <h2 className="font-semibold md:font-normal text-base md:text-2xl">
            {hero.description}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {hero.features.map((feature) => (
              <ul className="" key={feature.id}>
                <li className="flex flex-row gap-2">
                  <CiCircleCheck color="#00A300" size={30} />
                  <span>{feature.text}</span>
                </li>
              </ul>
            ))}
          </div>

          <button className="text-xl font-semibold bg-blue-500 px-4 py-2 w-full md:w-auto text-white rounded-xl text-center">
            {hero.cta.text}
          </button>
        </div>
      </div>
    </section>
  );
};
export default Home;
