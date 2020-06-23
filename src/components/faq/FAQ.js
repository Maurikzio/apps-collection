import React, { useState, useEffect } from 'react';

import Question from './Question.js';
import './faq-styles.css';

const questions = [
    {
        question: "how many programmers does it take to screw in a ligthbulb?",
        answer: "None, we don't adress hardware issues. 🤪",
        tag: 'funny',
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
    },
    {
        question: 'What is the difference between an element and a component in React?',
        answer: "An element is a plain JavaScript object that represents a DOM node or component. Components can be either classes or functions, that take props as an input and return an element tree as the output.",
        open: false
    }
]

const FAQ = () => {
    /*1st approach
        const [ faqs, setFaqs] = useState(questions);
    */
    const [ faqs, setFaqs] = useState([]);
    const [ wantedQ, setWantedQ ] = useState('');
    const [ filteredQs, setFilteredQs ] = useState([])

    useEffect(() => {
        setFaqs(questions)
    }, [faqs])

    const toggleQuestion = index => {
        setFaqs(
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

    const findQuestionHandler = (e) => {
        /*1st approach
        const qsFound = questions.filter(faq => faq.question.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setFaqs(qsFound)*/
        setWantedQ(e.target.value)
    }
    /* 2nd approach
        const filteredQuestions = faqs.filter(faq =>faq.question.toLocaleLowerCase().includes(wantedQ.toLocaleLowerCase()))
    */

    //3rd approach
    useEffect(() => {
        setFilteredQs(
            faqs.filter(faq => faq.question.toLocaleLowerCase().includes(wantedQ.toLocaleLowerCase()))
        )
    }, [wantedQ, faqs])

    return (
        <div className='faq-page-container'>
            <header>the best faq page ever!</header>
            <div className='search-question-container'>
                <input
                    name='search'
                    type='text'
                    value={wantedQ}
                    autoComplete = 'off'
                    placeholder='Search question'
                    onChange={findQuestionHandler}
                    autoFocus={true}
                />
            </div>
            <div className='faqs'>
                
                {/* 1st approach
                    {  faqs.length === 0 
                    ? <span className='no-matches'>no questions found.. 😭</span> 
                    : faqs.map((faq, index) => (
                        <React.Fragment key={index}>
                            <Question faq={faq} index={index} onToggleQ={toggleQuestion}/>
                        </React.Fragment>
                     ))
                } */}
                {/*2nd approach
                    filteredQuestions.map((faq, index) => (
                        <React.Fragment key={index}>
                            <Question faq={faq} index={index} onToggleQ={toggleQuestion}/>
                        </React.Fragment>
                    ))
                */}
                {
                    /*3rd approach using a second useEffect()*/
                    filteredQs.length === 0 
                    ? <span className='no-matches'>no questions found.. 😭</span> 
                    : filteredQs.map((faq, index) => (
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