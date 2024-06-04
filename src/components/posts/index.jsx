import axios from "axios";
import "./style.scss";
import { useEffect, useState } from "react";

const index = () => {
  const [post, setPost] = useState()
  const getPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPost(response.data)
  }
  useEffect(()=>{
    getPosts()
  },[])
  return (
    <>
      <div className="container flex flex-col gap-y-7">
        {
          post && post.map((item)=>(
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h1 className="card-title">{item.title}</h1>
                    <p className="card-text">{item.body}</p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default index
