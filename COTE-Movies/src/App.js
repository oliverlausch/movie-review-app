import { useState } from 'react';
import styled from 'styled-components'
import MovieComponent from "./components/MovieComponent";
import axios from 'axios';
import MovieInfoComponent from "./components/MovieInfoComponent";



//export const API_KEY = "k_4gvizmjv";
//export const API_KEY = "k_6npoyq2n";
export const API_KEY = "k_9uxy48gg";
//export const API_KEY = "k_d5nc6sfs";
//export const API_KEY = "k_atxl86be";

var first_count = true;
var search_header = "";

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

const SearchHeader = styled.div`
margin-left: 20px;
text-transform: capitalize;
`;

const Login = styled.button`
display: flex;
flex - direction: row;
padding: 10px 0px;
border - radius: 6px;
background - color:  #ec3335;
height: 40px;
justify - content: space - around;
align - items: center;
color: black;
font - size: 20px;
font - weight: bolder;
width: 10 %;
text - transform: uppercase;
`;

const Register = styled.button`
display: flex;
flex - direction: row;
padding: 10px 0px;
border - radius: 6px;
background - color:  #ec3335;
height: 40px;
justify - content: space - around;
align - items: center;
color: black;
font - size: 20px;
font - weight: bolder;
width: 10 %;
text - transform: uppercase;
`;


function App() {
  const [searchQuery, updateSearchQuery] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();
  
  
  
  // API call
  
  const fetchData = async (searchString) => {
    if (searchString == null || searchString == "") {
      const response = await axios.get(
          `https://imdb-api.com/en/API/MostPopularMovies/${API_KEY}`
      )
      search_header = "Most Popular Movies";
      updateMovieList(response.data.items)

    } else {
      const response = await axios.get(
          `https://imdb-api.com/API/AdvancedSearch/${API_KEY}/?title=${searchString}`
      )
      search_header = searchString;
      updateMovieList(response.data.results)
    }
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
  const onTextLoad = (event) => {
    if (first_count) {
        onTextChange(event)
        first_count = false;
    }
};
  

  return (

    <Container onLoad={onTextLoad}>
    <Header>
        <AppName>
            <AppLogo src="/VideocutLOGO.png" />
            COTE-Movies
        </AppName>
        < Login > Login</Login >
        <Register>Register</Register>
        <SearchBox>
            <SearchIcon src="/icons8-search.png" />
            <SearchInput placeholder="Search here..."
                value={searchQuery}
                onChange={onTextChange} />
        </SearchBox>
    </Header>
    <SearchHeader>
        <h2 class="results">Showing Results For: {search_header}</h2>
    </SearchHeader>
    {selectedMovie && (
        <MovieInfoComponent
            selectedMovie={selectedMovie}
            onMovieSelect={onMovieSelect}
        />)}

    <MovieListContainer>

           {/* Check if the movieList which is a variable obj,
             marked by a "?" mark, has a length (Also marked by ? mark),
             i.e. If there is no search results, the movieList will be 0, as will the length of it**
             Then map the movieList via the map method, and return the MovieComponent.
             If no movie is found, return the placeholder "No search results found!"  - else marked via :

             movieList is a useState of array type.
             movieList is mapped to movie obj and index,
             Whereby movieList array is added to the MovieComponent class,
             with it's key mapped to the returned index of an obj, and it's obj
             value mapped to movie.*/}

        {movieList?.length
            ? movieList.map((movie, index) => (
                <MovieComponent
                    key={index}
                    movie={movie}
                    onMovieSelect={onMovieSelect}
                />))
            : "No search results were generated, please enter a new search."}

    </MovieListContainer>
</Container>
      
  );

  

}

export default App;