import {
  Box,
  Container,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
const CateDetail = () => {
  const data = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (data) {
      console.log('DATA  FROM PR---->', JSON.stringify(data.state));
    }
    // fetch();
  }, []);

  return (
    <>
      {data && (
        <DetailCard
          img={data.state.img}
          desc={data.state.desc}
          name={data.state.category}
        />
      )}
    </>
  );
};

const DetailCard = ({ name, desc, img }) => {
  return (
    <Container mt={5} h={['full']} maxW={'container.lg'}>
      <Stack direction={['column', 'row']} w={'full'}>
        <Image mt={[5]} src={img} />

        <VStack>
          <Heading>{name}</Heading>
          <Text textAlign={'justify'} letterSpacing={'widest'}>
            {desc}
          </Text>
        </VStack>
      </Stack>
    </Container>
  );
};

export default CateDetail;
{
  /* <Container bg={'yellowgreen'} h={'62vh'} maxW={'container.xl'}>
  <HStack justifyContent={'center'} >
    <Image src={img} />
    <VStack>
      <Heading>{name}</Heading>
      <Text letterSpacing={0.5}>{desc}</Text>
    </VStack>
  </HStack>
</Container> */
}
