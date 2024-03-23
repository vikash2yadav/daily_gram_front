import React from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const DatePickerC = (props) => {
  return (
    <>
       <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} />
    </>
  )
}

export default DatePickerC