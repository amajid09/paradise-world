import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
type FAQItemProps = {
    question: string;
    answer: string;
};
const FAQItem: React.FC<FAQItemProps> = ({
    question,
    answer
}) => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
        <button onClick={() => setIsOpen(!isOpen)} className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none" aria-expanded={isOpen}>
            <span className="text-lg font-semibold text-gray-900">{question}</span>
            <div className={`p-1 rounded-full bg-gray-50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <ChevronDown size={20} className="text-gray-600" />
            </div>
        </button>
        <div className={`px-6 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
    </div>;
};
const FAQSection:React.FC = () => {
    const faqs = [{
        question: 'How long does shipping take?',
        answer: "We process orders within 24 hours. Standard shipping typically takes 3-5 business days, while express shipping arrives in 1-2 business days. You'll receive tracking information as soon as your order ships."
    }, {
        question: 'What is your return policy?',
        answer: "We offer a 30-day return policy for all unopened and unused products. If you're not completely satisfied with your purchase, you can return it for a full refund or exchange. Return shipping is free for all domestic orders."
    }, {
        question: 'Are your perfumes authentic?',
        answer: 'Yes, absolutely! We are an authorized retailer for all brands we carry. Every product is sourced directly from the manufacturer or authorized distributors, guaranteeing 100% authenticity and quality.'
    }, {
        question: 'How do I choose the right perfume?',
        answer: 'We recommend checking the scent notes listed on each product page. You can also order our Discovery Set to try small samples before committing to a full-size bottle. Our customer service team is also happy to provide personalized recommendations!'
    }, {
        question: 'Do you offer gift wrapping?',
        answer: 'Yes! We offer premium gift wrapping services for a small fee. You can select this option at checkout and include a personalized gift message. Your order will arrive beautifully packaged in our signature Ambera box.'
    }, {
        question: 'Do you ship internationally?',
        answer: "We currently ship to over 50 countries worldwide. International shipping times vary by location but typically take 7-14 business days. Customs duties and taxes may apply depending on your country's regulations."
    }];
    return <section className="w-full py-16 md:py-24 px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-600">
                    Everything you need to know about our perfumes and services
                </p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} />)}
            </div>
        </div>
    </section>;
};
export default FAQSection;