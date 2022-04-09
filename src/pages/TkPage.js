import React,{useState} from 'react'
// import Select from 'react-select'
// import { Link } from 'react-router-dom'
// import { createUrl } from '../lib/createUrl'
import "../styles/TkPage.css" 


const TkPage = () => {
  const [text, setText] = useState('')
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [text3, setText3] = useState('')
  const [text4, setText4] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setText(() => e.target.value)
  }
  const handleChange1 = (a) => {
    setText3(() => a.target.value)
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
  const hyouji1 = () => {
    if (text3 === '') {
      setError('数値を入力してください')
    } else {
      setText4('https://fortune.yahoo.co.jp/12astro/' + text3 )
      setError('')
      console.log(text3)
      
    }
  }

  // const options = [
  //   { value: 'aries', label: '牡羊座' },
  //   { value: 'taurus', label: '牡牛座' },
  //   { value: 'gemini', label: '双子座' },
  //   { value: 'cancer', label: '蟹座' },
  //   { value: 'leo', label: '獅子座' },
  //   { value: 'virgo', label: '乙女座' },
  //   { value: 'libra', label: '天秤座' },
  //   { value: 'scorpio', label: '蠍座' },
  //   { value: 'sagittarius', label: '射手座' },
  //   { value: 'capricorn', label: '山羊座' },
  //   { value: 'aquarius', label: '水瓶座' },
  //   { value: 'pisces', label: '魚座' },
  // ]
  


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
    <p>誕生日色占い:<a href={text2} className="kekka">{text2}</a></p>
    <p>入力方法:一月一日場合</p>
    <p>0101</p>
    <p>{error}</p>
    <label>星座:</label>
  <select  className="select" onChange={handleChange1} value={text3}　>
    <option value='aries'>牡羊座</option>
    <option value='taurus'>牡牛座</option>
    <option value='gemini'>双子座</option>
    <option value='cancer'>蟹座</option>
    <option value='leo'>獅子座</option>
    <option value='virgo'>乙女座</option>
    <option value='libra'>天秤座</option>
    <option value='scorpio'>蠍座</option>
    <option value='sagittarius'>射手座</option>
    <option value='capricorn'>山羊座</option>
    <option value='aquarius'>水瓶座</option>
    <option value='pisces'>魚座</option>
  </select>
    <button onClick={hyouji1}>調べる</button>
    <p>星座占い:<a href={text4} className="kekka">{text4}</a></p>
    </div>
  )
}

export default TkPage