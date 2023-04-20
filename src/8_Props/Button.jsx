import React from 'react'

function Button({children, onClick}) {
  return (
    <button className='btn btn-danger' onClick={onClick}>
        {children}
    </button>
  )
}

export default Button