import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const TkPage = () => {
  const [text, setText] = useState('')
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setText(() => e.target.value)
  }

  const hyouji = () => {
    console.log(text)
    console.log(error)
    if (text === "") {
      setError('何か文字を入力してください')
      setText1('')
    } else {
      setText1(text)
      setText2('http://birthday-color.cafein.jp/html/' + text + '.html')
      setError('')
      console.log(text2)
    }
  }


  return (
    <div>
    <div>TkPage</div>
    <p><input type="text" value={text} onChange={handleChange} />
    <button onClick={hyouji}><Link to={text2}>調べる</Link></button></p>
    </div>
  )
}

export default TkPage