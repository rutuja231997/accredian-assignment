import FAQItem from "./FaqItem";

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

type Props = {
  faqs: FAQ[];
  openFAQ: number | null;
  setOpenFAQ: (id: number | null) => void;
};

const FAQList = ({ faqs, openFAQ, setOpenFAQ }: Props) => {
  return (
    <div className="w-2/3 flex flex-col gap-4">
      {faqs.map((faq) => (
        <FAQItem
          key={faq.id}
          faq={faq}
          isOpen={openFAQ === faq.id}
          onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
        />
      ))}
    </div>
  );
};

export default FAQList;
