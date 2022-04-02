import React, {useState,useEffect} from 'react'
import "../styles/SwPage.css"
import { Link } from "react-router-dom";

const SwPage = () => {
  const [siraberu, setSiraberu] = useState('');
  const [siraberuu, setSiraberuu] = useState('');
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  // const [sira, setSira] = useState('');
  
 const handleChange = (e) => {
    setSiraberu(() => e.target.value)
 }
   
  const handleChange1 = (e) => {
 setSiraberuu(() => e.target.value)
 }
  
  const sira = () => {
    window.location.replace('http://birthday-color.cafein.jp/' + 'html/' + siraberu + siraberuu + '.html')
 }
  
// 一桁でも出来るようにする
  
  return (
    　<div className="aa">
      <div className="aaa"> Birthday Color</div>
      {/* <button onClick={siraberu}>牡丹</button>  */}
      <div className="aaaa">
      <p>〜月〜<input onChange={handleChange} type="text" value={siraberu} /></p>
      <p>〜日〜<input onChange={handleChange1} type="text1" value={siraberuu} /></p>
        <br /><button onClick={sira}>牡丹</button>
    </div>
      </div>
  );
  }   
    
export default SwPage;