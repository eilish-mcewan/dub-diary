import { useState } from 'react'

export default function HypeButton() {

  const [affirmation, setAffirmation] = useState('')

  function handleClick() {
    const index = Math.floor(Math.random() * affirmations.length)
    const randomAffirmation = affirmations[index]
    setAffirmation(randomAffirmation)
  }
  
  const affirmations= [
  "No one can do it like you.",
  "You really did that!",
  "Ate DOWNNNNNNN.",
  "Honestly if that's all you do today you've done a good job.",
  "Why are you like, the best?",
  "You deserve a drink tbh.",
  "TREAT YO SELF.",
  "That's a certified dub if I've ever seen one!",
  "Go take a nap because you must be exhausted from killing it so heavy.",
  "CHEEEEEEEEEEHOOOOOOOOOOOOO",
  "LESHGOOOOOOOOOOOO",
 ]


 return (
  <div className="hypebutton-container">
    <button onClick={handleClick}>Hype Me Up!</button>

    {affirmation && (
      <p className="affirmation-text">{affirmation}</p>
    )}
  </div>
)
}