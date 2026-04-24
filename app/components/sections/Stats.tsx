import { stats } from "@/types/stats";

type StatsProps = {
  stats: stats;
};

const Stats = ({ stats }: StatsProps) => {
  const formatNumber = (num: number) => {
    if (num >= 100000) return (num / 100000).toFixed(1) + "M+";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K+";
    return num + "+";
  };

  return (
    <section
      id="stats"
      className="flex justify-center items-center h-screen w-full"
    >
      <div className="max-w-5xl flex gap-6 flex-col justify-center items-center">
        <div className="flex flex-col justify-between items-center gap-4">
          <h1 className="font-semibold text-2xl md:text-4xl">
            {stats.title.split(" ").map((word, index) => (
              <span
                key={index}
                className={
                  index === 1 || index === 2 ? "text-blue-600" : "text-black"
                }
              >
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="font-normal text-sm md:text-lg">
            {stats.description.split(" ").map((word, index) => (
              <span
                className={
                  index === 3 || index === 4 ? "text-blue-600" : "text-black"
                }
                key={index}
              >
                {word}{" "}
              </span>
            ))}
          </p>
        </div>

        <ul className="md:[&>li]:border-b-0 [&>li]:border-b [&>li]:border-gray-200 md:border-b-0 md:[&>li:nth-child(-n+2)]:border-gray-200 md:[&>li:nth-child(-n+2)]:border-r-2 flex flex-col md:flex-row justify-between items-start gap-4">
          {stats.stats_data.map((s) => (
            <li
              className="p-4 md:p-2 flex flex-row justify-between items-center md:flex-col gap-4 font-medium text-base"
              key={s.id}
            >
              <span className="bg-blue-100 text-lg md:text-2xl font-bold text-blue-700 p-2 w-16 md:w-24 h-auto text-center rounded-full">
                {formatNumber(s.value)}
              </span>
              <span className="p-2 text-center">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Stats;
