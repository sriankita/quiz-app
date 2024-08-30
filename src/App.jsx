import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainmenu from './Components/Mainmenu';
import { Endscreen } from './Components/Endscreen';
import Quiz from './Components/Quiz';
import { QuizContexts } from './Helpers/Contexts';

function App() {
  const [gameState, setGameState] = useState("main");
  const [score, setScore] = useState(0);

  return (
    <div className='App'>
     <h1>Quiz app</h1>
     <QuizContexts.Provider value={{gameState, setGameState ,score ,setScore }}>
     {gameState == "main" && <Mainmenu />}
     {gameState == "quiz" && <Quiz />}
     {gameState == "endscreen" && <Endscreen />}
     </QuizContexts.Provider>
    </div> 
  )
}

export default App
