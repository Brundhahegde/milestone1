import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

const GuideDetailContainer = styled(Container)`
  padding: 40px 0;
`;

const guidesData = [
  {
    id: '1',
    name: 'xxxxxx',
    bio: 'An experienced traveler and guide with a passion for exploring hidden gems.',
    expertise: 'Local culture, history, cuisine',
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      facebook: 'https://facebook.com/johndoe',
      instagram: 'https://instagram.com/johndoe'
    },
    profileImage: 'https://media.istockphoto.com/id/175515475/photo/mountains.jpg?s=612x612&w=0&k=20&c=e0TxdqpmQxgSYoHiB6F6x-SLsLbIeW7yM3weSBNyZ5U=',
    posts: [
      { title: 'Hidden Gems of Kudla', link: '/blog-posts/1' },
      { title: 'Exploring Local Cuisine', link: '/blog-posts/2' }
    ]
  },
  {
    id: '2',
    name: 'yyyyyyyy',
    bio: 'A nature enthusiast and adventure guide specializing in outdoor activities.',
    expertise: 'Hiking, wildlife, nature trails',
    socialMedia: {
      twitter: 'https://twitter.com/janesmith',
      facebook: 'https://facebook.com/janesmith',
      instagram: 'https://instagram.com/janesmith'
    },
    profileImage: 'https://media.istockphoto.com/id/944543546/photo/her-favourite-spot-to-trek-to.jpg?s=612x612&w=0&k=20&c=n2gGlK1vPbYO1MOCGRwRNn0vUm7seNOq852UmD4Wu0o=',
    posts: [
      { title: 'Top Hiking Trails in Kudla', link: '/blog-posts/3' },
      { title: 'Wildlife Adventures', link: '/blog-posts/4' }
    ]
  },
  // Add more guides as needed
];

const GuideDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const guide = guidesData.find((g) => g.id === id);

  if (!guide) {
    return <p>Guide not found</p>;
  }

  return (
    <GuideDetailContainer>
      <Card>
        <Card.Img variant="top" src={guide.profileImage} />
        <Card.Body>
          <Card.Title>{guide.name}</Card.Title>
          <Card.Text><strong>Bio:</strong> {guide.bio}</Card.Text>
          <Card.Text><strong>Expertise:</strong> {guide.expertise}</Card.Text>
          <Card.Text><strong>Social Media:</strong></Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item><a href={guide.socialMedia.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></ListGroup.Item>
            <ListGroup.Item><a href={guide.socialMedia.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></ListGroup.Item>
            <ListGroup.Item><a href={guide.socialMedia.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></ListGroup.Item>
          </ListGroup>
          <Card.Text className="mt-4"><strong>Posts and Recommendations:</strong></Card.Text>
          <ListGroup variant="flush">
            {guide.posts.map((post, index) => (
              <ListGroup.Item key={index}><a href={post.link}>{post.title}</a></ListGroup.Item>
            ))}
          </ListGroup>
          <Button variant="secondary" className="mt-4" onClick={() => navigate('/guide-profile')}>
            Back to Guides
          </Button>
        </Card.Body>
      </Card>
    </GuideDetailContainer>
  );
};

export default GuideDetail;
