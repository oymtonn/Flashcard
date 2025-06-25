

import './App.css'
import { useState } from 'react';
import Card from './components/Card'
import AnswerInput from './components/AnswerInput'

const App = () => {

    const cardSet = [
        {question: "What is the most populous city in the United States?", answer: "New York City"},
        {question: "Which city is home to the Eiffel Tower?", answer: "Paris, France"},
        {question: "What is the capital city of Japan?", answer: "Tokyo"},
        {question: "Which South American city is famous for the Christ the Redeemer statue?", answer: "Rio de Janeiro, Brazil"},
        {question: "What is the capital of the United Kingdom?", answer: "London"},
        {question: "Which Australian city is known for the Sydney Opera House?", answer: "Sydney"},
        {question: "What is the capital city of Egypt?", answer: "Cairo"},
        {question: "Which city is known as the financial capital of India?", answer: "Mumbai"},
        {question: "What is the capital city of South Korea?", answer: "Seoul"},
        {question: "Which European city is built on canals and often called 'The Floating City?'", answer: "Venice, Italy"},
    ]

    const [index, setIndex] = useState(0)

    const getNextCard = () => {
        if (index <= 8){
            setIndex(index + 1)
        }
    }

    const getPreviousCard = () =>{
        if (index >= 1){
            setIndex(index - 1)
        }
    }

    return(
        <div className="App">
            <h1>City Flashcards</h1>
            <h3>Test your knowledge of cities from around the world!</h3>
            <h4>Number of cards: 10</h4>
            <Card question={cardSet[index].question} answer={cardSet[index].answer}/>
            <AnswerInput
                question={cardSet[index].question}
                answer={cardSet[index].answer}
            />
            <div className="button-row">
                <button onClick={getPreviousCard} className="arrowButton" disabled={index===0}>
                    <img src="./src/assets/arrow.png" className="arrowImg"/>
                </button>
                <button onClick={getNextCard} className="arrowButton" disabled={index===9}>
                    <img src="./src/assets/right-arrow.png" className="arrowImg"/>
                </button>
            </div>
        </div>
    )
}

export default App