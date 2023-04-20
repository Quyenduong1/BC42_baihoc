import React from 'react'

function List() {
    // const templates = [
    //     <p>User A</p>,
    //     <p>User B</p>,
    //     <p>User C</p>,
    // ]

    const products = [
        {id: 1, name: 'Iphone'},
        {id: 2, name: 'Samsung'},
        {id: 3, name: 'Apple'},
    ]


    // Dùng hàm map để biến đổi array các object thành array các phần tử JSX
    const listProducts = products.map( (item) => {
        //Với mỗi phần tử trong danh sách, ta cần cung cấp thuộc tính KEY các giá trị không bị trùng lặp, thông thường ta sẽ dùng id của dữ liệu để làm key
        return <li key={item.id}>{item.name}</li>
    });

    const students = [
        {id: '0001', name: 'Student A'},
        {id: '0002', name: 'Student B'},
        {id: '0003', name: 'Student C'},
    ]

  return (
    <div>
        <h1>List</h1>
        {/* {templates} */}

        <ul>
            {listProducts}
        </ul>


        {/* ta có thể viết trực tiếp map bên trong jsx */}
        <ul>
            {students.map( (student) => {
                return <li key={student.id}> {student.name} </li>
            })}
        </ul>

        {/* Ngoài ra có thể sử dụng tính chất return của arrow function để viết ngắn gọn hơn */}

        {students.map( (student) => (<li key={student.id}>{student.name}</li>))}

    </div>
  )
}

export default List