import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Preformatted from "../components/preformatted";
import SecureContent from "../components/secure-content";

const OmdbDetails = () => {
  const [movieDetails, setMovieDetails] = useState({})
  const [ourMovieDetails, setOurMovieDetails] = useState({})
  const url = 'http://www.omdbapi.com/?apikey=852159f0'
  const {imdbID} = useParams()
  const searchMovieByImdbID = async () => {
    const response = await axios.get(`${url}&i=${imdbID}`)
    setMovieDetails(response.data)
  }
  const searchOurMovieByImdbID = async () => {
    const response = await axios.get(`http://localhost:4000/api/movies/${imdbID}`)
    setOurMovieDetails(response.data)
  }
  useEffect(() => {
    searchMovieByImdbID()
    searchOurMovieByImdbID()
  }, [])

  const handleLike = async () => {
    const movie = {
      title: movieDetails.Title,
      poster: movieDetails.Poster,
      imdbID: movieDetails.imdbID
    }
    const response = await axios.post("http://localhost:4000/api/likes", movie)
    setOurMovieDetails(response.data)
  }

  return (
    <div>
      <h1>{movieDetails.Title}</h1>
      <img src={movieDetails.Poster} height={100}/>
      <p>
        {movieDetails.Plot}
      </p>

      <SecureContent>
        <button onClick={handleLike}>Like ({ourMovieDetails && ourMovieDetails.likes})</button>
      </SecureContent>
      <Preformatted obj={ourMovieDetails}/>
      <Preformatted obj={movieDetails}/>
    </div>
  );
};

export default OmdbDetails;