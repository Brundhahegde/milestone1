import React from 'react';
//import { useParams } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom'; 
import { Container, Button, Card } from 'react-bootstrap';
import styled from 'styled-components';

const BlogPostDetailContainer = styled(Container)`
  padding: 40px 0;
`;

const BlogPostDetail = () => {
 const { id } = useParams(); // Getting the post ID from the URL
  const navigate = useNavigate(); 
  // Dummy data for demonstration
  const blogPosts = [
    {
      id: '1',
      title: 'Discover the Beauty of Kudla',
      content: 'The contemporary city, heavily dotted with coconut plantations, has a deceptively rural appearance. It is a busy transshipment centre; ships must anchor 3 miles (5 km) offshore because of sandbars, but a deepwater port has been developed for the shipment of mineral ores, petroleum products, and other commodities as well as containers. Cashew nuts, coffee, and sandalwood are brought from the Mysuru and Kodagu (Coorg) regions. Rice, areca nuts, coir yarn (coconut fibre), fish, and cardamom are local products. ',
      image: 'https://media.istockphoto.com/id/644382346/photo/splendid-view-of-green-clean-mangalore.jpg?s=612x612&w=0&k=20&c=6JNHd152ApO1fMZndlDQmJykD-gGuk1mZjsV6fH0Wiw=',

    },
    {
      id: '2',
      title: 'A Culinary Journey through Kudla',
      content: 'Taste the delicious local cuisine of Kudla. From seafood to traditional vegetarian dishes, Kudla has something for every palate. The local cuisine features a rich blend of spices and flavors, making each dish a unique culinary experience. Don\'t miss out on trying the local seafood delicacies and traditional vegetarian meals.',
      image: 'https://media.istockphoto.com/id/1370419550/photo/one-portion-of-javanese-fried-chicken-ayam-kremes-the-chicken-crunchy-with-rice-and-sambal.jpg?s=612x612&w=0&k=20&c=IO9_UGtkE0GKXO7qXeaWRjkIgLaprXQtyjC9HavBX5I=',

    },
    {
      id: '3',
      title: 'Top Attractions in Kudla',
      content: 'Resplendent temples, pristine golden beaches and ancient mosques, tucked away in nature s splendour make up the grandeur of the port city of Mangaluru, in Karnataka. Situated at the confluence of the gushing Gurupura and Netravati rivers, Mangaluru is a quintessential tourist stopover that offers almost everything, from wellness retreats, yoga centres, art and culture hubs to quaint churches Nestled between the UNESCO World Heritage Site of the Western Ghats and the Arabian Sea, the city is bestowed with natural charms that leave tourists in awe it is also home to the countrys only 3D planetarium.',
image: 'https://media.istockphoto.com/id/1390014655/photo/view-of-second-entrance-gate-from-the-top-kavaledurga-fort-shimoga-karnataka-india.jpg?s=612x612&w=0&k=20&c=UdqI6pzdSbbPqKdhU01bIJhHN2pynBDJ_4t3ZX2abSE=',

    },
    {
      id: '4',
      title: 'Top Attractions in Kudla',
      description: 'Visit the top attractions in Kudla, including the famous Kudla Beach, the Kudla Fort, and many more must-see destinations.',
      image: 'https://media.istockphoto.com/id/1390014655/photo/view-of-second-entrance-gate-from-the-top-kavaledurga-fort-shimoga-karnataka-india.jpg?s=612x612&w=0&k=20&c=UdqI6pzdSbbPqKdhU01bIJhHN2pynBDJ_4t3ZX2abSE=',
    },
    {
      id: '5',
      title: 'Top Attractions in Kudla',
      description: 'Visit the top attractions in Kudla, including the famous Kudla Beach, the Kudla Fort, and many more must-see destinations.',
      image: 'https://media.istockphoto.com/id/1390014655/photo/view-of-second-entrance-gate-from-the-top-kavaledurga-fort-shimoga-karnataka-india.jpg?s=612x612&w=0&k=20&c=UdqI6pzdSbbPqKdhU01bIJhHN2pynBDJ_4t3ZX2abSE=',
    },
    {
      id: '6',
      title: 'Helloooooo world',
      description: 'hello worldweuryd8woeiueworioewrioewoipweopeoipoipioioewo9iew9oiewo9iewo9i',
      //image: 'https://media.istockphoto.com/id/1390014655/photo/view-of-second-entrance-gate-from-the-top-kavaledurga-fort-shimoga-karnataka-india.jpg?s=612x612&w=0&k=20&c=UdqI6pzdSbbPqKdhU01bIJhHN2pynBDJ_4t3ZX2abSE=',
    }
  ];

  // Find the blog post by ID
  const post = blogPosts.find((p) => p.id === id);

  return (
    <BlogPostDetailContainer>
      {post ? (
        <Card>
          <Card.Img variant="top" src={post.image} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.content}</Card.Text>
           
            <Button 
    variant="secondary"
    onClick={() => navigate('/blog-posts')} // Use navigate to go back
  >
    Back to Blog Posts
  </Button>
          </Card.Body>
        </Card>
      ) : (
        <p>Blog post not found.</p>
      )}
    </BlogPostDetailContainer>
  );
};

export default BlogPostDetail;
