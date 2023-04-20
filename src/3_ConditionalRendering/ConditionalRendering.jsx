import React from 'react'

function ConditionalRendering() {
  // isLoggedIn thể hiện xem user đăng nhập hay chưa
  let isLoggedIn = true;
  // content chứa JSX dựa vào điều kiện của biến isLoggedIn
  let content = null;

  let isActive =  false;

  if (isLoggedIn) {

    content = <h1>Welcome to Home</h1>;
    //content = <Dashboard />

  }else {

    content = <h1>Login Home</h1>;

  }

  return (
    <div>{content}
    
    {/* Nếu muốn  hiển thị theo điều kiện trong JSX ta dùng toán tử bậc 3 */}
    {/* ĐK đúng và Sai nếu có */}
    {isActive ? <h3>Actived</h3>: <h3>UnActived</h3>}

    {/* Trong trường hợp chỉ muốn kiểm tra điều kiện đúng để hiển thị */}
    {/* ĐK chỉ có đúng thì dùng dưới đây */} 
    {isActive ? <h3>Actived</h3> : null}

    {/* Cách viết ngắn hơn là dùng *toán tử && trong phép gán* */}
    {isActive && <h3>Actived</h3> }
    </div>
  )
}

export default ConditionalRendering;