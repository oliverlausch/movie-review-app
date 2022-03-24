import { useState } from 'react';
import styled from 'styled-components'
import MovieComponent from "./components/MovieComponent";
import axios from 'axios';
import MovieInfoComponent from "./components/MovieInfoComponent";
//export const API_KEY = "7a9c166d";
export const API_KEY = "k_6npoyq2n";

const Container = styled.div`
display: flex;
flex-direction: column;
`;

const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: black;
color: white;
padding: 10px;
font-size: 25px;
font-weight: bold;
box-shadow: 0 3px 6px 0 #555;
`;

const AppName = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

const AppLogo = styled.img`
width: 48px;
height: 48px;
margin: 15px;
`;

const SearchBox = styled.div`
display: flex;
flex-direction: row;
padding: 10px 10px;
background-color: #fff;
border-radius: 6px;
margin-left: 20px;
margin-right: 15px;
width: 50%;
height: 25px;
align-items: center;
`;

const SearchIcon = styled.img`
 width: 32px;
 height: 30px;
 opacity: 40%;
 cursor: pointer;
`;

const SearchInput = styled.input`
color: black;
font-size: 20px;
font-weight: bolder;
width: 80%;
border: none;
outline: none;
margin-left: 12px;
text-transform: capitalize;
`;

const MovieListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
justify-content: space-evenly;
gap: 24px;
`;

function App() {
  const [searchQuery, updateSearchQuery] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);
  
  // IMDB API
  const API_KEY = "k_6npoyq2n";
  
  // OMDB API
  
  //const API_KEY = "7a9c166d";
  const [selectedMovie, onMovieSelect] = useState();
  
  // API call
  
  const fetchData = async (searchString) => {
      const response = await axios.get(

      // IMDB API
      
      //`https://imdb-api.com/en/API/SearchMovie/${API_KEY}/${searchString}`
      
      
      `https://imdb-api.com/API/AdvancedSearch/${API_KEY}/?title=${searchString}`
      

      // OMDB API
      //`https://www.omdbapi.com/?s=${searchString}}&apikey=${API_KEY}`
      )

      updateMovieList(response.data.Search)
  };




  // search query with timeout of .5 seconds so it doesn't
  // do an api call for every letter, but waits for
  // the user to finish typing.

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    updateTimeoutId(timeout);
  };
  
  
  
  
  
  return (
   

      <Container>
        <Header>
      <AppName>
        <AppLogo src="/VideocutLOGO.png" />
        React Movie App
      </AppName>
      <SearchBox>
        <SearchIcon src="/icons8-search.png" />
        <SearchInput placeholder="Search here..."
          value={searchQuery}
          onChange={onTextChange} />
      </SearchBox>

    </Header>
    {selectedMovie && (
    <MovieInfoComponent
       selectedMovie = {selectedMovie}
       onMovieSelect = {onMovieSelect}
    />)}
    
    <MovieListContainer>
    { 
    // Check if the movieList which is a variable obj,
    // marked by a "?" mark, has a length (Also marked by ? mark),
    // i.e. If there is no search results, the movieList will be 0, as will the length of it**
    // Then map the movieList via the map method, and return the MovieComponent.
    // If no movie is found, return the placeholder "No search results found!"  - else marked via :

    // movieList is a useState of array type.
    // movieList is mapped to movie obj and index,
    // Whereby movieList array is added to the MovieComponent class,
    // with it's key mapped to the returned index of an obj, and it's obj
    // value mapped to movie.




    }

        {movieList?.length
          ? movieList.map((movie, index) => (
          <MovieComponent
           key = {index}
           movie = {movie}
           onMovieSelect = {onMovieSelect} 
           />))
          : "No search results were generated, please enter a new search."}
        
        </MovieListContainer>
      </Container>
  );
}

export default App;