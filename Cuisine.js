import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Cuisine = () => {
  return (
    <Container>
      <h2 className="my-4">Delicious Cuisine</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://qph.cf2.quoracdn.net/main-qimg-87f56f4e9dfc4f3156f049df0cdf349c-lq" />
            <Card.Body>
              <Card.Title>Buns</Card.Title>
              <Card.Text> It is a very popular breakfast made of Maida in a unique way and fried in hot coconut oil. It is served with sambar and chutney.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://myfoodstory.com/wp-content/uploads/2015/11/chicken-kori-rotti-mangalorean-chicken-curry-recipe.1024x1024-1024x617.jpg" />
            <Card.Body>
              <Card.Title>Kori Roti</Card.Title>
              <Card.Text>It is one of the most important Mangalorean dishes that you should try when you are visiting the coastal city of Karnataka.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://images.slurrp.com/prod/articles/l5jbovtalrg.webp" />
            <Card.Body>
              <Card.Title>Neer Dose</Card.Title>
              <Card.Text>The soft texture makes it worth trying, and you can have a delectable meal because it is served with coconut chutney that makes you wanting for more.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Add more cuisine details if needed */}
      </Row>
      <Row>
        <Col md={4}>
          <Card>

            <Card.Img variant="top" src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20200825162617/iStock-980462262.jpg" />
            <Card.Body>
              <Card.Title>Fish</Card.Title>
              <Card.Text>The fish is basically coated in a semolina mixture, and then it is pan-fried until golden brown it is basically served with sliced onions and lemon wedges.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPfOpU7h5iotdkY0sCCBFuLeZaUvczwGIwgg&s" />
            <Card.Body>
              <Card.Title>Golibage</Card.Title>
              <Card.Text>it is a prominent snack in Mangalore that you should try, and the best part about trying the snack is that it is crispy, fluffy, and slightly tangy. The dish is made from a batter of curd.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzNBnrzEQUrk5IOX4m1BBbzM_e1aZf4f77Xl2e3tPTegoNAyHYe9h7Pm8GQ20Ds8kvp-s&usqp=CAU" />
            <Card.Body>
              <Card.Title>Patrode</Card.Title>
              <Card.Text>Patrode is a traditional Mangalorean dish that is made from Arabikepatte. You must try it if you are in Mangalore. It is stuffed with a spicy lentil mixture.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Add more cuisine details if needed */}
      </Row>
    </Container>
  );
};

export default Cuisine;
