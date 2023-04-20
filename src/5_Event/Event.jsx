import React from 'react'

function Event() {
    // Lưu ý: Định nghĩa các hàm xử lý sự kiện bên trong component
    //Định nghĩa sự kiện cho button
    const handleClick = () => {
        alert('Hello');
    }

    // Định nghĩa sự kiện cho input
    // tất cả sự kiện đều nhận đc một đối tượng event
    // event.target: element phát sinh ra sự kiện
    const handleChange = (event) => {
        console.log(event.target.value);
        // console.log("input change");
    }

    // Hàm sử lý sự kiện click của button get Message
    const handleGetMessage = (message) => {
        alert(`Message: ${message}`);
    };

    // hàm trung gian
    // const exemple = () => {
    //     return handleGetMessage("hello");
    // };

  return (
    <div>
        <h1>Event</h1>

        {/* onClick={handleClick} không bao gồm cặp ngoặc tròn ở cuối */}
        {/* Không gọi hàm xử lý sự kiện, ta chỉ đưa nó vào trong onClick và React sẽ tự gọi đến hàm đó khi user click vào button */}
        <button onClick={handleClick} >Click me</button>
        {/* <button onClick={() => alert('clicked')} ></button> */}


        <hr />

        <input onChange={handleChange} />

        <hr />

        {/* Nếu hàm xử lý sự kiện cần nhận vào tham số, ta sẽ đưa vào onClick một hàm ẩn danh (thường viết bằng arrow function) , Khi user click vào button, React sẽ gọi tới hàm ẩn danh này, và hàm này sẽ gọi tới hàm xử lý sự kiện và truyền vào tham số */}
        <button onClick={() => handleGetMessage("Horus hi")} >Click me</button>
    </div>
  )
}

export default Event