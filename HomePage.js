// import React from 'react';
// import { Navbar, Nav, Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
// import styled from 'styled-components';

// const HeroSection = styled.div`
//   background: url('https://img.traveltriangle.com/blog/wp-content/uploads/2024/05/Trekking-Near-Mangalore-og.jpg') no-repeat center center;
//   background-size: cover;
//   height: 400px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
//   padding: 0 20px;  /* Added padding to ensure the text doesn't touch the edges */
// `;

// const FullWidthCarousel = styled(Carousel)`
//   width: 100%;
//   .carousel-item {
//     height: 400px;
//     img {
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//     }
//   }
// `;

// const ContentSection = styled.div`
//   padding: 20px 0;
// `;

// const HomePage = () => {
//   return (
//     <>
//       <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
//         <Container>
//           <Navbar.Brand href="/home">Namma Kudla</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="/home">Home</Nav.Link>
//               <Nav.Link href="/blog-posts">Blog Posts</Nav.Link>
//               <Nav.Link href="/destinations">Destinations</Nav.Link>
//               <Nav.Link href="/guide-profile">Guide Profiles</Nav.Link>
//               <Nav.Link href="/contact-guide">Contact Guide</Nav.Link>
//               <Nav.Link href="/feedback">Feedback</Nav.Link>
//               <Nav.Link href="/travel-stories">Travel Stories</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       <HeroSection>
//         <h1>Welcome to Namma Kudla</h1>
//       </HeroSection>
//       <FullWidthCarousel className="my-4">
//         <Carousel.Item>
//           <img
//             className="d-block w-90"
//             src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/318491552.jpg?k=8c2e87b6170e18e075b3fe62ed72d17c204b29d30cba14d0d6f8e9a3f2bbccaa&o=&hp=1"
//             alt="Panambur Beach"
//           />
//           <Carousel.Caption>
//             <h3>Panambur Beach</h3>
//             <p>Enjoy the beautiful sunsets and water activities at Panambur Beach.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-90"
//             src="https://media1.thrillophilia.com/filestore/inc5bf48lqmspb6wa435f6qoif1o_1553499746_7.jpg?w=400&dpr=2"
//             alt="Mangaladevi Temple"
//           />
//           <Carousel.Caption>
//             <h3>Mangaladevi Temple</h3>
//             <p>Visit the historic and spiritual Mangaladevi Temple.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-90"
//             src="https://www.mangaloretoday.com/contentfiles/2016/sep/Aloysius%2015%20oct%2016.jpg"
//             alt="St. Aloysius Chapel"
//           />
//           <Carousel.Caption>
//             <h3>St. Aloysius Chapel</h3>
//             <p>Explore the stunning frescoes at St. Aloysius Chapel.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </FullWidthCarousel>
//       <Container>
//         <ContentSection>
//           <Row className="my-4">
//             <Col>
//               <h2><center>Welcome to Kudla</center></h2>
//               <p><b>
//                 Explore the cultural heritage, natural beauty, and unique attractions of Kudla. From stunning beaches to
//                 delicious cuisine, there's something for everyone.
//               </b></p>
//             </Col>
//           </Row>
//           <Row className="my-4">
//             <Col md={4}>
//               <Card>
//                 <Card.Img variant="top" src="https://c0.wallpaperflare.com/preview/907/382/408/india-mangaluru-panambur-beach-evening.jpg" />
//                 <Card.Body>
//                   <Card.Title>Beautiful Beaches</Card.Title>
//                   <Card.Text>Experience the serene beaches of Kudla with golden sands and clear waters.</Card.Text>
//                   <Button variant="primary">Learn More</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card>
//                 <Card.Img variant="top" src="https://qph.cf2.quoracdn.net/main-qimg-37e111ffbd54c9ae57c6cb90536931bf-pjlq" />
//                 <Card.Body>
//                   <Card.Title>Cultural Heritage</Card.Title>
//                   <Card.Text>Discover the rich cultural heritage and traditions of Kudla.</Card.Text>
//                   <Button variant="primary">Learn More</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card>
//                 <Card.Img variant="top" src="https://curlytales.com/wp-content/uploads/2019/08/Feature-Image-Maravanthe-e1565080856787.jpg" />
//                 <Card.Body>
//                   <Card.Title>Delicious Cuisine</Card.Title>
//                   <Card.Text>Indulge in the delicious local cuisine that Kudla has to offer.</Card.Text>
//                   <Button variant="primary">Learn More</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </ContentSection>
//       </Container>
//     </>
//   );
// };

// export default HomePage;


import React from 'react';
import {Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled components
const HeroSection = styled.div`
  background: url('https://img.traveltriangle.com/blog/wp-content/uploads/2024/05/Trekking-Near-Mangalore-og.jpg') no-repeat center center;
  background-size: cover;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  padding: 0 20px;  /* Added padding to ensure the text doesn't touch the edges */
`;

const FullWidthCarousel = styled(Carousel)`
  width: 100%;
  .carousel-item {
    height: 500px;  /* Adjusted height to ensure quality */
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;  /* Ensures the image covers the carousel area */
    }
  }
`;

const ContentSection = styled.div`
  padding: 20px 0;
`;

const HomePage = () => {
  return (
    <>
      {/* <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/home">Namma Kudla</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/blog-posts">Blog Posts</Nav.Link>
              <Nav.Link href="/destinations">Destinations</Nav.Link>
              <Nav.Link href="/guide-profile">Guide Profiles</Nav.Link>
              <Nav.Link href="/contact-guide">Contact Guide</Nav.Link>
              <Nav.Link href="/feedback">Feedback</Nav.Link>
              <Nav.Link href="/travel-stories">Travel Stories</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <HeroSection>
        <h1>Welcome to Namma Kudla</h1>
      </HeroSection>
      <FullWidthCarousel className="my-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/318491552.jpg?k=8c2e87b6170e18e075b3fe62ed72d17c204b29d30cba14d0d6f8e9a3f2bbccaa&o=&hp=1"
            alt="Panambur Beach"
          />
          <Carousel.Caption>
            <h3>Panambur Beach</h3>
            <p>Enjoy the beautiful sunsets and water activities at Panambur Beach.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media1.thrillophilia.com/filestore/inc5bf48lqmspb6wa435f6qoif1o_1553499746_7.jpg?w=400&dpr=2"
            alt="Mangaladevi Temple"
          />
          <Carousel.Caption>
            <h3>Mangaladevi Temple</h3>
            <p>Visit the historic and spiritual Mangaladevi Temple.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.mangaloretoday.com/contentfiles/2016/sep/Aloysius%2015%20oct%2016.jpg"
            alt="St. Aloysius Chapel"
          />
          <Carousel.Caption>
            <h3>St. Aloysius Chapel</h3>
            <p>Explore the stunning frescoes at St. Aloysius Chapel.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </FullWidthCarousel>
      <Container>
        <ContentSection>
          <Row className="my-4">
            <Col>
              <h2><center>Welcome to Kudla</center></h2>
              <p><b>
                Explore the cultural heritage, natural beauty, and unique attractions of Kudla. From stunning beaches to
                delicious cuisine, there's something for everyone.
              </b></p>
            </Col>
          </Row>
          <Row className="my-4">
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://c0.wallpaperflare.com/preview/907/382/408/india-mangaluru-panambur-beach-evening.jpg" />
                <Card.Body>
                  <Card.Title>Beautiful Beaches</Card.Title>
                  <Card.Text>Experience the serene beaches of Kudla with golden sands and clear waters.</Card.Text>
                  <Button as={Link} to="/beaches" variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://qph.cf2.quoracdn.net/main-qimg-37e111ffbd54c9ae57c6cb90536931bf-pjlq" />
                <Card.Body>
                  <Card.Title>Cultural Heritage</Card.Title>
                  <Card.Text>Discover the rich cultural heritage and traditions of Kudla.</Card.Text>
                  <Button as={Link} to="/heritage" variant="primary">Learn More</Button>
                  </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://curlytales.com/wp-content/uploads/2019/08/Feature-Image-Maravanthe-e1565080856787.jpg" />
                <Card.Body>
                  <Card.Title>Delicious Cuisine</Card.Title>
                  <Card.Text>Indulge in the delicious local cuisine that Kudla has to offer.</Card.Text>
                  <Button as={Link} to="/cuisine" variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </ContentSection>
      </Container>
    </>
  );
};

export default HomePage;
