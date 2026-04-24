type Props = {
  categories: {
    id: string;
    title: string;
  }[];
  activeCategory: string;
  setActiveCategory: (id: string) => void;
};

const FAQTabs = ({ categories, activeCategory, setActiveCategory }: Props) => {
  return (
    <div className="flex flex-col gap-4 w-1/3">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setActiveCategory(cat.id)}
          className={`p-4 rounded-lg border text-left font-medium transition ${
            activeCategory === cat.id
              ? "bg-blue-50 border-blue-500 text-blue-600"
              : "bg-white border-gray-300 text-gray-600"
          }`}
        >
          {cat.title}
        </button>
      ))}
    </div>
  );
};

export default FAQTabs;
