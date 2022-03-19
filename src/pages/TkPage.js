import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { createUrl } from '../lib/createUrl'
import "../styles/TkPage.css" 


const TkPage = () => {
  const [text, setText] = useState('')
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setText(() => e.target.value)
  }

  const hyouji = () => {
    if (text === '') {
      setError('数値を入力してください')
    } else {
      setText(text)
      console.log(text)
      setText1(text)
      console.log(text1)
      setText2('http://birthday-color.cafein.jp/html/' + text + '.html')
      setError('')
      console.log(text2)
    }
  }


  return (
    <div className="center">
      <p></p>
      {/* <head>
        <title>color-fortune-telling TkPage.ver</title>
      </head> */}
      <p className='text-size'>COLOR-AND-SIGN-FORTUNE-TELLING</p>
    <div><p className="tk-color">Tk.ver</p></div>
    <p><label>誕生日:</label><input type="text" value={text} onChange={handleChange} className='input-size'/>
    <button onClick={hyouji}>調べる</button></p>
    <p>{error}</p>
    <p>誕生日色<a href={text2} className="kekka">{text2}</a></p>
    <p>入力方法:一月一日場合</p>
    <p>0101</p>
    </div>
  )
}

export default TkPage