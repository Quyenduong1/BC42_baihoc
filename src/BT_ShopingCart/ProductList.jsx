import React from 'react'
import ProductItem from './ProductItem'

function ProductList({ products, onSelectProduct,onAddToCart }) {
    const handGetProduct = (product) => {
        onSelectProduct(product);
    }

    const handleAddToCart = (product) => {
        onAddToCart(product);
    }
  return (
    <div className='row'>
        {products.map(item => {
            return (
                <div key={item.id} className='col-sm-4'>
                    <ProductItem product={item} onSelectProduct = {handGetProduct} onAddToCart ={handleAddToCart}/>
                </div>
            )
        })}
    </div>
  )
}

export default ProductList