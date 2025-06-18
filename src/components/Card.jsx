import { useState } from 'react';

const Card = (props) =>{
    const [side, setSide] = useState(1)

    const updateSide = () =>{
        setSide(side * -1)
    }

    return(
        <div className="flashcard" onClick={updateSide}>
            <h3>{side===1 ? props.question : props.answer}</h3>
        </div>
    )
}

export default Card