import React from 'react'

function Button({children,clickTranslate,clickChange,isChangeBtn}) {
  return (
    <button className='btn' onClick={isChangeBtn ? clickChange : clickTranslate}>
        {children}
    </button>
  )
}

export default Button