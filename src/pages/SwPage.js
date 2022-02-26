import React, {useState} from 'react'
import { StyleSheet, View, Text } from 'react';
import { Link } from 'react-router-dom'
import "../styles/SwPage.css"



const SwPage = () => {

const [siraberu, setSiraberu] = useState('')

    return (
      <div className="aa">  
        
        <div className="aaa"> 〜バースデーカラー〜</div>
       <button onClick={siraberu}>牡丹</button>
      </div>
     )
  }   
    
export default SwPage