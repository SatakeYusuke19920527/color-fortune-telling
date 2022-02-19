import React from 'react'
import "../styles/StPage.css"
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createUrl } from '../lib/createUrl';
const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
const StPage = () => {
  const [month, setMonth] = React.useState("");
  const [date, setDate] = React.useState("");
  
  const setSelectMonth = (event) => {
    setMonth(event.target.value);
  }
  const setSelectDate = (event) => {
    setDate(event.target.value);
  }

  const fortuneStart = () => {
    if (!month && !date) {
      window.alert('日付を入力してください')
      return
    }
    const birth = createUrl(month, date)
    let url = `http://birthday-color.cafein.jp/html/${birth}.html`
    window.location.href = url;
  }

  return (
    <div className="stpage-wrapper">
      <div className="st-title">誕生日を入力してください🎂</div>
      <div className="input-zone">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">月</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={month}
          label="月"
          onChange={setSelectMonth}
          >
            {
              months.map((ar, index) => {
                return (
                  <MenuItem key={index} value={ar}>{ar}</MenuItem>
                )
              })
            }
        </Select>
      </FormControl>
        <span className="font-size-large">日</span>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">日</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={date}
          label="日"
          onChange={setSelectDate}
          >
            {
              dates.map((ar, index) => {
                return (
                  <MenuItem key={index} value={ar}>{ar}</MenuItem>
                )
              })
            }
        </Select>
      </FormControl>
        <span className="font-size-large">日</span>
      </div>
      <Button
        variant="contained"
        color="success"
        onClick={fortuneStart}
        sx={{ width: '40vw' }}>占う</Button>
    </div>
  )
}

export default StPage