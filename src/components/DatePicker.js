import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

export default function DatePicker({type}) {
  const [date, setDate] = React.useState({mondth: "", date: ""});

  const handleChange = (event) => {
    if (type === "月") {
      setDate({month: event.target.value});
    } else {
      setDate({date: event.target.value});
    }
  };

  console.log(date, 'date ==')

  const renderInputBox = (arr) => {
    if (type === "月") {
      arr = months
    } else {
      arr = dates
    }
    return(
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">月</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={date}
          label={type}
          onChange={handleChange}
          >
            {
              arr.map((ar, index) => {
                return (
                  <MenuItem key={index} value={ar}>{ar}</MenuItem>
                )
              })
            }
        </Select>
      </FormControl>
      </Box>
    )
  }

  return renderInputBox()
}