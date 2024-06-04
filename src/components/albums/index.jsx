import "./style.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const index = () => {
  const [albums, setAlbums] = useState()
  const getAlbums = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
    setAlbums(response.data)
    
  }
  useEffect(()=>{
    getAlbums()
  },[])
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>UserId</th>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                {albums && albums.map(album => (
                  <tr key={album.id}>
                    <td>{album.id}</td>
                    <td>{album.userId}</td>
                    <td>{album.title}</td>
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
