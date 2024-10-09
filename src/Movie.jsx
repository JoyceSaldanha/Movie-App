import React, { useEffect, useState } from 'react'
import { data } from './Data/movieData';

export default function Movie() {
    let [movieData,setMovieData] = useState([]);

    useEffect(() => {
        getMovieData();
    },[])

    let getMovieData = () => {
        setMovieData(data);
    }

    let list = movieData.map((item,i) => {
        return(
            <div key={i} className='individualCard'>
                <img alt="no" src={item.Poster} className='pic'></img>
                <h4>{item.Title}</h4>
            </div>
        )
    })

  return (
    <>
        <h2>Movie App</h2>
        <div className='card-container'>
            {list}
        </div>
    </>
  )
}
