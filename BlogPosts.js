// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';

// const BlogPosts = () => {
//   return (
//     <Container>
//       <h2 className="my-4">Blog Posts</h2>
//       <Row>
//         <Col md={4}>
//           <Card>
//             <Card.Img variant="top" src="https://via.placeholder.com/300" />
//             <Card.Body>
//               <Card.Title>Blog Post Title 1</Card.Title>
//               <Card.Text>
//                 A brief description of the blog post.
//               </Card.Text>
//               <Card.Link href="#">Read More</Card.Link>
//             </Card.Body>
//           </Card>
//         </Col>
//         {/* Repeat for other blog posts */}
//       </Row>
//     </Container>
//   );
// };

// export default BlogPosts;

// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import styled from 'styled-components';

// const BlogContainer = styled(Container)`
//   padding: 40px 0;
// `;

// const BlogCard = styled(Card)`
//   margin-bottom: 20px;
//   &:hover {
//     transform: scale(1.02);
//     transition: transform 0.3s;
//   }
// `;

// const BlogImage = styled(Card.Img)`
//   height: 200px;
//   object-fit: cover;
// `;

// const BlogPosts = () => {
//   const blogPosts = [
//     {
//       id: 1,
//       title: 'Discover the Beauty of Kudla',
//       description: 'Explore the stunning landscapes and vibrant culture of Kudla. From beaches to temples, there is so much to see and experience.',
//       image: 'https://media.istockphoto.com/id/644382346/photo/splendid-view-of-green-clean-mangalore.jpg?s=612x612&w=0&k=20&c=6JNHd152ApO1fMZndlDQmJykD-gGuk1mZjsV6fH0Wiw=',
//     },
//     {
//       id: 2,
//       title: 'A Culinary Journey through Kudla',
//       description: 'Taste the delicious local cuisine of Kudla. From seafood to traditional vegetarian dishes, Kudla has something for every palate.',
//       image: 'https://media.istockphoto.com/id/1370419550/photo/one-portion-of-javanese-fried-chicken-ayam-kremes-the-chicken-crunchy-with-rice-and-sambal.jpg?s=612x612&w=0&k=20&c=IO9_UGtkE0GKXO7qXeaWRjkIgLaprXQtyjC9HavBX5I=',
//     },
//     {
//       id: 3,
//       title: 'Top Attractions in Kudla',
//       description: 'Visit the top attractions in Kudla, including the famous Kudla Beach, the Kudla Fort, and many more must-see destinations.',
//       image: 'https://media.istockphoto.com/id/1390014655/photo/view-of-second-entrance-gate-from-the-top-kavaledurga-fort-shimoga-karnataka-india.jpg?s=612x612&w=0&k=20&c=UdqI6pzdSbbPqKdhU01bIJhHN2pynBDJ_4t3ZX2abSE=',
//     },
//   ];

//   return (
//     <BlogContainer>
//       <h1 className="text-center mb-4">Blog Posts</h1>
//       <Row>
//         {blogPosts.map((post) => (
//           <Col md={4} key={post.id}>
//             <BlogCard>
//               <BlogImage variant="top" src={post.image} />
//               <Card.Body>
//                 <Card.Title>{post.title}</Card.Title>
//                 <Card.Text>{post.description}</Card.Text>
//                 <Button variant="primary">Read More</Button>
//               </Card.Body>
//             </BlogCard>
//           </Col>
//         ))}
//       </Row>
//     </BlogContainer>
//   );
// };

// export default BlogPosts;

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogContainer = styled(Container)`
  padding: 40px 0;
`;

const BlogCard = styled(Card)`
  margin-bottom: 20px;
  &:hover {
    transform: scale(1.02);
    transition: transform 0.3s;
  }
`;

const BlogImage = styled(Card.Img)`
  height: 200px;
  object-fit: cover;
`;

const BlogPosts = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'Discover the Beauty of Kudla',
      description: 'Explore the stunning landscapes and vibrant culture of Kudla. From beaches to temples, there is so much to see and experience.',
   image: 'https://media.istockphoto.com/id/644382346/photo/splendid-view-of-green-clean-mangalore.jpg?s=612x612&w=0&k=20&c=6JNHd152ApO1fMZndlDQmJykD-gGuk1mZjsV6fH0Wiw=',

    },
    {
      id: '2',
      title: 'A Culinary Journey through Kudla',
      description: 'Taste the delicious local cuisine of Kudla. From seafood to traditional vegetarian dishes.',
       image: 'https://media.istockphoto.com/id/1370419550/photo/one-portion-of-javanese-fried-chicken-ayam-kremes-the-chicken-crunchy-with-rice-and-sambal.jpg?s=612x612&w=0&k=20&c=IO9_UGtkE0GKXO7qXeaWRjkIgLaprXQtyjC9HavBX5I=',

    },
    {
      id: '3',
      title: 'Top Attractions in Kudla',
      description: 'Visit the top attractions in Kudla, including the famous Kudla Beach, the Kudla Fort, and many more must-see destinations.',
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
      title: 'Top Attractions in Kudla',
      description: 'Visit the top attractions in Kudla, including the famous Kudla Beach, the Kudla Fort, and many more must-see destinations.',
      image: 'https://media.istockphoto.com/id/1390014655/photo/view-of-second-entrance-gate-from-the-top-kavaledurga-fort-shimoga-karnataka-india.jpg?s=612x612&w=0&k=20&c=UdqI6pzdSbbPqKdhU01bIJhHN2pynBDJ_4t3ZX2abSE=',

    }
  ];

  return (
    <BlogContainer>
      <h1 className="text-center mb-4">Blog Posts</h1>
      <Row>
        {blogPosts.map((post) => (
          <Col md={4} key={post.id}>
            <BlogCard>
              <BlogImage variant="top" src={post.image} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Link to={`/blog-posts/${post.id}`}>
                  <Button variant="primary">Read More</Button>
                </Link>
              </Card.Body>
            </BlogCard>
          </Col>
        ))}
      </Row>
    </BlogContainer>
  );
};

export default BlogPosts;
