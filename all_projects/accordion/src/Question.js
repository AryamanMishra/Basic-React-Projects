import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
 
const Question = ({id,title,info})=> {

    const [showInfo,setShowInfo] = React.useState(false)
    return (
        <article className='question'>
            <div className='header'> 
                <h3>{title}</h3>
                <button onClick={()=>setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </div>
            <p>{showInfo && info}</p>
        </article>
    )
}

export default Question
