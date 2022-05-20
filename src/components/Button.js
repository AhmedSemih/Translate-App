import React from 'react'

function Button({children}) {
  return (
    <button className='btn'>
        {children}
    </button>
  )
}

export default Button