import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Heritage = () => {
  return (
    <Container>
      <h2 className="my-4">Cultural Heritage</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/1306826771/photo/an-action-picture-of-kambala-race-where-a-pair-of-bullocks-are-tied-to-the-plough-and-made-to.jpg?s=612x612&w=0&k=20&c=WeNy0WWAJ9MSXiZrICGuPEkZglwDtSrKBSkGq2tvF2M=" />
            <Card.Body>
              <Card.Title>Kambala</Card.Title>
              <Card.Text>The Kambala racetrack is a slushy paddy field, and the buffaloes are driven by a whip-lashing farmer.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/1307894372/photo/hindu-priests-performing-ganesha-yagna-around-the-sacred-fire-pit-while-chanting-the-holy.jpg?s=612x612&w=0&k=20&c=dsru4Vev6kGnRd9Ge9WwAf96FjTWaUAqX_rf5YCYZMc=" />
            <Card.Body>
              <Card.Title>Pooja</Card.Title>
              <Card.Text> There are many popular and ancient temples like Kadri Shree Manjunatha Temple. </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/1429170504/photo/statue-of-yakshagana-dace-artist-isolated-on-black-background-yakshagana-is-a-traditional.jpg?s=612x612&w=0&k=20&c=o_4WvK0iGxgczsxFhb01pMISrt1Nqo2L89ysL9aKoHQ=" />
            <Card.Body>
              <Card.Title>yakshagana</Card.Title>
              <Card.Text> Yakshagana is a traditional folk dance form popular in Coastal Karnataka districts.  </Card.Text>
            </Card.Body>
          </Card>
        </Col>{/* Add more heritage details if needed */}
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://cdn1.byjus.com/wp-content/uploads/2020/04/bharatanatyam-250x193.jpeg" />
            <Card.Body>
              <Card.Title>Dance</Card.Title>
              <Card.Text>The Yakshagana is a night-long dance and drama performance practiced in Mangalore. </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://trekkerpedia.com/wp-content/uploads/2014/03/Bhootha-kola-tulunadu-Mangalore-Karnataka-3.jpg" />
            <Card.Body>
              <Card.Title>Dayivaradane</Card.Title>
              <Card.Text>Daivaradhane is a ritual that is part of the religious life. </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9muN8M3gD4QjfTLdH5_ULlwayWZoIhEwzug&s" />
            <Card.Body>
              <Card.Title>Tiger dance</Card.Title>
              <Card.Text>Mangalore is the heart of a distinct multilinguistic—cultural region </Card.Text>
            </Card.Body>
          </Card>
        </Col>{/* Add more heritage details if needed */}
      </Row>    </Container>
  );
};

export default Heritage;
