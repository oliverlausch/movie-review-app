import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API_KEY } from "../App.js";
import YoutubeEmbed from "./YoutubeEmbed";
import Dashboard from "./Dashboard"
import Store from "./Store"

const Container = styled.div`
display: flex;
flex-direction: row;
padding: 20px 30px;
justify-content: left;
border-bottom: 1px solid #969696;
`;

const VideoContainer = styled.div`
display: flex;
padding: 20px 30px;
flex-direction: column;
height: 100%;
width: 50%;
border-bottom: 1px solid #969696;
`;

const Trailer = styled.div`
display: flex;
flex-direction: right;
width: 100%;

`;

const DashboardStyle = styled.div`
width: 50%;
padding: 10px 30px;
background: #708090;
justify-content: center;
`;

const LiveChat = styled.div`
width: 50%;
padding: 10px 30px;
background: #708090;
justify-content: center;
`;


const CoverImage = styled.img`
display: flex;
object-fit: fill;
height: 452px;
margin-left: 10px;
align-items: center;
`;

const InfoColumn = styled.div`
display: flex;
width: 100%;
flex-direction: column;
margin: 20px;
`;

const MovieName = styled.span`
font-size: 22px;
font-weight: 600;
color: black;
margin: 15px 0;
white-space: nowrap;
text-transform: capitalize;
text-overflow: ellipsis;
overflow: hidden;
& span {
    opacity: 0.8;
}
`;

const MovieInfo = styled.span`

font-size: 16px;
font-weight: 500;
color: black;
overflow: hidden;
text-transform: capitalize;
text-overflow: ellipsis;
& span {
    opacity: 0.5;
}
`;

const Close = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: black;
  height: fit-content;
  padding: 8px;
  border-radius: 0%;
  cursor: pointer;
  opacity: 0.8;
`;

const Desc = styled.div`
 text-transform: none;
`;

const MovieInfoComponent = (props) => {

    // NOTE: The API key is ?i instead of ?s as we are searching for a particular imdbID rather than movie Title.
    // As shown in API documentation.

    const { selectedMovie } = props;
    // eslint-disable-next-line no-unused-vars
    
    const [movieInfo, setMovieInfo] = useState();

    const [trailerInfo, setTrailerInfo] = useState();

    // As selectedMovie is receiving the ImdbID, it needs to be a prop.
    //
    // Get the API via selectedMovie prop's imdbID and key, then
    // executive the response, and parse that response.data to setMovieInfo.
    useEffect(() => {

      const fetchMovieInfo = async () => {

        // Get Request
      await axios.get(`https://imdb-api.com/en/API/Title/${API_KEY}/${selectedMovie}`,).then((response) =>
      setMovieInfo(response.data));
        
      }; fetchMovieInfo() }, [selectedMovie]);

      useEffect(() => {

        const fetchTrailerInfo = async () => {
  
          // Get Request
        await axios.get(`https://imdb-api.com/en/API/YouTubeTrailer/${API_KEY}/${selectedMovie}`,).then((response) =>
        setTrailerInfo(response.data.videoId));
          
        }; fetchTrailerInfo() }, );

    return (
      
            <><Container>
        {movieInfo ? (
          <>            
            
            <CoverImage src={movieInfo?.image} alt={movieInfo?.title} />
            <InfoColumn>
            <MovieName><span>{movieInfo?.title}</span></MovieName>
              <MovieInfo>Type: <span>{movieInfo?.type}</span></MovieInfo>
              <MovieInfo>Director: <span>{movieInfo?.directors}</span></MovieInfo>
              <MovieInfo>IMDB Rating: <span>{movieInfo.imDbRating}</span></MovieInfo>
              <MovieInfo>Year: <span>{movieInfo.year}</span></MovieInfo>
              <MovieInfo>Released: <span>{movieInfo.releaseDate}</span></MovieInfo>
              <MovieInfo>Languages: <span>{movieInfo.languages}</span></MovieInfo>
              <MovieInfo>Metascore: <span>{movieInfo.metacriticRating}</span></MovieInfo>
              <MovieInfo>Rated: <span>{movieInfo?.contentRating}</span></MovieInfo>
              <MovieInfo>Runtime: <span>{movieInfo?.runtimeStr}</span></MovieInfo>
              <MovieInfo>Actors: <span>{movieInfo?.stars}</span></MovieInfo>
              <MovieInfo>Awards: <Desc><span>{movieInfo?.awards}</span></Desc></MovieInfo>
              <MovieInfo>Genre: <span>{movieInfo?.genres}</span></MovieInfo>
              <MovieInfo>Description: <Desc><span>{movieInfo?.plot}</span></Desc></MovieInfo>
            </InfoColumn>
            
            <Close onClick={() => props.onMovieSelect()}>X</Close>
          </>
        ) : (
          "Loading..."
        )}
      </Container><Trailer>
          <VideoContainer>
            <div className="App">
              <MovieName>{movieInfo?.title} Trailer</MovieName>
              <br></br>
              <br></br>
              <YoutubeEmbed embedId={trailerInfo} />

            </div>
          </VideoContainer>

          <LiveChat>
          <Store>
            <Dashboard/>
          </Store>
          
          
            
            <div className="App">
              <MovieName>LiveChat</MovieName>
              
              <br></br>
              <br></br>
            </div>
          </LiveChat>
        </Trailer></>
        
        )
          }
export default MovieInfoComponent