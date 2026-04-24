import WorkCard from "../WorkCard";
import { WorksResponse } from "@/types/works";

type WorksProps = {
  works: WorksResponse;
};

const Works = ({ works }: WorksProps) => {
  return (
    <section
      id="howItWorks"
      className="flex flex-col justify-center items-center h-screen w-full"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-2">
        {works.title.split("Deliver Results")[0]}
        <span className="text-blue-600">Deliver Results</span>
        {works.title.split("Deliver Results")[1]}
      </h2>

      <p className="text-gray-600 mb-12">{works.description}</p>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {works.works.map((item) => (
          <WorkCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
export default Works;
