import React, { useState } from "react"

export default function Form() {
const [input, setInput] = useState('')
const [submittedDub, setSubmittedDub] = useState('')

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
  setSubmittedDub(input)
  setInput('')
}


return (
<div>
  <form onSubmit={handleSubmit}>
    <input type= 'text'
    placeholder= "What's your W?"
    onChange={(e) => setInput(e.target.value)}
    />
    <button type= "submit">
    Celebrate!!
    </button>
  </form>

{submittedDub && (
  <p>
    Nice Dub!: “{submittedDub}” 🎉
  </p>
)}
</div>
)}



