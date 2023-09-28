import React from 'react';
import './App.css';

function App() {
  const word = "synchrony"
  const splittedWord = word.split("")
  const [currentWord, setCurrentWord] = React.useState(splittedWord.map(() => "_"))
  const [inputValue, setInputValue] = React.useState<string>("")
  const [lives,setLives] = React.useState<number>(5)


  const onChange = (str:string) => {
    if(str.length < 2){
      setInputValue(str)
    }
  }

  const validateNewEntry = () => {
    if(word.includes(inputValue)) {
      // if(!currentWord.includes(inputValue)) {
        splittedWord.forEach((letter, index) => {
          if(letter === inputValue) {
            const newCurrent = [...currentWord]
            newCurrent[index] = letter

            setCurrentWord(prev => {
              prev[index] = inputValue
              return prev
            })
          }
        })
      // }
    } else {
      if(lives > 0) setLives(lives - 1)
    }
    setInputValue("")
  }
  return (
    <div className="App">
      <p>Lives: {lives}</p>
      {
        currentWord.map((letter) => (
          <span>{letter}</span>
        ))
      }
      <input type='text' value={inputValue} onChange={(e) => onChange(e.target.value)} />
      <button onClick={() => validateNewEntry()} disabled={lives === 0}>Try</button>
      {lives === 0 && (
        <p>You loose</p>
      )}
      {
        lives > 0 && !currentWord.includes("_") && (<p>You won!</p>)
      }
    </div>
  );
}

export default App;
