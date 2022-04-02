import React from 'react'
import "../styles/UtPage.css"
import { useState }from 'react';

const UtPage = () => {
  const [text,setText] = useState('')
  const [message,setMessage] = useState('')
  const [message2,setMessage2] = useState('')
  const [error, setError] = useState('')
  
  const handleText = (str) => {
    setText(str)
  }

  const hyoutann = () => {
    if (text === ""){
      setError("っっっっっっっっっっd")
    }else{
      setMessage(text)
      setMessage2('http://birthday-color.cafein.jp/html/' + text + '.html')
      setError("")
      console.log(text)
      console.log(message2)
    }}

  return (
    <div className="a">
      <p className="april">tuna(title)</p>
  <label className="ritomasusi">にゅ</label>
  <input className="ritomasusi" type="text" onChange={(e)=>handleText(e.target.value)} />
  <button className="ritomasusi" onClick={hyoutann} type="button" value="Submit">btton</button>
  <div className="gannenn">{error}</div>
  <div className="rrrrr">{text}</div>
  </div>
  )
  }

export default UtPage