import React, {useState} from 'react'
import Cart from './Cart';

import data from "./data..json"
import ProductDetail from './ProductDetail';

import ProductList from './ProductList';

function ShopingCart() {
  // state quản lí sản phẩm đang được chọn để xem chi tiết
  const [selectedProduct, setselectedProduct] = useState(null);
  //state quản lý trạng thái ẩn/hiện của giỏ hàng
  const [isOpen, setIsOpen] = useState(false);
  // state quản lý các sản phẩm đc thêm vào giỏ hàng
  const [carts, setCarts] = useState([]);


  const handGetProduct = (product) => {
    // Giá trị product chỉ tồn tại bên trong hàm handleGetProduct
    // câu hỏi: Làm thế nào để đưa giá trị product xuống component ProductDetails
    //=> trả lời: Lưu giá trị product vào state
    setselectedProduct(product);
}

  const handleAddToCart = (product) => {
    // B1: Kiểm tra sản phẩm có tồn tại hay chưa
    const index = carts.findIndex(item=> item.id === product.id);
    // + nếu tồn tại thì tăng số lượng còn chưa thì sẽ thêm vào và set số lượng là 1
   
    // làm việc với state là mảng/object mình luôn luôn phải tạo ra mảng/ object mới 
    // -1 là sản phẩm chưa tồn tại
    if(index === -1)  {
      const newProduct = { ...product, quantity: 1};
      setCarts([...carts, newProduct]);
    } else {
      // nếu đã tồn tại thì tăng số lượng lên 1
      const newCarts = [...carts];
      newCarts[index].quantity +=1;
      setCarts(newCarts);
    }
  }

  // hàm xóa sản phẩm
  const deleteProduct = (productID) => {
    const newCarts = carts.filter(item => item.id !== productID)
    setCarts(newCarts);
  }

  // tang giam so luong
  const handleUpdateQuantity = (productId, quantity ) =>{
    const newCarts = carts.map(item => {
      if(item.id === productId) {
        return { ...item,quantity: item.quantity + quantity }
      }
      return item;
    });
    setCarts(newCarts);
  }

  // tinh tong so luong san pham
  const totalItems = carts.reduce((total,item) => {
    return total + item.quantity;
  },0);

  return (
    <div className='container'>
      <h1 className='text-center'>FPT Shop</h1>

      <div className='d-flex justify-content-end mb-3'>
        {/* Khi người dùng click vào sẽ bật modal lên  */}
        <button onClick={() => setIsOpen(true)} className='btn btn-danger'>
          Giỏ hàng
          {totalItems > 0 && <span className='ms-2'>({totalItems})</span> }
        </button>
      </div>
      <Cart carts = {carts} isOpen = {isOpen} onClose={()=> setIsOpen(false)} onDelete={deleteProduct} onUpdateQuantity={handleUpdateQuantity}/>
      <ProductList products={data} onSelectProduct={handGetProduct} onAddToCart ={handleAddToCart} />
      <ProductDetail product={selectedProduct} />
    </div>
  )
}

export default ShopingCart