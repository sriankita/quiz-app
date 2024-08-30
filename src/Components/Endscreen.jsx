import React , {useContext}from 'react'
import { QuizContexts } from '../Helpers/Contexts'
import{Questions} from '../Helpers/QuestionBank'
import "../App.css"

export const Endscreen = () => {
    const { score ,setScore , setGameState} = useContext(QuizContexts);

    const restartQuiz =() =>{
        setScore(0);
        setGameState("main");
    }
  return (
    <div className='Endscreen'>
        {" "}<h1>Quiz Finished </h1>
        <h3>{score}/{Questions.length * 4}</h3>
        <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
  )
}
