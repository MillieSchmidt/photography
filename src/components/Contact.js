import React, { useState } from 'react';

const Contact = () => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [subjectErr, setError] = useState('');
    const [messageErr, setMessageError] = useState('');

    const handleSubject = (e) => {
        setSubject(e.target.value);
    }

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        if (e.target[0].value.length < 5) {
            e.preventDefault();
            setError('בבקשה כתבו את נושא ההודעה');
            console.log(subjectErr);
        } else if (e.target[0].value.includes('<', 0)) {
            e.target[0].value = e.target[0].value.replace('<', '');
            setSubject(e.target[0].value);
        } else {
            setError('');
        }

        if (e.target[1].value.length < 5) {
            e.preventDefault();
            setMessageError('בבקשה ספרו לי במה מדובר. איך אני יכול לעזור?');
        } else if (e.target[1].value.includes('<', 0)) {
            e.target[1].value = e.target[1].value.replace('<', '');
            setMessage(e.target[1].value);
        } else {
            setMessageError('');
        }
    }

    return(
        <div className='app-contact' id='contact'>
            <p>אהבת את התמונות? רוצה גם?</p>
            <p>לצילומים, הזמנות ושאר בקשות, אפשר לשלוח מייל בקלות:</p>
            <form method='POST' action={`mailto:millieschmidt@protonmail.com?subject=${subject}
                        &body=${message}`} encType='application/x-www-form-urlencoded' onSubmit={handleSubmit}>
                <div>
                    <label>נושא:</label>
                    <input type='text' name='subject' placeholder={subject} required onChange={handleSubject} />
                    <small className='subject-error'>{subjectErr}</small>
                </div>
                <div>
                    <label>הודעה:</label><br />
                    <textarea type='text' placeholder={message} required onChange={handleMessage} /><br />
                    <small className='message-error'>{messageErr}</small>
                </div>
                <input type='submit' value='שלח' />
            </form>
        </div>
    )
}

export default Contact;