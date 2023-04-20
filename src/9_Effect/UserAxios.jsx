import React,{ useState, useEffect } from 'react'
import axios from 'axios'


    //Demo Call API
function UserAxios() {
    // state quản lý giá trị trả về từ API
  const [users, setUsers] = useState([]);


  //Hàm dùng để call API
  const fetchUsers = async () => {
    try {
        const response = await axios({
          method: 'GET',
          url: 'https://jsonplaceholder.typicode.com/users',
        });
        setUsers(response.data);
    } catch (error) {
        console.log('error');
    }
  };

  useEffect(() => {
    fetchUsers();
  },[])

  return (
    <div>
        <h1>UserAxios</h1>

        <ul>
        {users.map((user) => {
            return <li key={user.id}>{user.name}</li>
        })}
        </ul>
    </div>
  )
}

export default UserAxios