"use client";

import { useState } from "react";
import data from "@/data/faq.json";
import FAQTabs from "../Faq/FaqTabs";
import FAQList from "../Faq/FaqList";
import EnquireButton from "../Faq/EnquireButton";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState(data.categories[0].id);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const selectedCategory = data.categories.find(
    (cat) => cat.id === activeCategory,
  );

  return (
    <section id="faqs" className="px-6 py-12 max-w-6xl mx-auto">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-8">
        {data.title.split(" ")[0]}{" "}
        <span className="text-blue-600">
          {data.title.split(" ").slice(1).join(" ")}
        </span>
      </h2>

      <div className="flex gap-10">
        {/* Left Tabs */}
        <FAQTabs
          categories={data.categories}
          activeCategory={activeCategory}
          setActiveCategory={(id) => {
            setActiveCategory(id);
            setOpenFAQ(null);
          }}
        />

        {/* Right FAQ List */}
        <FAQList
          faqs={selectedCategory?.faqs || []}
          openFAQ={openFAQ}
          setOpenFAQ={setOpenFAQ}
        />
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <EnquireButton />
      </div>
    </section>
  );
};

export default FAQ;
