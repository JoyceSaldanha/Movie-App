import React, { useEffect, useState } from 'react'

export default function Dog() {
    let [image,setImage] = useState([])
    let [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        fetchDogData();
    },[])

    let fetchDogData = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then((response) => {
            setImage(response);
            setIsLoading(false);
        })
    }

  return (
    <>
        <div className='imageContainer'>
            {isLoading ? 
            <img src='https://i.sstatic.net/kOnzy.gif' alt="loading"/>
            :
            <img src={image.message} alt="no" className='dogImage'/>
            } 
        </div>
    </>
  )
}
