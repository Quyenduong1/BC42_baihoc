import React from 'react'


// vi du them cho Button.jsx


function Product({name ,price, onAddToCart}) {
  return (
    <h3>
        {name} - {price}$ - <button onClick={() => onAddToCart({name,price})}>Add to Cart</button>
    </h3>
  )
}

export default Product