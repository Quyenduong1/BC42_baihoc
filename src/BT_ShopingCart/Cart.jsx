import React from 'react'

function Cart({carts,isOpen,onClose,onDelete,onUpdateQuantity}) {
    if(!isOpen) {
        return null
    }
  return (
      <>
          <div className="modal fade show" style={{display:'block'}} id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-xl">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel">Giỏ Hàng</h1>
                          <button onClick={onClose} className="btn-close" />
                      </div>
                      <div className="modal-body">
                          <table className='table'>
                            <thead>
                                <tr>
                                    <th>Mã Sản Phẩm</th>
                                    <th>Tên Sản Phẩm</th>
                                    <th>Hình Ảnh</th>
                                    <th>Số lượng</th>
                                    <th>Đơn giá</th>
                                    <th>Thành Tiền</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {carts.map((item)=>  {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td><img width={'70px'} height={'70px'} src={item.image} alt={item.name} /></td>
                                            <td>
                                                <button disabled={item.quantity === 1} onClick={() => onUpdateQuantity(item.id,-1)} className='btn btn-primary'>-</button>
                                                <span className='mx-2'>{item.quantity}</span>
                                                <button  onClick={()=>onUpdateQuantity(item.id,1)} className='btn btn-primary'>+</button>
                                            </td>
                                            <td>{item.price}VND</td>
                                            <td>{item.quantity * item.price}VND</td>
                                            <td><button onClick={()=>onDelete(item.id)} className='btn btn-danger'>Xóa</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                          </table>
                      </div>
                      <div className="modal-footer">
                          <button  onClick={onClose} className="btn btn-secondary">Close</button>
                      </div>
                  </div>
              </div>
          </div>
          <div className="modal-backdrop fade show" />
      </>


  )
}

export default Cart