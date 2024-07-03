import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const guidesData = [
  {
    id: '1',
    name: 'xxxx',
    bio: 'An experienced traveler and guide with a passion for exploring. exploring hidden gemsa passion for exploring hidden gems',
    expertise: 'Local culture, history, cuisine',
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      facebook: 'https://facebook.com/johndoe',
      instagram: 'https://instagram.com/johndoe'
    },
    profileImage: 'https://media.istockphoto.com/id/175515475/photo/mountains.jpg?s=612x612&w=0&k=20&c=e0TxdqpmQxgSYoHiB6F6x-SLsLbIeW7yM3weSBNyZ5U='
  },
  {
    id: '2',
    name: 'yyyyy',
    bio: 'A nature enthusiast and adventure guide specializing in outdoor activities.and adventure guide specializing n outdoor activities.n outdoor activities.',
    expertise: 'Hiking, wildlife, nature trails',
    socialMedia: {
      twitter: 'https://twitter.com/janesmith',
      facebook: 'https://facebook.com/janesmith',
      instagram: 'https://instagram.com/janesmith'
    },
    profileImage: 'https://media.istockphoto.com/id/944543546/photo/her-favourite-spot-to-trek-to.jpg?s=612x612&w=0&k=20&c=n2gGlK1vPbYO1MOCGRwRNn0vUm7seNOq852UmD4Wu0o='
  },
  // Add more guides as needed
];

const GuideProfile = () => {
  return (
    <Container>
      <h2 className="my-4">Our Guides</h2>
      <Row>
        {guidesData.map((guide) => (
          <Col md={4} key={guide.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={guide.profileImage} />
              <Card.Body>
                <Card.Title>{guide.name}</Card.Title>
                <Card.Text>{guide.bio}</Card.Text>
                <Link to={`/guide-profile/${guide.id}`}>
                  <Button variant="primary">View Profile</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GuideProfile;

