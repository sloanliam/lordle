import { useState } from 'react';
import './App.css';
import Keyboard from './components/keyboard/Keyboard';
import Board from './components/board/Board';

function App() {
  const [selection, setSelection] = useState('')
  const [boardState, setBoardState] = useState<string[]>([
    '', '', '', '', '',
    '', '', '', '', '',
    '', '', '', '', '',
    '', '', '', '', '',
    '', '', '', '', '',
  ])
  const answer = "GREEN"
  const [guessIndex, setGuessIndex] = useState(0)

  const createAnswer = (answer: string) => {
    let answerArr = []
    const splitAnswer: string[] = answer.split("")

    for(let i = 0; i <= 4; i++) {
      for(let j = 0; j <= splitAnswer.length - 1; j++) {
        answerArr.push(splitAnswer[j].toUpperCase())
      }
    }

    return answerArr
  }

  const updateBoard = (value: string) => {
    let tempBoardState: string[] = boardState
    tempBoardState[guessIndex] = value
    setBoardState(tempBoardState)

    setGuessIndex(guessIndex => guessIndex + 1)
  }

  return (
    <div className="App">
      <div style={{paddingTop: 20, fontSize: 48}}>
        Gessir
      </div>
      <div style={{ marginTop: 20 }}>
        <Board answer={createAnswer("color")} boardState={boardState} updateState={updateBoard}/>
      </div>
      <div style={{ marginTop: 40 }}>
        <Keyboard setBoard={updateBoard} />
      </div>
    </div>
  );
}

export default App;
