type FAQ = {
  id: number;
  question: string;
  answer: string;
};

type Props = {
  faq: FAQ;
  isOpen: boolean;
  onClick: () => void;
};

const FAQItem = ({ faq, isOpen, onClick }: Props) => {
  return (
    <div className="border-b pb-4">
      {/* Question */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <h4
          className={`font-medium ${
            isOpen ? "text-blue-600" : "text-gray-800"
          }`}
        >
          {faq.question}
        </h4>

        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </div>

      {/* Answer */}
      {isOpen && (
        <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
      )}
    </div>
  );
};

export default FAQItem;
