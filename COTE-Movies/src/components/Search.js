import { useState } from 'react';
import styled from 'styled-components'
import MovieComponent from "./MovieComponent";
import axios from 'axios';
import MovieInfoComponent from "./MovieInfoComponent";
import Navbar from './Navbar';
import Footer from './Footer';

// API keys

//export const API_KEY = "k_4gvizmjv";
//export const API_KEY = "k_6npoyq2n";
//export const API_KEY = "k_9uxy48gg";
// export const API_KEY = "k_d5nc6sfs";
//export const API_KEY = "k_atxl86be";
//export const API_KEY = "k_e1mhcbum";
//export const API_KEY = "k_2xigzzuc";
export const API_KEY = "k_3dmz78gz";

var first_count = true;
// var search_header = "";

const Container = styled.div`
display: flex;
flex-direction: column;
background-color: #fff;
`;

const SearchBox = styled.div`
display: flex;
flex-direction: row;
padding: 100px;
background: url(https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg) no-repeat center center fixed;
height: 250px;
align-items: center;
z-index: 1000;
`;

const SearchIcon = styled.img`
 width: 60px;
 height: 60px;
 cursor: pointer;
 margin-left: 188px
`;

const SearchInput = styled.input`
color: white;
font-size: 30px;
font-weight: bolder;
width: 100%;
justify-content: space-evenly;
display: flex;
background-color: inherit;
border: none;
outline: none;
margin-left: 12px;

`;

const MovieListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
padding-top: 200px;
justify-content: space-evenly;
gap: 24px;
`;

const SearchHeader = styled.div`
margin-left: 20px;
text-transform: capitalize;
`;

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
      
    //   search_header = "Showing Results For: Most Popular Movies";

      updateMovieList(response.data.items)

    } else {
      const response = await axios.get(
          `https://imdb-api.com/API/AdvancedSearch/${API_KEY}/?title=${searchString}`
      )
    //   search_header = "Showing Results For: " + searchString;
      updateMovieList(response.data.results)
    }
  };

//   const searchHeadParams = async (search_header, length) => {
//     if (length > 0) {
//       return search_header;
//     }
//     else
//     {
//       return "";
//     }
//   }

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
    <Navbar />
        <SearchBox>
            <SearchIcon src="/icons8-search.png" />
            <SearchInput placeholder="Search here..."
                value={searchQuery}
                onChange={onTextChange} />
        </SearchBox>
    
    {/* <SearchHeader>
        <h2 class="results">{searchHeadParams(search_header)}</h2>
  </SearchHeader>* */}

    <Footer />
</Container>
      
  );

  

}

export default Home;