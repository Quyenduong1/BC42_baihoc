import React from 'react'

function ProductDetail({product}) {

  if (!product){
    return null;
  }


  return (
    <div className='mt-3 row'>
      <div className='col-sm-4'>
        <h3 className='text-center'>{product.name}</h3>
        <img width={'100%'} height={'350px'} src={product.image} alt={product.name} />
      </div>
      <div className='col-sm-8'>
        <h3>Thông Số Kỹ Thuật</h3>
        <table className='table'>
          <tbody>
            <tr>
              <td>Màn hình</td>
              <td>{product.display}</td>
            </tr>
            <tr>
              <td>Hệ Điều Hành</td>
              <td>Product.os</td>
            </tr>
            <tr>
              <td>Camera</td>
              <td>{product.camera}</td>
            </tr>
            <tr>
              <td>RAM</td>
              <td>{product.ram}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductDetail