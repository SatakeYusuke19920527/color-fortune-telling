import React from 'react'
import "../styles/UtPage.css"
import { useState }from 'react';



const UtPage = () => {
  const [text,setText] = useState('')

  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
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
  <label className="ritomasusi">にゅ</label>
  <input className="ritomasusi" type="text" onChange={(e)=>handleText(e.target.value)} />
  <button className="ritomasusi" onClick={hyoutann} type="button" value="Submit">btton</button>
  <div className="gannenn">{error}</div>
  <div>{message}</div>
  </div>
  )
  }

export default UtPage