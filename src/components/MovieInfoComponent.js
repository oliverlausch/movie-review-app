import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {API_KEY} from "../App";
import YoutubeEmbed from "./YoutubeEmbed";

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

const LiveChat = styled.div`
width: 50%;
padding: 20px 30px;
background: #708090;
justify-content: center;
`;

const CoverImage = styled.img`
object-fit: fill;
height: 352px;
margin-left: 10px;
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

const MovieInfoComponent = (props) => {

    // NOTE: The API key is ?i instead of ?s as we are searching for a particular imdbID rather than movie Title.
    // As shown in API documentation.

    const { selectedMovie } = props;
    const [movieInfo, setMovieInfo] = useState();

    // As selectedMovie is receiving the ImdbID, it needs to be a prop.
    //
    // Get the API via selectedMovie prop's imdbID and key, then
    // executive the response, and parse that response.data to setMovieInfo.
    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,)
        .then((response) => setMovieInfo(response.data)); 
    }, [selectedMovie]);

    // Assign the API content to the movie prop which
    // currently contains the type and index of search results!

    return (
    <><Container>
            <CoverImage src={movieInfo?.Poster} />
            <InfoColumn>
                <MovieName>{movieInfo?.Title}</MovieName>
                <MovieInfo>Type: {movieInfo?.Type}</MovieInfo>
                <MovieInfo>IMDB Rating: <span>{movieInfo?.imdbRating}</span></MovieInfo>
                <MovieInfo>Metascore: <span>{movieInfo?.Metascore}</span></MovieInfo>
                <MovieInfo>Year <span>{movieInfo?.Year}</span></MovieInfo>
                <MovieInfo>Language: <span>{movieInfo?.Language}</span></MovieInfo>
                <MovieInfo>Rated: <span>{movieInfo?.Rated}</span></MovieInfo>
                <MovieInfo>Released: <span>{movieInfo?.Released}</span></MovieInfo>
                <MovieInfo>Runtime: <span>{movieInfo?.Runtime}</span></MovieInfo>
                <MovieInfo>Director: <span>{movieInfo?.Director}</span></MovieInfo>
                <MovieInfo>Actors: <span>{movieInfo?.Actors}</span></MovieInfo>
                <MovieInfo>Genre: <span>{movieInfo?.Genre}</span></MovieInfo>
                <MovieInfo>Description: <span>{movieInfo?.Plot}</span></MovieInfo>
                <MovieInfo>Awards: <span>{movieInfo?.Awards}</span></MovieInfo>
                <MovieInfo>Box Office: <span>{movieInfo?.BoxOffice}</span></MovieInfo>
            </InfoColumn>
            <Close onClick={() => props.onMovieSelect()}>
                X
            </Close>
        </Container>

            <Trailer>
                <VideoContainer>
                    <div className="App">
                    <MovieName>{movieInfo?.Title} Trailer</MovieName>
                    <br></br>
                    <br></br>
                        <YoutubeEmbed embedId="Jvurpf91omw" />
                        
                    </div>
                </VideoContainer>

                <LiveChat>
                <div className="App">
                    <MovieName>LiveChat</MovieName>
                    <br></br>
                    <br></br>
                    </div>
                </LiveChat>
            </Trailer>
            </>
        );
        
};



export default MovieInfoComponent;