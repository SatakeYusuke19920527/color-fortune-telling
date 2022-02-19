import React,{useState} from 'react'
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
    <div className="center">
      {/* <head>
        <title>color-fortune-telling TkPage.ver</title>
      </head> */}
    <div><p className='text-size'>COLOR-FORTUNE-TELLING</p><p className="tk-color">Tk.ver</p></div>
    <p><input type="text" value={text} onChange={handleChange} className='input-size'/>
    <button onClick={hyouji}><a href={text2}>調べる</a></button></p>
    <p>入力方法:一月一日場合</p>
    <p>0101</p>
    </div>
  )
}

export default TkPage