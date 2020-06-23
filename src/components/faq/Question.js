import React from 'react';

const Question = ({faq, index, onToggleQ}) => {
    const toggleQHelper = () => {
        onToggleQ(index)
    }
    return (
        <div className={'faq ' + (faq.open ? 'open' : '')}>
            <div className='faq-question'>
                {faq.question}
                <span onClick={toggleQHelper}>&#8595;</span>
            </div>
            <div className='faq-answer'>
                {faq.answer}
            </div>
        </div>
    )
}

export default Question;