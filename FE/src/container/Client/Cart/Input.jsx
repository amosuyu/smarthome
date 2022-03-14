import { style } from '@mui/system'
import React from 'react'

const Input = (props) => {
    const {inputType, classStyle, label, placeHolder, valueInput, styleLabel, handle, id, name ,namefor} = props
  return (
   <>
            <label className={styleLabel} htmlFor={namefor}>{label}</label>
            <input type={inputType} className={classStyle} name={name} id={id} placeholder={placeHolder} value={valueInput} onChange={handle} />
   </>
  )
}

export default Input