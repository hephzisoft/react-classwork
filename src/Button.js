import React from 'react'

const Button = ({buttonText, setReqType, reqType }) => {
  return (
    <button
    className='{buttonText===reqType ? "selected" : null}'
    type='button'
    onClick={() => setReqType(buttonText)}
    >{buttonText}</button>
  )
}

export default Button