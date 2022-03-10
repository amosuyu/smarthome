import { style } from '@mui/system'
import React from 'react'

const Input = (props) => {
    const {inputType, classStyle, label, placeHolder, valueInput, styleLabel} = props
  return (
   <>
            <label className={styleLabel}>{label}</label>
            <input type={inputType} className={classStyle} placeholder={placeHolder} value={valueInput}  />
   </>
  )
}

export default Input