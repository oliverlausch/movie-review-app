import styled from 'styled-components';
import GetReview from './GetReview';
import PostReview from './PostReview';

const Container = styled.div`
display: flex;
flex-direction: column;
padding: 20px 20px;
justify-content: left;
border-bottom: 1px solid #969696;
background: rgba(0, 0, 0, 0.9);

`;

const ReviewComponent = () =>{
  
  return (
    <Container>
    <div>
    <PostReview/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div>
      {/*<GetReviews />*/}
    {<GetReview />}
    </div>
    </Container>
  )
}

export default ReviewComponent;