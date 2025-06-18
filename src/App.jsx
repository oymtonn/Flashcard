import './App.css'
import { useState } from 'react';
import Card from './components/Card'

const App = () => {

    const cardSet = [
        {question: "America", answer: "SHIT"},
        {question: "fda", answer: "BOTTLE"},
        {question: "dkf", answer: "BOTTLE"},
        {question: "lkfnv", answer: "BOTTLE"},
        {question: "vkflnd", answer: "BOTTLE"},
        {question: "povdjf", answer: "BOTTLE"},
        {question: "cxvm.", answer: "BOTTLE"},
        {question: "po3", answer: "BOTTLE"},
        {question: "5ij", answer: "BOTTLE"},
        {question: "onkvaf", answer: "BOTTLE"},
    ]

    const [index, setIndex] = useState(0)

    const getNextCard = () => {
        setIndex(Math.floor(Math.random() * 10))
    }

    return(
        <div className="App">
            <h1>City Flashcards</h1>
            <h3>Test your knowledge of cities from around the world!</h3>
            <Card question={cardSet[index].question} answer={cardSet[index].answer}/>
            <button onClick={getNextCard} className="arrowButton">
                <img src="./src/assets/right-arrow.png" className="arrowImg"/>
            </button>
        </div>
    )
}

export default App