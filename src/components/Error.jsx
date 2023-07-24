import { Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';

const Error = () => {
  return (
    <Container maxHeight={'90vh'}>
      <VStack m={3}>
        <Heading fontSize={'3xl'}>No Data Found</Heading>
      </VStack>
    </Container>
  );
};

export default Error;
