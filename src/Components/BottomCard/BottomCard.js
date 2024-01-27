import React, { useEffect, useState } from 'react'
import './BottomCard.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/Constants'
import YouTube from 'react-youtube'

function BottomCard(props) {

  const [movie, setMovie] = useState([])
  const[urlid,setUrld]=useState('')

  useEffect(() => {
    axios.get(props.url).then(response => {
      setMovie(response.data.results)

    }).catch(err => {
      alert('Network Error')
    })
  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    if(response.data.results.length!==0){
      setUrld(response.data.results[0])
    }else{
      alert("array is empty")
    }
    })
  }

  return (


    <div className='row'>
      <h2>{props.title}</h2>

      <div className="posters">

        {movie.map((obj) => {
        return  <img className={props.isSmall ?'smallPoster':'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="" onClick={()=>handleMovie(obj.id)} />
        })}

      </div>
    {urlid&& <YouTube videoId={urlid.key} opts={opts} />}
    </div>
  )
}

export default BottomCard