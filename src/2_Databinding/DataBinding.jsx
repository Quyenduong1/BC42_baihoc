import React from 'react'

function DataBinding() {
    let msg ="Hi";
    let imgUrl = "https://picsum.photos/200/300";
    let user = {
        name: "Alice",
        email: "alice@gmai.com",
    };
  return (
    <div>
        <h1>{msg}</h1>
        <img src={imgUrl} alt="" />
        <p>{user.name}</p>
        <input value={user.email} />
    </div>
  )
}

export default DataBinding;