import {
  Button,
  Container,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ img, category, desc, id }) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/mealDetail/${id}`);
  };

  return (
    <div>
      {/* <Link to={`/mealDetail`}> */}
      <VStack w={52} p={4} m={2} shadow={'lg'}>
        <Container>
          <Image w={'200px'} src={img} />
          <Heading noOfLines={1} textAlign={'center'} fontSize={'sm'} m={2}>
            {category}
          </Heading>
          <Text noOfLines={2}>{desc}</Text>
          <Button onClick={navigateHandler} color={'blue'}>
            View Recipie
          </Button>
        </Container>
      </VStack>
      {/* </Link> */}
    </div>
  );
};

export default Card;
