import React from 'react'
import "../styles/UtPage.css"
import { useState }from 'react';
import { Link } from "react-router-dom";

const UtPage = () => {
  const [text,setText] = useState('')
  const [text1,setText1] = useState('')
  const [text2,setText2] = useState('')
  const [message,setMessage] = useState('')
  const [message1,setMessage1] = useState('')
  const [message2,setMessage2] = useState('')
  const [error, setError] = useState('')
  
  const handleText = (text) => {
    setText(text)
  }

  const aaa = () => {
    if (text === "") {
      setError("っっっっっっっっっっd")
    } else {
      setMessage(text)
      console.log(text)
      setMessage1(text)
      console.log(text1)
      setMessage2('http://birthday-color.cafein.jp/html/' + text + '.html')
      setError("")
      console.log(text2)
      window.location.href = `http://birthday-color.cafein.jp/html/${text}.html`; // 通常の遷移
    }
  }

  return (
    <div className="a">
      <p className="april">Utuna(Utitle)</p>
  <label className="ritomasusi">にゅ</label>
  <input className="ritomasusi" type="text" onChange={(e)=>handleText(e.target.value)} />
  <button className="ritomasusi" onClick={aaa}>btton</button>
  <p>{error}</p>
  </div>
  )
  }

export default UtPage