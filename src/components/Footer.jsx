import {
  Avatar,
  Text,
  Box,
  Stack,
  VStack,
  Heading,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import avtar from '../assets/avt1.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      bg="blackAlpha.900"
      color={'whiteAlpha.700'}
      minH={'50'}
      px={'16'}
      py={['16', '8']}
    >
      <Stack direction={['column', 'row']} h={'full'} alignItems={'center'}>
        <VStack w={'full'} alignItems={['center', 'flex-start']}>
          <Text fontWeight={'bold'}>About Us</Text>
          <Text
            fontSize={'sm'}
            letterSpacing={'widest'}
            textAlign={['center', 'left']}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quis
            numquam at totam vero enim deserunt necessitatibus magni voluptatum
            a.
          </Text>
        </VStack>
        <VStack
          // bg={'yellowgreen'}
          marginLeft={4}
          marginRight={4}
          w={'60%'}
          // justifyContent={'center'}
          alignItems={'flex-start'}
          //   bg={'yellowgreen'}
        >
          <Heading
            textAlign={['center']}
            mt={[5, 0]}
            marginBottom={3}
            fontSize={'lg'}
          >
            Connect me
          </Heading>
          <HStack>
            <LinkedInIcon />
            <a
              target="_blank"
              href="https://www.linkedin.com/in/akash-kumar-6a4576215/"
            >
              <Text>LinkedIn</Text>
            </a>
          </HStack>
          <HStack>
            <GitHubIcon />
            <a target="_blank" href="https://github.com/Akash7785">
              <Text>Github</Text>
            </a>
          </HStack>
          <HStack>
            <InstagramIcon />
            <a href="https://www.instagram.com/akash.883/">
              <Text>Instagram</Text>
            </a>
          </HStack>
        </VStack>
        <VStack>
          <Avatar
            size={'2xl'}
            src={avtar}
            boxSize={'28'}
            mr={'10%'}
            mt={['4', '0']}
          />
          <Text>Developer</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
