import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API_KEY } from "./Home";
import YoutubeEmbed from "./YoutubeEmbed";
import ReviewComponent from './ReviewComponent';
import ChatApp from "./ChatApp"



const Container = styled.div`
display: flex;
flex-direction: row;
padding-Top: 20px;
justify-content: left;
background: rgba(0, 0, 0, 0.9);

`;

const VideoContainer = styled.div`
display: flex;
padding: 10px 30px;
flex-direction: column;
height: 100%;
width: 100%;
border-bottom: 1px solid #969696;

`;

const Trailer = styled.div`
display: flex;
justify-content:left;
width: 100%;

background: rgba(0, 0, 0, 0.9);
border-top: 1px solid #969696;

`;

const ChatContainer = styled.div`
display: flex;

flex-direction: column;
color: white;
width: 100%;
border-bottom: 1px solid #969696;
border-left: 1px solid #969696;
`;


const CoverImage = styled.img`
display: flex;
object-fit: fill;
height: 452px;
margin-left: 10px;
align-items: center;
padding-Top: 20px;
opacity: 1.0;
`;



const InfoColumn = styled.div`
display: flex;
width: 100%;
flex-direction: column;
padding-Top: 10px;
margin: 20px;
`;

const MovieName = styled.span`
font-size: 30px;
font-weight: 600;
color: white;
margin: 15px 0;
white-space: nowrap;
text-transform: capitalize;
text-overflow: ellipsis;
overflow: hidden;
& span {
    opacity: 1;
}
`;

const MovieInfo = styled.span`

font-size: 16px;
padding: 5px;
font-weight: 500;
color: white;
overflow: hidden;
text-transform: capitalize;
text-overflow: ellipsis;
& span {
    font-style: italic;
}
`;

const Close = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: white;
  background: black;
  height: fit-content;
  padding-right: 50px;
  border-radius: 0%;
  cursor: pointer;
  
  
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

    // eslint-disable-next-line no-unused-vars
    const setData = (videoId) => {
      localStorage.setItem('VideoID', selectedMovie)
    }

    
    // As selectedMovie is receiving the ImdbID, it needs to be a prop.
    //
    // Get the API via selectedMovie prop's imdbID and key, then
    // executive the response, and parse that response.data to setMovieInfo.
    useEffect(() => {

      const fetchMovieInfo = async () => {

        // Get Request
      await axios.get(`https://imdb-api.com/en/API/Title/${API_KEY}/${selectedMovie}`,).then((response) =>
      setMovieInfo(response.data));
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      }; fetchMovieInfo() }, [selectedMovie]);

      useEffect(() => {

        const fetchTrailerInfo = async () => {
        
          // Get Request
        await axios.get(`https://imdb-api.com/en/API/YouTubeTrailer/${API_KEY}/${selectedMovie}`,).then((response) =>
        setTrailerInfo(response.data.videoId));
        setData()
        
        }; fetchTrailerInfo()}, );

      // useEffect(() => {
      //   const fetchChatApp = async () => {
      //     ChatApp();
      //   }; ChatApp()}, );
        
    return (
      
            <><><Container>
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
      </Container>
      <Trailer>
          <VideoContainer>
            
              <MovieName>{movieInfo?.title} Trailer</MovieName>
              <br></br>
              <br></br>
              <YoutubeEmbed embedId={trailerInfo} />

            
          </VideoContainer>

          <ChatContainer>
            
            <ChatApp selectMovie={selectedMovie} movieTitle={movieInfo?.title}/>
            
          
          
            
            
          </ChatContainer>
        </Trailer></>
        <ReviewComponent />
                 </>
        )
          }

export default MovieInfoComponent