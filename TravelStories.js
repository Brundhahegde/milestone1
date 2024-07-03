import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Styled components
const StoriesContainer = styled(Container)`
  padding: 60px 0;
  background: url('https://media.istockphoto.com/id/1308239474/photo/a-twilight-scene-of-the-sunset-seen-through-the-fingers-of-an-young-lady-in-silhouette-at-a.jpg?s=612x612&w=0&k=20&c=qjZZ0B6CyuXZOchuvQZSOU8A-qmikVCKYmRRINGIqfU=') no-repeat center center;
  background-size: cover;
  color: #fff;
  min-height: 100vh;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  font-weight: bold;
  color: #f8f9fa;
`;

const StoryCard = styled(Card)`
  margin-bottom: 30px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 15px;
  overflow: hidden;
`;

const StoryCardImage = styled(Card.Img)`
  height: 200px;
  object-fit: cover;
`;

const StoryCardBody = styled(Card.Body)`
  padding: 20px;
  color: #e9ecef;
`;

const StoryCardTitle = styled(Card.Title)`
  font-size: 1.5rem;
  font-weight: bold;
`;

const StoryCardText = styled(Card.Text)`
  font-size: 1rem;
  line-height: 1.5;
`;

const ViewButton = styled(Button)`
  background-color: #28a745;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    background-color: #218838;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

// Full story data
const storyDetails = {
  '/story1': {
    title: 'Discovering the Serenity of Kudla',
    content: 'Kudla offers a serene escape from the hustle and bustle of city life. From golden beaches to lush green hills, this destination promises tranquility and relaxation. The pristine beaches with their soft sands and gentle waves create an idyllic setting for unwinding. Enjoy breathtaking sunsets and tranquil evenings as you immerse yourself in the natural beauty of Kudla.',
    image: 'https://media.istockphoto.com/id/641783952/photo/st-lawrence-minor-basilica-attur-karkala.jpg?s=612x612&w=0&k=20&c=iExyyg4cf94HXDBagLBVgLh1sK30SrO-UlOREU6BWHs=',
  },
  '/story2': {
    title: 'A Culinary Journey through Kudla',
    content: 'Indulge in the rich flavors of Kudla’s cuisine, where every dish tells a story. From spicy street food to exquisite traditional meals, the local cuisine is a reflection of the region’s cultural heritage. Savor dishes like seafood delicacies and coconut-based curries, which are both flavorful and unique to Kudla. The vibrant food culture promises an unforgettable culinary adventure.',
    image: 'https://media.istockphoto.com/id/1473266126/photo/exterior-facade-of-the-mangaluru-central-railway-station.jpg?s=612x612&w=0&k=20&c=Re3lgFhr_8SqND3zvfIYeMNrfRDG-lKpgPgr6Ozomco=',
  },
  '/story3': {
    title: 'The Vibrant Culture of Kudla',
    content: 'Experience the rich cultural heritage of Kudla through its festivals, traditional dances, and local crafts. The vibrant cultural scene is a celebration of life and tradition, offering visitors a chance to participate in colorful festivals and observe traditional art forms. The local crafts, including intricate handmade jewelry and traditional textiles, provide a glimpse into the artistry and craftsmanship of the region.',
    image: 'https://media.istockphoto.com/id/1437357170/video/aerial-view-of-cars-on-a-road-in-mangalore-karnataka.jpg?s=640x640&k=20&c=sbO9npwmn9VtKR3s3FPXMSKu7Cols5Tu__TlqAROdRE=',
  },
};

const TravelStories = () => {
  const navigate = useNavigate();

  const handleReadMore = (link) => {
    navigate(link);
  };

  return (
    <StoriesContainer>
      <Title>Travel Stories</Title>
      <Row>
        {Object.keys(storyDetails).map((key, index) => (
          <Col md={4} key={index}>
            <StoryCard>
              <StoryCardImage src={storyDetails[key].image} alt={storyDetails[key].title} />
              <StoryCardBody>
                <StoryCardTitle>{storyDetails[key].title}</StoryCardTitle>
                <StoryCardText>{storyDetails[key].content.substring(0, 100)}...</StoryCardText>
                <ViewButton onClick={() => handleReadMore(key)}>
                  Read More
                </ViewButton>
              </StoryCardBody>
            </StoryCard>
          </Col>
        ))}
      </Row>
    </StoriesContainer>
  );
};

export default TravelStories;
