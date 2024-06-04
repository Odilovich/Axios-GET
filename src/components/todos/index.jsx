import axios from "axios";
import "./style.scss";
import { useEffect, useState } from "react";

const index = () => {
  const [todos, setTodos] = useState()
  const getTodos = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    setTodos(response.data)
    
  }
  useEffect(()=>{
    getTodos()
  },[])
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-bordered teble-hover">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Completed</th>
                </tr>
              </thead>
              <tbody>
                {todos && todos.map((todo) => (
                  <tr>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>{todo.completed + ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default index
