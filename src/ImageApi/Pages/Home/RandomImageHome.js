import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { noPicture, loadingImage } from "../../../config/config";
import "./RandomImagesHome.css";

const RandomImageHome = () => {
  const [imageName, setImageName] = useState("");
  const [buttonText, setButtonText] = useState("FETCH IMAGE");
  const [imgUrl, setImgUrl] = useState("");
  const handleImageNameChange = (e) => {
    setImageName(e.target.value);
  };

  let fetchImage = () => {
    setImgUrl(loadingImage);
    setButtonText("Please Wait...");
    axios
      .get(
        `https://api.giphy.com/v1/gifs/translate?api_key=${process.env.REACT_APP_IMAGE_API_KEY}&s=${imageName}`
      )
      .then((response) => {
        console.log(response.data.data.images.original.url);
        setImgUrl(response.data.data.images.original.url);
        setButtonText("Fetch New Image");
      });
  };

  useEffect(() => {
    setImgUrl(noPicture);
    //fetchImage();
  }, []);

  return (
    <div className="randomImageContainer">
      <div className="pageHeading grid-item">
        <h2>Random Images</h2>
      </div>
      <div className="randomImageNameInput grid-item">
        <TextField value={imageName} onChange={handleImageNameChange} />
      </div>
      <div className="randomImageSearchButton grid-item">
        <Button variant="contained" onClick={fetchImage}>
          {buttonText}
        </Button>
      </div>
      <div className="randomImageDisplay grid-item">
        <img src={imgUrl} alt="search" />
      </div>
      <div className="randomImageFooter grid-item">
        <a href="https://giphy.com/">Powered by: Giphy.com</a>
      </div>
    </div>
  );
};

export default RandomImageHome;
