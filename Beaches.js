import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Beaches = () => {
  return (
    <Container>
      <h2 className="my-4">Beautiful Beaches</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/1308239477/photo/a-dramatic-twilight-picture-of-the-padubidri-one-of-the-blue-flag-beach-destinations-in-the.jpg?s=612x612&w=0&k=20&c=eRaau1Ld28anOV96z4C_ScAa_e6TsO8zDc3xasCm2dY=" />
            <Card.Body>
              <Card.Title>Panambur Beach</Card.Title>
              <Card.Text>Of all the beaches in Mangalore, this is the cleanest beach and draws tourists from all the regions. While the sands are forever sparkling the water waves keep on playing.</Card.Text>
            </Card.Body>
          </Card>
          
        </Col>
        <Col md={4}>
        <Card>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/641291792/photo/beautiful-view-of-rocky-beach-of-someshwar.jpg?s=612x612&w=0&k=20&c=2gB8RCAv4JR9q8CFTU3BLiSFH1XSi8laKwFxHGAJ3ao=" />
            <Card.Body>
              <Card.Title>Tannirbhavi Beach</Card.Title>
              <Card.Text>Take a ferry from the Gurupura river and then you can witness this surreal land. Famed for its vast shores and spellbinding aura.</Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col md={4}>
        <Card>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/530953323/photo/shivling-at-someshwara-beach.jpg?s=612x612&w=0&k=20&c=SaRFGUEXX0JtHYs2FYwKiiRzC6V3aqoUWbskHu5r79I=" />
            <Card.Body>
              <Card.Title>Chitrapura Beach</Card.Title>
              <Card.Text>Tick off this beautiful sand track, from the list of Mangalore beaches, which are famed for the undaunted beauty. Visited by very less number of people.</Card.Text>
            </Card.Body>
          </Card>
          </Col>
    
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/1311503266/photo/beach-on-west-coast-of-india.jpg?s=612x612&w=0&k=20&c=bt27CYNCcjjxjltf7y2lsc653XHafdddJh2GFFCpQqQ=" />
            <Card.Body>
              <Card.Title>Kodical Beach</Card.Title>
              <Card.Text>Being one of the most striking beaches in Mangalore, Kodical beach exhibits a spectacular setting. This is place is a famous picnic spot and one can rejuvenate each and every quarter of the body with its enticing lure.</Card.Text>
            </Card.Body>
          </Card>
          
        </Col>
        
        <Col md={4}>
        <Card>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/1308555438/photo/a-mesmerizing-scene-of-a-beach-in-twilight-with-silhouetted-thatched-umbrella-made-in-palm.jpg?s=612x612&w=0&k=20&c=j4BPdBrQozIN6IyFLV31dH0KgmtHyfGzlfpQ8Ms0BUA=" />
            <Card.Body>
              <Card.Title>Surathkal Beach</Card.Title>
              <Card.Text>Be it the sunset or the sunrise, this beauty of this beach never ceases. From the sparkling white sands adorned with shells to the sparkling azure of the water, this place is indeed a treat to the soul.</Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col md={4}>
        <Card>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/1420263420/photo/mangalore-harbour-landscape-shot-with-fishing-boats-india.jpg?s=612x612&w=0&k=20&c=BTZ0wY4JIlsmkuCt-9MIZdrHsyzAD16EVrBGHDYjdqg=" />
            <Card.Body>
              <Card.Title>Ullal Beach</Card.Title>
              <Card.Text>All over covered with the coconut grooves this land of serenity is toured by a remarkable count of visitors. If you are looking for a perfect coastal experience, away from the buzzing horns of the city.</Card.Text>
            </Card.Body>
          </Card>
          </Col>
      </Row>
      
    </Container>
  );
};

export default Beaches;
