import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import Preformatted from "../components/preformatted";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useProfile} from "../contexts/profile-context";

const OmdbSearch = () => {
  const {profile} = useProfile()
  const titleSearchRef = useRef()
  const {movieSearch} = useParams()
  const navigate = useNavigate()
  const [movies, setMovies] = useState([])
  const searchUrl = 'https://www.omdbapi.com/?apikey=852159f0'
  const searchByTitle = async () => {
    const searchString = titleSearchRef.current.value || movieSearch || 'batman'
    const response = await axios.get(`${searchUrl}&s=${searchString}`)
    setMovies(response.data.Search)
    titleSearchRef.current.value = searchString
    navigate(`/search/${searchString}`)
  }
  useEffect(() => {
    searchByTitle()
  }, [])
  return (
    <div>
      <h1>Omdb Search</h1>
      {profile.email}
      <ul className="list-group">
        <li className="list-group-item">
          <button
            onClick={searchByTitle}
            className="btn btn-primary float-end">Search</button>
          <input
            ref={titleSearchRef}
            className="form-control w-75"/>
        </li>
        {
          movies.map(movie =>
            <li className="list-group-item">
              <Link to={`/details/${movie.imdbID}`}>
              <img src={movie.Poster} className="me-2" height={30}/>
              {movie.Title}
              </Link>
            </li>
          )
        }
      </ul>
      <Preformatted obj={movies}/>
    </div>
  );
};

export default OmdbSearch;