import React, { useState, useMemo } from 'react'

function UsedMemo() {
    const [todos, setTodos] = useState([
        { id: 1, title: "Learn React", isCompleted: false },
        { id: 2, title: "Learn Javascript", isCompleted: true },
    ]);
    const [count, setCount] = useState(0);

    // todos.filter luôn luôn chạy khi component re-render, dù giá trị của state todos không đổi
    // const completedTodos = todos.filter((item) => item.isCompleted);

    // useMemo nhận vào 2 tham số:
    // callback function: Hàm để tính toán và return về một giá trị
    // depedencies: Mảng phụ thuộc để useMemo quyết định sẽ chạy lại callback để tính toán giá trị mới hay dùng giá trị đã được ghi nhớ ở lần trước để sử dụng.
    // Lưu ý: Chỉ sử dụng useMemo đối với những xử lý tốn nhiều thời gian, hoặc tài nguyên của máy tính
    const completedTodos = useMemo(() => {
        console.log("useMemo run");
        return todos.filter((item) => item.isCompleted);
  }, [todos]);

  return (
    <div>
        <h1>UsedMemo</h1>
    </div>
  )
}

export default UsedMemo