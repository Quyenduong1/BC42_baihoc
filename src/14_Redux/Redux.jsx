import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Redux() {
  // useSelector nhận vào tham số là một callback function, nó sẽ theo dõi và gọi lại callback function mỗi khi giá trị state của redux store bị thay đổi
  // callback có tham số là state của redux store
  const {count, todos} = useSelector((state) => {
    const count = state.countReducer.count;
    const todos = state.todoReducer.todos;

    return { count, todos}
  })
  
  // useDispatch return về dispatch function
  // Dùng dispatch function để gửi action lên redux store
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const title = prompt('nhap test')
    const todo = {
      id: Math.floor(Math.random() *100),
      title,
      isComplete: false,
    }
    dispatch({type: 'todo/add_todo',payload: todo})
  }

  const handleDelete = (id) => {
    dispatch({type: 'todo/delete_todo',payload: id})
  }

  const handleUpdate = (update) => {
    dispatch({type:'todo/update_todo', payload: update})
  }

  return (
    <div>
      <h1>Redux</h1>

      <p>Count: {count}</p>

      <button onClick={() => dispatch({type: 'increment'})} >Increment</button>
      <button onClick={() => dispatch({type:'decrement'})}>decrement</button>

      <hr />

      <div>
        <p>Todos</p>
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todos.id}>
              <span style={{
                  cursor: "pointer",
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
                className="me-2"
                onClick={() => handleUpdate(todo.id)}>{todo.title}</span>
              <button onClick={() => handleDelete(todo.id)}>X</button>
            </li>
          )
        })}
      </ul>      
    </div>
  )
}

export default Redux
