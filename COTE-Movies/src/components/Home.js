import { useState } from 'react';
import styled from 'styled-components'
import MovieComponent from "./MovieComponent";
import axios from 'axios';
import MovieInfoComponent from "./MovieInfoComponent";

// API keys

//export const API_KEY = "k_4gvizmjv";
//export const API_KEY = "k_6npoyq2n";
//export const API_KEY = "k_9uxy48gg";
//export const API_KEY = "k_d5nc6sfs";
//export const API_KEY = "k_atxl86be";
export const API_KEY = "k_e1mhcbum";
//export const API_KEY = "k_2xigzzuc";

var first_count = true;
//var search_header = "";

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
padding-Top: 110px;
font-size: 25px;
font-weight: ;
box-shadow: 0 3px 6px 0 #555;
position: fixed;
width: 100%;
z-index:9998;
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
padding-top: 175px;
justify-content: space-evenly;
gap: 24px;
`;

//const SearchHeader = styled.div`
//margin-left: 20px;
//text-transform: capitalize;
//`;

function Home() {
  const [searchQuery, updateSearchQuery] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();
  
  
  
  // API call
  
  const fetchData = async (searchString) => {
    // eslint-disable-next-line eqeqeq
    if (searchString == null || searchString == "") {
      const response = await axios.get(
          `https://imdb-api.com/en/API/MostPopularMovies/${API_KEY}`
      )
      
      //search_header = "Showing Results For: Most Popular Movies";
      updateMovieList(response.data.items)

    } else {
      const response = await axios.get(
          `https://imdb-api.com/API/AdvancedSearch/${API_KEY}/?title=${searchString}`
      )
      //search_header = "Showing Results For: " + searchString;
      updateMovieList(response.data.results)
    }
  };

  /*const searchHeadParams = async (search_header, length) => {
    if (length > 0) {
      return search_header;
    }
    else
    {
      return "";
    }
  }*/

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

        <SearchBox>
            <SearchIcon src="/icons8-search.png" />
            <SearchInput placeholder="Search here..."
                value={searchQuery}
                onChange={onTextChange} />
        </SearchBox>
    </Header>

    
    {/*<SearchHeader>
        <h2 class="results">{searchHeadParams(search_header)}</h2>
  </SearchHeader>*/}

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
            : <h1>No search results were generated, please enter a new search.</h1>}

    </MovieListContainer>
</Container>
      
  );

  

}

export default Home;