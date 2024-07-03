// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import styled from 'styled-components';

// // Styled components
// const StoryContainer = styled(Container)`
//   padding: 60px 0;
//   background: url('https://media.istockphoto.com/id/641783952/photo/st-lawrence-minor-basilica-attur-karkala.jpg?s=612x612&w=0&k=20&c=iExyyg4cf94HXDBagLBVgLh1sK30SrO-UlOREU6BWHs=') no-repeat center center;
//   background-size: cover;
//   color: #fff;
// `;

// const Title = styled.h1`
//   text-align: center;
//   margin-bottom: 40px;
//   font-size: 3rem;
//   font-weight: bold;
// `;

// const Content = styled.p`
//   font-size: 1.2rem;
//   line-height: 1.6;
//   margin-top: 20px;
// `;

// const Story1 = () => {
//   return (
//     <StoryContainer>
//       <Title>Discovering the Serenity of Kudla</Title>
//       <Row>
//         <Col md={8} offset={{ md: 2 }}>
//           <Content>
//             Kudla offers a serene escape from the hustle and bustle of city life. From golden beaches to lush green hills, this destination promises tranquility and relaxation. The pristine beaches with their soft sands and gentle waves create an idyllic setting for unwinding. Enjoy breathtaking sunsets and tranquil evenings as you immerse yourself in the natural beauty of Kudla.
//           </Content>
//         </Col>
//       </Row>
//     </StoryContainer>
//   );
// };

// export default Story1;
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Styled components
const StoryContainer = styled(Container)`
  padding: 60px 0;
//background: url('https://media.istockphoto.com/id/1154755045/photo/water-with-air-bubbles.jpg?s=612x612&w=0&k=20&c=wRLawtqmcYHAfikEH5eyaIDhCVWFtdlHdv-m5Jg2lyg=') no-repeat center center;
  background-size: cover;
  background-color:lightblue;
  color: #fff;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 10px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  font-size: 3rem;
  font-weight: bold;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 20px;
`;

const Story1 = () => {
  const navigate = useNavigate();
  return (
    <StoryContainer>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <ContentWrapper>
            <Title>Discovering the Serenity of Kudla</Title>
            <Content>
              Kudla offers a serene escape from the hustle and bustle of city life. From golden beaches to lush green hills, this destination promises tranquility and relaxation. The pristine beaches with their soft sands and gentle waves create an idyllic setting for unwinding. Enjoy breathtaking sunsets and tranquil evenings as you immerse yourself in the natural beauty of Kudla.
            </Content>
            <Button variant="light" onClick={() => navigate('/travel-stories')}>Back to Travel Stories</Button>
          </ContentWrapper>
        </Col>
      </Row>
    </StoryContainer>
  );
};

export default Story1;
