import React , {useContext}from 'react'
import { QuizContexts } from '../Helpers/Contexts'
import "../App.css"

export default function Mainmenu() {
    const { gameState, setGameState } = useContext(QuizContexts);
    
  return (
    <div className=' Menu'>
        <button onClick={()=> {setGameState("quiz");}}>Start Quiz</button>
        
    </div>
  )
}
