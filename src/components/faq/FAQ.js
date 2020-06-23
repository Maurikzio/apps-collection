import React, { useState } from 'react';

import Question from './Question.js';
import './faq-styles.css';

const FAQ = () => {
    const [faqs, setfaqs] = useState([
        {
          question: "how many programmers does it take to screw in a ligthbulb?",
          answer: "None, we don't adress hardware issues. 🤪",
          open: true
        },
        {
          question: "Who is the most awesome person?",
          answer: "You, 🙃",
          open: false
        },
        {
          question:"How many questions does it take to make a successful FAQ page?",
          answer: "Thiiiiiiiis many. 📈",
          open: false
        },
        {
            question: 'What\'s a Programmer?',
            answer: "An organism that turns caffeine and pizza into software.",
            open: false
        },
        {
            question: 'What\'s an Algorithm?',
            answer: "Word used by a programmer when they do not want to explain what they did.",
            open: false
        },
        {
            question: 'QA vs Developer',
            answer: "Two people from different planets working together to deliver a quality product.",
            open: false
        }
      ]);

    const toggleQuestion = index => {
        setfaqs(
            faqs.map((faq, i) => {
                if(i === index){
                    faq.open = !faq.open
                }else{
                    faq.open = false
                }
                return faq;
            })
        )
    }

    return (
        <div className='faq-page-container'>
            <header>the best faq page ever!</header>
            <div className='faqs'>
                {
                    faqs.map((faq, index) => (
                        <React.Fragment key={index}>
                            <Question faq={faq} index={index} onToggleQ={toggleQuestion}/>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export default FAQ;