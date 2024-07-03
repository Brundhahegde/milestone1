// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Container, Card, Button } from 'react-bootstrap';
// import styled from 'styled-components';

// const DestinationDetailContainer = styled(Container)`
//   padding: 40px 0;
// `;

// const destinationsData = [
//   {
//     id: '1',
//     title: 'netravati peak',
//     image: 'https://media.istockphoto.com/id/644060616/photo/beautiful-and-serene-view-of-mullayanagiri-range-of-mountains.jpg?s=612x612&w=0&k=20&c=WjqgcxNd_-8vaZOPHfUnJnKgB-qLH2OAUXO4B_nLSLI=', // Replace with actual image URL
//     description: 'A beautiful mountain known for its cleanliness and vibrant atmosphere.',
//     details: 'The Netravati Trek is a popular trek among the trekking circles of southern India. It has become popular in recent times as an alternative to Kudremukh Peak.Netravati Trek is located in Chikmagalur district and is sandwiched between Samse and Belathangady.The Netravati Trek gets its name from the Netravathi River, which originates at the base of the Netravati peak.'
//   },
//   {
//     id: '2',
//     title: 'Manasa waterpark',
//     image: 'https://media.istockphoto.com/id/118265685/photo/pool.jpg?s=612x612&w=0&k=20&c=yp6Px22VWRu-5-VsFfL4xiq6Ik1AJT7hySZs7L-n_pU=', // Replace with actual image URL
//     description: 'Embrace joy, live fully.',
//     details: 'Nestled within the embrace of a sprawling 400-acre eco-tourism project lies the enchanting Manasa Water Park and Luxury Resort, established back in 2002. Spread across 15 acres of lush landscape, this oasis of leisure beckons amidst the scenic beauty of Mangalores pristine beaches soaked in sunshine, historic religious sites'
//   },
//   {
//     id: '3',
//     title: 'Kadri Manjunath Temple',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYxqIrnsb76ENj7_YmhSBdXK9tCM2WN3IqRQ&s', // Replace with actual image URL
//     description: 'An ancient temple with rich history and architecture.',
//     details: 'Kadri Manjunath Temple is an ancient temple situated in Kadri Hills, Mangalore. It dates back to the 10th or 11th century and is dedicated to Lord Shiva. The temple is built in the Vijayanagara style of architecture and features a beautiful bronze statue of Lord Manjunatha. It is a significant pilgrimage site and attracts numerous devotees.'
//   },
//   {
//     id: '4',
//     title: 'Kadri Manjunath Temple',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYxqIrnsb76ENj7_YmhSBdXK9tCM2WN3IqRQ&s', // Replace with actual image URL
//     description: 'An ancient temple with rich history and architecture.',
//     details: 'Kadri Manjunath Temple is an ancient temple situated in Kadri Hills, Mangalore. It dates back to the 10th or 11th century and is dedicated to Lord Shiva. The temple is built in the Vijayanagara style of architecture and features a beautiful bronze statue of Lord Manjunatha. It is a significant pilgrimage site and attracts numerous devotees.'
//   },
//   {
//     id: '5',
//     title: 'Kadri Manjunath Temple',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYxqIrnsb76ENj7_YmhSBdXK9tCM2WN3IqRQ&s', // Replace with actual image URL
//     description: 'An ancient temple with rich history and architecture.',
//     details: 'Kadri Manjunath Temple is an ancient temple situated in Kadri Hills, Mangalore. It dates back to the 10th or 11th century and is dedicated to Lord Shiva. The temple is built in the Vijayanagara style of architecture and features a beautiful bronze statue of Lord Manjunatha. It is a significant pilgrimage site and attracts numerous devotees.'
//   },
//   {
//     id: '6',
//     title: 'Kadri Manjunath Temple',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYxqIrnsb76ENj7_YmhSBdXK9tCM2WN3IqRQ&s', // Replace with actual image URL
//     description: 'An ancient temple with rich history and architecture.',
//     details: 'Kadri Manjunath Temple is an ancient temple situated in Kadri Hills, Mangalore. It dates back to the 10th or 11th century and is dedicated to Lord Shiva. The temple is built in the Vijayanagara style of architecture and features a beautiful bronze statue of Lord Manjunatha. It is a significant pilgrimage site and attracts numerous devotees.'
//   },
// ];

// const DestinationDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const destination = destinationsData.find((d) => d.id === id);

//   if (!destination) {
//     return <p>Destination not found</p>;
//   }

//   return (
//     <DestinationDetailContainer>
//       <Card>
//         <Card.Img variant="top" src={destination.image} />
//         <Card.Body>
//           <Card.Title>{destination.title}</Card.Title>
//           <Card.Text>{destination.details}</Card.Text>
//           <Button variant="secondary" onClick={() => navigate('/destinations')}>
//             Back to Destinations
//           </Button>
//         </Card.Body>
//       </Card>
//     </DestinationDetailContainer>
//   );
// };

// export default DestinationDetail;


import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';

const DestinationDetailContainer = styled(Container)`
  padding: 40px 0;
`;

const destinationsData = [
  {id: '1',
 title: 'netravati peak',
         image: 'https://media.istockphoto.com/id/644060616/photo/beautiful-and-serene-view-of-mullayanagiri-range-of-mountains.jpg?s=612x612&w=0&k=20&c=WjqgcxNd_-8vaZOPHfUnJnKgB-qLH2OAUXO4B_nLSLI=', // Replace with actual image URL
         description: 'A beautiful mountain known for its cleanliness and vibrant atmosphere.',
         details: 'The Netravati Trek is a popular trek among the trekking circles of southern India. It has become popular in recent times as an alternative to Kudremukh Peak.Netravati Trek is located in Chikmagalur district and is sandwiched between Samse and Belathangady.The Netravati Trek gets its name from the Netravathi River, which originates at the base of the Netravati peak.',
    
    mapLink: 'https://maps.app.goo.gl/2nzXnzzcK939Tjv86'
  },
  {
    id: '2',
    title: 'Manasa waterpark',
     image: 'https://media.istockphoto.com/id/118265685/photo/pool.jpg?s=612x612&w=0&k=20&c=yp6Px22VWRu-5-VsFfL4xiq6Ik1AJT7hySZs7L-n_pU=', // Replace with actual image URL
     description: 'Embrace joy, live fully.life is cool by the pool',
     details: 'Nestled within the embrace of a sprawling 400-acre eco-tourism project lies the enchanting Manasa Water Park and Luxury Resort, established back in 2002. Spread across 15 acres of lush landscape, this oasis of leisure beckons amidst the scenic beauty of Mangalores pristine beaches soaked in sunshine, historic religious sites',
    mapLink: 'https://maps.app.goo.gl/kXNZstACQ7WVKhL8A'
  },
  {
    id: '6',
     title: 'Kadri Manjunath Temple',
     image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQtmlvysATe9V2JBgV1JlPMXuZflhB7hMlfdpuKMpzyChoizKNzhLsqA_dnNO2Dz2AHuuPbNOGBe6V4BegB_cMrY-5yH1SbwekQ7hGZDg', // Replace with actual image URL
    description: 'An ancient temple with rich history and architecture.Uncovering the hidden gems of spirituality',     details: 'Kadri Manjunath Temple is an ancient temple situated in Kadri Hills, Mangalore. It dates back to the 10th or 11th century and is dedicated to Lord Shiva. The temple is built in the Vijayanagara style of architecture and features a beautiful bronze statue of Lord Manjunatha. It is a significant pilgrimage site and attracts numerous devotees.',
  mapLink: 'https://maps.app.goo.gl/DX8eETCEViPJgzMk6'
  },
  // Add more destinations as needed
];

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const destination = destinationsData.find((d) => d.id === id);

  if (!destination) {
    return <p>Destination not found</p>;
  }

  return (
    <DestinationDetailContainer>
      <Card>
        <Card.Img variant="top" src={destination.image} />
        <Card.Body>
          <Card.Title>{destination.title}</Card.Title>
          <Card.Text>{destination.details}</Card.Text>
          <Button variant="secondary" onClick={() => navigate('/destinations')}>
            Back to Destinations
          </Button>
          <Button variant="primary" href={destination.mapLink} target="_blank" className="ml-2">
            View on Google Maps
          </Button>
        </Card.Body>
      </Card>
    </DestinationDetailContainer>
  );
};

export default DestinationDetail;
