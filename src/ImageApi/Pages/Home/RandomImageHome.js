import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { img_300 } from '../../../config/config';

const RandomImageHome = () => {
  const [imageName, setImageName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const handleImageNameChange = (e) => {
      setImageName(e.target.value);
  }

  let fetchImage = () => {
      setImgUrl(img_300);
      axios.get(`https://api.giphy.com/v1/gifs/translate?api_key=${process.env.REACT_APP_IMAGE_API_KEY}&s=${imageName}`)
      .then((response) => {
        console.log(response.data.data.images.original.url);
        setImgUrl(response.data.data.images.original.url);
      })
  };  


  useEffect(() => {
      //fetchImage();
  },[]);

  return (
    <div>
        <h2>RandomImageHome</h2>
        <TextField
            value={imageName}
            onChange={handleImageNameChange}
        />
        <Button onClick={fetchImage}>Fetch Image</Button>
        <img src={imgUrl} />
    </div>
  )
}

export default RandomImageHome