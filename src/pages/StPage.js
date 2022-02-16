import React from 'react'
import DatePicker from '../components/DatePicker'
import "../styles/StPage.css"

const StPage = () => {
  return (
    <div className="stpage-wrapper">
      <div className="st-title">誕生日を入力してください🎂</div>
      <div className="input-zone">
        <DatePicker type="月" />
        <span className="font-size-large">月</span>
        <DatePicker　type="日" />
        <span className="font-size-large">日</span>
      </div>
    </div>
  )
}

export default StPage