import React, { useEffect, useState } from 'react'
import HypeButton from './HypeButton'
import { getDubs, postDub } from '../apis/dubsapi' 

type Dub = {
  id: number
  dub: string
  created_at: string 
}

export default function Form() {
  const [input, setInput] = useState('')
  const [dubs, setDubs] = useState<Dub[]>([])

  useEffect(() => {
    async function fetchDubs() {
      const data = await getDubs()
      setDubs(data)
    }
    fetchDubs()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await postDub(input)
    const updated = await getDubs()
    setDubs(updated)
    setInput('')
  }

  return (
    <div className="form-wrapper">
  <div className="sticker-logo">
    <img src= '../client/public/ChatGPT Image Apr 22, 2025, 06_59_52 PM.png' alt="Dub Diary Logo" />
  </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What's your W?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {dubs.map((d) => (
          <li key={d.id}>      
            <p>{d.dub}</p>
            <small>{new Date(d.created_at).toLocaleString('en-NZ', {
               timeZone: 'Pacific/Auckland',})}</small>
          </li>
      ))}
      </ul>

      <div className="sticker-corner">
    <img src="../client/public/sticker-pack.png" alt="Cute sticker pack" />
      </div>
  

      <HypeButton />
      </div>
  )
}


