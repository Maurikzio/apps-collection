import React from 'react';

const Question = ({faq, onToggleQ}) => {
    return (
        <div className={'faq ' + (faq.open ? 'open' : '')}>
            <div className='faq-question'>
                {faq.question}
                {/* <p>{faq.question} {faq.tags.map((tag, index) => <i key={index}>{tag}</i> )}</p> */}
                <span onClick={() => onToggleQ(faq.id)}>&#8595;</span>
            </div>
            <div className='faq-answer'>
                {faq.answer}
            </div>
        </div>
    )
}

export default Question;