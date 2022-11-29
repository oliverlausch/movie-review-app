import { useState } from 'react';
import styled from 'styled-components'
import MovieComponent from "./MovieComponent";
import axios from 'axios';
import MovieInfoComponent from "./MovieInfoComponent";
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css';


// API keys
const API_KEY_ARRAY = ["k_4gvizmjv", "k_6npoyq2n", "k_9uxy48gg", "k_d5nc6sfs", "k_atxl86be", "k_e1mhcbum", "k_2xigzzuc", "k_3dmz78gz"]
export const API_KEY = API_KEY_ARRAY[3];

var first_count = true;
//var search_header = "";

const Container = styled.div`
display: flex;
flex-direction: column;

background: url(https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg) no-repeat center center fixed;
`;

const SearchBox = styled.div`
display: flex;
flex-direction: row;
padding-top: 115px;
padding-bottom: 15px;
border-bottom: 10px;

background: rgba(0, 0, 0, 0.9);
// url(https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg) no-repeat center center fixed;
align-items: center;
z-index: 1000;
`;

const SearchIcon = styled.img`
 width: 60px;
 height: 60px;
 cursor: pointer;
 margin-left: 188px;
`;

const SearchInput = styled.input`
color: white;
font-size: 30px;
font-weight: bolder;
width: 100%;
justify-content: space-evenly;
display: flex;
background: rgba(0, 0, 0, 0.1);
border: none;
outline: none;
margin-left: 12px;

`;

const MovieListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
padding-top: 50px;
justify-content: space-evenly;
gap: 24px;
background-color: inherit;

`;

const H1Text = styled.text`
color: #f08080;
font-size: 70px;
font-style: italic;
background: black;
`;

//const SearchHeader = styled.div`
//margin-left: 20px;
//text-transform: capitalize;
//`;

function MostPopular() {
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
    onMovieSelect();
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
    <Navbar />
        <SearchBox>
            <SearchIcon src="/icons8-search.png" />
            <SearchInput placeholder ="Search here..."
                value={searchQuery}
                onChange={onTextChange} />
        </SearchBox>
    {/* </Header> */}

    
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
            : <H1Text>No search results were generated, please enter a new search.</H1Text>}

    </MovieListContainer>
    <Footer />
</Container>
      
  );

  

}

export default MostPopular;