import React, { useEffect, useState } from 'react'
import { data } from './Data/movieData';
import { useNavigate } from 'react-router-dom';

export default function Movie() {
    let [movieData,setMovieData] = useState([]);
    let [searchValue,setSearchValue] = useState('');
    const navigate = useNavigate();

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

    let goToNext = () => {
        navigate('/dogs');
    }

    let search = () => {
        if(searchValue == "") {
            getMovieData();
        } else {
            let res = movieData.filter((item,i) => item.Title.toLowerCase().includes(searchValue.toLowerCase()))
            setMovieData(res);
        }
    }

  return (
    <>
        <button onClick={goToNext}>Next</button>
        <h2>Movie App</h2>

        <div className='search-container'>
            <input type="text" onChange={(e) => setSearchValue(e.target.value)}></input>
            <button onClick={search}>Search</button>
        </div>

        <div className='card-container'>
            {list}
        </div>
    </>
  )
}
