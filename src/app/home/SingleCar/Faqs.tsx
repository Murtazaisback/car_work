import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const faqsData = [
  {
    id: 1,
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces.'
  },
  {
    id: 2,
    question: 'How to install React?',
    answer: 'You can install React using npm or yarn. For example: npm install react'
  },
  // Add more FAQs as needed
];

const anotherFaqsData = [
  {
    id: 1,
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces.'
  },
  {
    id: 2,
    question: 'How to install React?',
    answer: 'You can install React using npm or yarn. For example: npm install react'
  },
  {
    id: 3,
    question: 'How to install React?',
    answer: 'You can install React using npm or yarn. For example: npm install react'
  },
  {
    id: 4,
    question: 'How to install React?',
    answer: 'You can install React using npm or yarn. For example: npm install react'
  },
  {
    id: 5,
    question: 'How to install React?',
    answer: 'You can install React using npm or yarn. For example: npm install react'
  },
  // Add more FAQs as needed
];

const Faqs = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [anotherExpandedIndex, setAnotherExpandedIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number, isAnotherFAQ: boolean = false) => {
    if (isAnotherFAQ) {
      setAnotherExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    } else {
      setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  return (
    <div className="faq_section">
      <div className='flex_box'>
        <h2>Data from the Swedish Transport Agency</h2>
        <ul>
          {faqsData.map((faq, index) => (
            <li key={faq.id}>
              <div className="faq-question" onClick={() => toggleAnswer(index)}>
                <div>{faq.question}</div>
                <FontAwesomeIcon icon={expandedIndex === index ? faChevronUp : faChevronDown} />
              </div>
              <div className={`faq-answer${expandedIndex === index ? ' expanded' : ''}`}>
                {expandedIndex === index && <p>{faq.answer}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex_box'>
        <h2>Free car history from</h2>
        <ul>
          {anotherFaqsData.map((faq, index) => (
            <li key={faq.id}>
              <div className="faq-question" onClick={() => toggleAnswer(index, true)}>
                <div>{faq.question}</div>
                <FontAwesomeIcon icon={anotherExpandedIndex === index ? faChevronUp : faChevronDown} />
              </div>
              <div className={`faq-answer${anotherExpandedIndex === index ? ' expanded' : ''}`}>
                {anotherExpandedIndex === index && <p>{faq.answer}</p>}
              </div>
            </li>
          ))}
        </ul>
            <Link to="" className='report_btn'>See the full report ( 3 Events ) </Link>
      </div>
    </div>
  )
}

export default Faqs;
