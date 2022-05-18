import React from 'react'

export default function Modal({isCorrect, turn, solution}) {
  return (
    <div className="modal">
        {isCorrect ? (
            <div>
                <h1>You win!</h1>
                <p className="solution">
                    {solution}
                </p>
                <p>You found the solution in {turn} guesses</p>
            </div>
        ): (
            <div>
                <h1>You lose!</h1>
                <p>the solution was:</p>
                <p className="solution">
                    {solution}
                </p>
                <p>better luck next time</p>
            </div>
        )}
    </div>
  )
}
