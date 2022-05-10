import { useState } from 'react'

const useWordle = (solution) =>{
    
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);

    const formatGuess = () =>{
        let solutionArray = [...solution];
        let formattedGuess = [...currentGuess].map((l) => {
            return {key: l, color: 'grey'}
        })

        formattedGuess.forEach((l,i)=>{
            if(solutionArray[i] === l.key){
                formattedGuess[i].color = 'green';
                solutionArray[i] = null;
            }
        })

        formattedGuess.forEach((l,i)=>{
            if(solutionArray.includes(l.key) && l.color !== 'green'){
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(l.key)] = null
            }
        })

        return formattedGuess
    }

    const addNewGuess = () =>{

    }

    const handleKeyup = ( {key} ) =>{

        if(key === 'Enter'){
            if(turn > 5){
                console.log("you used all guesses")
                return
            }
            if(history.includes(currentGuess)){
                console.log("no duplicates")
                return
            }
            if(currentGuess.length !== 5){
                console.log("guess must be 5 letter long")
                return
            }
            const formated = formatGuess()
            console.log(formated)
        }

        if (key === 'Backspace') {
            setCurrentGuess((prev)=>{
                return prev.slice(0, -1)
            })
            return
        }
        
        
        if (/^[A-Za-z]$/.test(key)) {
            if(currentGuess.length < 5){
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle