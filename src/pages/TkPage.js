import React,{useState} from 'react'
import { Link } from 'react-router-dom'
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
    console.log(text)
    console.log(error)
    if (!isNaN()) {
      setError('数値を入力してください')
      setText1('')
    } else {
      setText1(text)
      setText2('http://birthday-color.cafein.jp/html/' + text + '.html')
      setError('')
      console.log(text2)
    }
  }


  return (
    <div className="center">
      {/* <head>
        <title>color-fortune-telling TkPage.ver</title>
      </head> */}
    <div><p className='text-size'>COLOR-FORTUNE-TELLING</p><p className="tk-color">Tk.ver</p></div>
    <p><label>誕生日:</label><input type="text" value={text} onChange={handleChange} className='input-size'/>
    <button onClick={hyouji}><a href={text2} className='buttoncolor'>調べる</a></button></p>
    <p>{error}</p>
    <p>入力方法:一月一日場合</p>
    <p>0101</p>
    </div>
  )
}

export default TkPage