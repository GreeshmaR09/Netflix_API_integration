import React, { useEffect, useState } from 'react'
import './BottomCard.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/Constants'
function BottomCard() {

  const [movie, setMovie] = useState([])

  useEffect(() => {
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response => {
      console.log(response.data)
      setMovie(response.data.results)

    }).catch(err => {
      alert('Network Error')
    })
  })
  return (

    
    <div className='row'>
      <h2>Netflix Originals</h2>

      <div className="posters">

        {movie.map((obj) => {
        return  <img className='poster' src={`${imageUrl + obj.backdrop_path}`} alt="" />
        })}

      </div>

    </div>
  )
}

export default BottomCard