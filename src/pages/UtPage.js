import React from 'react'
import "../styles/UtPage.css"
import { useState }from 'react';



const UtPage = () => {
  const [text,setText] = useState('')
  const [message,setMessage] = useState('')
  const [error, setError] = useState('')
  const handleText = (str) => {
    setText(str)
  }

  const hyoutann = () => {
    if (text === ""){
      setMessage(text)
      setError("文字をenterせよ")
    }else{
      setMessage(text)
      setError("")
    }}

  return (
    <div className="a">
      <p className="april">tuna(title)</p>
  <label>にゅ</label>
  <input type="text" onChange={(e)=>handleText(e.target.value)} />
  <button onClick={hyoutann} type="button" value="Submit">btton</button>
  <div style={{color : "red"}}>{error}</div>
  {message}
  </div>
  )
  }

export default UtPage