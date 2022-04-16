import React, {useState,useEffect} from 'react'
import "../styles/SwPage.css"
import { Link } from "react-router-dom";

const SwPage = () => {
  const [siraberu, setSiraberu] = useState('');
  const [siraberuu, setSiraberuu] = useState('');
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  const [sirabeta, setSirabeta] = useState('');
  const [tiisai, setTiisai] = useState('');
   const [error, setError] = useState('');
  
 const handleChange = (e) => {
   setSiraberu(() => e.target.value)

 }
   
  const handleChange1 = (e) => {
 setSiraberuu(() => e.target.value)
 }
  
  const sira = () => {
    //  if ("0123456789".indexOf(siraberu, 0) < 0) {
    //   return false;
    //  } else
       if (siraberu < 10 && siraberuu < 10) {
      console.log("numは10以上です。");
      window.location.replace('http://birthday-color.cafein.jp/' + 'html/' + '0' + siraberu + '0' + siraberuu + '.html')
    } else if (siraberu < 10 && siraberuu > 9) {
      console.log("numは10以上です。");
      window.location.replace('http://birthday-color.cafein.jp/' + 'html/' + '0' + siraberu + siraberuu + '.html')
    } else if (siraberu > 9 && siraberuu < 10) {
      console.log("numは10以上です。");
      window.location.replace('http://birthday-color.cafein.jp/' + 'html/' + siraberu + '0' + siraberuu + '.html')
    } else if (siraberu > 9 && siraberuu > 9) {
      console.log("numは10以上です。");
      window.location.replace('http://birthday-color.cafein.jp/' + 'html/' + siraberu + siraberuu + '.html')
    }else {
      setError("正しく入力してください")
    }
 
    
  }
  

  return (
    　<div className="aa">
      <div className="aaa"> Birthday Color</div>
      <div className="aaaa">
      <div　className="siraberu">〜月〜<input onChange={handleChange} type="number" value={siraberu} min="1" max="12"placeholder="月"/></div>
      <div　className="siraberuu">〜日〜<input onChange={handleChange1} type="number" value={siraberuu} min="1" max="31"placeholder="日"/></div>
        {error}
        <br /><button onClick={sira}>牡丹</button>
    </div>
      </div>
  );
  }   
    
export default SwPage;