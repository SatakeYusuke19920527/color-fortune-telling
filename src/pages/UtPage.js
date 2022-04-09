import React from 'react'
import "../styles/UtPage.css"
import { useState }from 'react';

const UtPage = () => {
  const [text,setText] = useState('')
  const [message,setMessage] = useState('')
  const [message2,setMessage2] = useState('')
  const [error, setError] = useState('')
  
  const handleText = (e) => {
    setText(() => e.target.value)
  }

  const aaa = () => {
    if (text === ""){
      setMessage(text)
      setError("っっっっっっっっっっd")
    }else{
      setMessage(text)
      setMessage('http://birthday-color.cafein.jp/html/' + text + '.html')
      setError("")
    }}

  return (
    <div className="a">
      <p className="april">tuna(title)</p>
  <label className="ritomasusi">にゅ</label>
  <input className="ritomasusi" type="text" onChange={(e)=>handleText(e.target.value)} />
  <button className="ritomasusi" onClick={aaa} type="button" value="Submit">btton</button>
  <div style={{color : "red"}}>{error}</div>
  <div className="rrrrr">{message}</div>
  </div>
  )
  }

export default UtPage