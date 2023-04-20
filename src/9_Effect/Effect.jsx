import React, { useState, useEffect } from "react";
import EffectChild from "./EffectChild";
import UserAxios from "./UserAxios";

// useEffect(setup, deps)

function Effect() {
  const [count, setCount] = useState(0);

  // #1: useEffect với tham số thứ 2 là một array rỗng
  // - Chạy hàm setup 1 lần duy nhất sau lần render đầu tiên
  // - Thường dùng để call API, tương tác DOM
  useEffect(() => {
    console.log("#1 effect run");
  }, []);

  // #2: useEffect với tham số thứ 2 là một array có các giá trị
  // - Chạy hàm setup ở sau lần render đầu tiên
  // - Ở những lần render tiếp theo, hàm setup sẽ được chạy nếu các giá trị bên trong array ở tham số thứ 2 bị thay đổi
  useEffect(() => {
    console.log("#2 effect run");
  }, [count]);

  // #3: useEffect với tham số thứ 2 là một array rỗng và có cleanup
  // - Chạy hàm setup 1 lần duy nhất sau lần render đầu tiên
  // - cleanup effect sẽ được chạy trước khi component bị huỷ bỏ
  useEffect(() => {
    console.log("#3 effect run");

    // cleanup effect
    return () => {
      console.log("#3 cleanup effect run");
    };
  }, []);

  console.log('render run');
  
  return (
    <div>
      <h1>Effect</h1>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>

      {count <= 10 && <EffectChild count={count}/>}

      <UserAxios/>
      
    </div>
  );
}

export default Effect;
