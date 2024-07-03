
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import styled from 'styled-components';

// // Styled components
// const StoryContainer = styled(Container)`
//   padding: 60px 0;
//   background: url('https://media.istockphoto.com/id/1473266126/photo/exterior-facade-of-the-mangaluru-central-railway-station.jpg?s=612x612&w=0&k=20&c=Re3lgFhr_8SqND3zvfIYeMNrfRDG-lKpgPgr6Ozomco=') no-repeat center center;
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

// const Story2 = () => {
//   return (
//     <StoryContainer>
//       <Title>A Culinary Journey through Kudla</Title>
//       <Row>
//         <Col md={8} offset={{ md: 2 }}>
//           <Content>
//             Indulge in the rich flavors of Kudla’s cuisine, where every dish tells a story. From spicy street food to exquisite traditional meals, the local cuisine is a reflection of the region’s cultural heritage. Savor dishes like seafood delicacies and coconut-based curries, which are both flavorful and unique to Kudla. The vibrant food culture promises an unforgettable culinary adventure.
//           </Content>
//         </Col>
//       </Row>
//     </StoryContainer>
//   );
// };

// export default Story2;

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Styled components
const StoryContainer = styled(Container)`
  padding: 60px 0;
background-color:lightblue;
  //background: url('https://images.unsplash.com/photo-1543353074-c9d15d572e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZvbyUyMHBsYWNlJTIwYXN8ZW58MHx8fDE2NTg1NzQ1&ixlib=rb-1.2.1&q=80&w=1500') no-repeat center center;
  background-size: cover;
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

const Story2 = () => {
  const navigate = useNavigate();
  return (
    <StoryContainer>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <ContentWrapper>
            <Title>A Culinary Journey through Kudla</Title>
            <Content>
              Indulge in the rich flavors of Kudla’s cuisine, where every dish tells a story. From spicy street food to exquisite traditional meals, the local cuisine is a reflection of the region’s cultural heritage. Savor dishes like seafood delicacies and coconut-based curries, which are both flavorful and unique to Kudla. The vibrant food culture promises an unforgettable culinary adventure.
            </Content>
            <Button variant="light" onClick={() => navigate('/travel-stories')}>Back to Travel Stories</Button>
          </ContentWrapper>
        </Col>
      </Row>
    </StoryContainer>
  );
};

export default Story2;
