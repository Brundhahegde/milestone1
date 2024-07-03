// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import styled from 'styled-components';

// // Styled components
// const StoryContainer = styled(Container)`
//   padding: 60px 0;
//   background: url('https://media.istockphoto.com/id/1437357170/video/aerial-view-of-cars-on-a-road-in-mangalore-karnataka.jpg?s=640x640&k=20&c=sbO9npwmn9VtKR3s3FPXMSKu7Cols5Tu__TlqAROdRE=') no-repeat center center;
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

// const Story3 = () => {
//   return (
//     <StoryContainer>
//       <Title>The Vibrant Culture of Kudla</Title>
//       <Row>
//         <Col md={8} offset={{ md: 2 }}>
//           <Content>
//             Experience the rich cultural heritage of Kudla through its festivals, traditional dances, and local crafts. The vibrant cultural scene is a celebration of life and tradition, offering visitors a chance to participate in colorful festivals and observe traditional art forms. The local crafts, including intricate handmade jewelry and traditional textiles, provide a glimpse into the artistry and craftsmanship of the region.
//           </Content>
//         </Col>
//       </Row>
//     </StoryContainer>
//   );
// };

// export default Story3;

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Styled components
const StoryContainer = styled(Container)`
  padding: 60px 0;
  //background: url('https://images.unsplash.com/photo-1506748686214e9df14f94f2a3e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxlY29tZ2F6aW5lcyUyMGZlc3RpdmFsc3xlbnwxfHx8MTY1ODU3NDQ1&ixlib=rb-1.2.1&q=80&w=1500') no-repeat center center;
 background-color:lightblue;
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

const Story3 = () => {
  const navigate = useNavigate();
  return (
    <StoryContainer>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <ContentWrapper>
            <Title>The Vibrant Culture of Kudla</Title>
            <Content>
              Experience the rich cultural heritage of Kudla through its festivals, traditional dances, and local crafts. The vibrant cultural scene is a celebration of life and tradition, offering visitors a chance to participate in colorful festivals and observe traditional art forms. The local crafts, including intricate handmade jewelry and traditional textiles, provide a glimpse into the artistry and craftsmanship of the region.
            </Content>
            <Button variant="light" onClick={() => navigate('/travel-stories')}>Back to Travel Stories</Button>
          </ContentWrapper>
        </Col>
      </Row>
    </StoryContainer>
  );
};

export default Story3;
