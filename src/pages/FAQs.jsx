import React from 'react';
import Footer from '../components/Footer';
import './FAQs.css';

const FaqsPage = () => {
  const [expanded, setExpanded] = React.useState({});

  const faqs = [
    {
      question: 'What is the difference between Wall Mounted and Floor Mounted models?',
      answer: 'Both models have the same working mechanism, but they differ in installation. The Wall Mounted model is drilled into a wall with 4 small holes and screwed up, while the Floor Mounted model is drilled into a concrete or stable surface (excluding mud or sand) and screwed into four holes.',
    },
    {
      question: 'How do I set up the app for the delivery box?',
      answer: 'Install the app, then scan the QR code on the paper included in the box (not the QR code on the box itself, which is for delivery persons). After scanning, enter your name, email, and password to complete setup.',
    },
    {
      question: 'What should I do if I enter the wrong order ID or delivery company?',
      answer: 'If you enter the wrong order ID or select the wrong delivery company, delivery will fail. You can scroll down in the app\'s Orders → New Order section to delete the incorrect order and re-enter the correct details.',
    },
    {
      question: 'When should I add order details to the app?',
      answer: 'You can add order details anytime before the delivery person arrives. For convenience, it\'s best to add them right after ordering to avoid forgetting.',
    },
    {
      question: 'How does the delivery person interact with the box?',
      answer: 'The delivery person scans the QR code on the box, enters the order ID and e-commerce site, and after validation, the box\'s lock will unlock briefly and then lock again after a few seconds.',
    },
    {
      question: 'What happens if the delivery fails?',
      answer: 'If delivery fails, check if the box\'s battery is charged or properly inserted. Ensure the correct order ID and delivery company are entered in the app.',
    },
    {
      question: 'Can I open the box without the app?',
      answer: 'Yes, you can open the box using mechanical keys if you are unable to use the app. The app allows opening within a 30-meter range of the box.',
    },
    {
      question: 'What surfaces are suitable for the Floor Mounted model?',
      answer: 'The Floor Mounted model requires a concrete or stable surface for installation. It should not be installed on raw surfaces like mud or sand.',
    },
  ];

  const toggleAnswer = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="faqs-container">
      <h1 className="faqs-title">Frequently Asked Questions</h1>

      {faqs.map((faq, index) => (
        <div key={index} className="faq-container">
          <div className="faqs-question-container">
            <p className="faqs-question-text">{faq.question}</p>
            <button onClick={() => toggleAnswer(index)} className="faqs-toggle-button">
              <span className="faqs-icon-toggle-button">
                <ion-icon name={expanded[index] ? 'chevron-up' : 'chevron-down'}></ion-icon>
              </span>
            </button>
          </div>
          {expanded[index] && (
            <div className="faqs-answer-container">
              <p className="faqs-answer-text">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}

      <Footer />
    </div>
  );
};

export default FaqsPage;