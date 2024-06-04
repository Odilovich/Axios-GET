import "./style.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const index = () => {
  const [comments, setComments] = useState()
  const getComments = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
    setComments(response.data)
    
  }
  useEffect(()=>{
    getComments()
  },[])
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-bordered border-primary">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Body</th>
                </tr>
              </thead>
              <tbody>
                {
                  comments && comments.map(comment => (
                    <tr>
                      <td>{comment.id}</td>
                      <td>{comment.name}</td>
                      <td>{comment.email}</td>
                      <td>{comment.body}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default index
