import styled from "styled-components";
import ChatApp from "./ChatApp"

const MovieContainer = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 280px;
box-shadow: 0 3px 10px 0 #aaa;
cursor: pointer;
background: #fff;
`;

const CoverImage = styled.img`
height: 362px;
object-fit: cover;
`;

const MovieName = styled.span`
font-size: 18px;
font-weight: 600;
color: black;
margin: 15px 0;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
`;

const MovieInfo = styled.span`
font-size: 16px;
font-weight: 500;
color: black;
text-transform: capitalize;
`;

const InfoColumn = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;




const MovieComponent = (props) => {

    // Assign the API content to the movie prop which
    // currently contains the type and index of search results!
   // const { Title, Year, imdbID, Type, Poster } = props.movie;

   //<MovieInfo>Type: {type}</MovieInfo>

    // removed id from const and onMoveSelect parse in props method!

    const { id, title, description, year, image } = props.movie;
    
    return <MovieContainer onClick={ () => props.onMovieSelect(id) }>
        <CoverImage src={image} />
            <MovieName>{title}</MovieName>
                <InfoColumn>
            <MovieInfo>Year: {description} {year}</MovieInfo>
            
            
        </InfoColumn>
    </MovieContainer>
}

export default MovieComponent