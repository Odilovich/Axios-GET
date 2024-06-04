import "./style.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const index = () => {
  const [photos, setPhotos] = useState()
  const getPhotos = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
    setPhotos(response.data)
    
  }
  useEffect(()=>{
    getPhotos()
  },[])
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              {
                photos &&
                photos.map((photo) => (
                  <div className="card">
                    <div className="card-header">
                    <div>
                    <h1>id: ({photo.id})</h1>
                    <h1>{photo.title}</h1>
                    </div>
                    <img src={photo.thumbnailUrl} alt="" />
                    </div>
                    <div className="card-body">
                    <img src={photo.url} alt="" />
                    </div>
                    <div className="card-footer">
                    
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index
