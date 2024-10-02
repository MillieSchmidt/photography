import React from 'react';
import {questions} from '../assets/questions';

const About = () => {

    const HandleClick = (e) => {
        const question = document.getElementsByClassName('question');

        for (let i = 0; i < question.length; i++) {

            if (question[i].firstChild.innerText === e.target.innerText) {

                question[i].lastChild.id === 'closed' ? 
                    question[i].lastChild.id = 'opened' : question[i].lastChild.id = 'closed';
            }

        }
    }

    // render each question div
    const question = questions.map((q) => {
        return(
            <div className='question' key={q.id} onClick={ HandleClick }>
               <p>{q.question}</p>
               <div className='answer' id='closed'>{q.answer}</div>
            </div>
        )
    })

    return(
        <div className='app-about' id='about'>
            <p className='bio'>היי, אני מילי. אני מצלם כבר עשרים שנה, בעיקר תמונות סטילס, אירועים ואנשים בלילה וביום. צילמתי מכל הסוגים. צילמתי חתונות. צילמתי באליפות ישראל בפיתוח גוף. צילמתי במסיבות. צילמתי בכנסים. צילמתי פורטרטים. צילמתי בארץ וצילמתי בחו"ל.</p>
            {question}
        </div>
    )
}

export default About;