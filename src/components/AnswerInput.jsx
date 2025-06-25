import { useState } from 'react';

const AnswerInput = ({ question, answer }) => {
    const [userAnswer, setUserAnswer] = useState('');
    const [userFeedback, setUserFeedback] = useState('');

    const checkAnswer = () => {
        if (userAnswer.trim().toLowerCase() === answer.trim().toLowerCase()) {
            setUserFeedback("Correct");
        } else {
            setUserFeedback("Try again");
        }
    }

    return (
        <div className="answer-input">
            <input
                placeholder="Input your guess here"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
            />
            <button onClick={checkAnswer}>Enter</button>
            <p>{userFeedback}</p>
        </div>
    )
}

export default AnswerInput;
