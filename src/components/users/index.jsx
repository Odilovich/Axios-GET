import "./style.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const index = () => {
  const [users, setUsers] = useState()
  const getTodos = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/Users')
    setUsers(response.data)
  }
  useEffect(()=>{
    getTodos()
  },[])
  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <table className=" table table-info table-striped-columns table-hover">
                <thead>
                  <tr className="h-[60px] text-[18px]">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users && users.map(user => {
                      return (
                        <tr>
                          <td className="h-[60px]">{user.id}</td>
                          <td className="h-[60px]">{user.name}</td>
                          <td className="h-[60px]">{user.username}</td>
                          <td className="h-[60px]">{user.email}</td>
                          <td className="h-[60px]">{user.address.street}</td>
                          <td className="h-[60px]">{user.phone}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index
