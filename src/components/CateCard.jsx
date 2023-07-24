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

const CateCard = ({ img, category, desc, id }) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/cateDetail/${id}`, {
      state: { img: img, category: category, desc: desc, id: id },
    });
  };

  return (
    <div>
      <VStack w={52} p={4} m={2} shadow={'lg'}>
        <Container>
          <Image w={'200px'} src={img} />
          <Heading noOfLines={1} textAlign={'center'} fontSize={'sm'} m={2}>
            {category}
          </Heading>
          <Text noOfLines={2}>{desc}</Text>
          <Button onClick={navigateHandler} color={'blue'}>
            Know More
          </Button>
        </Container>
      </VStack>
    </div>
  );
};

export default CateCard;
