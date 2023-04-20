import React from 'react'

function Card({ image , children }) {
  return (
    <div className='card'>
        {image && <img scr={image} alt='img' /> }

        <div className='card-body'>
            {children}
        </div>
    </div>
  )
}

export default Card