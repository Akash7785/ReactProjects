import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
} from '@chakra-ui/react';
import FooterAlfabet from './FooterAlfabet';
import CateCard from './CateCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [category, setCategory] = useState([]);
  const [input, setInput] = useState();
  const navigate = useNavigate();

  const inputHandler = e => {
    setInput(e.target.value);
  };

  const searchData = () => {
    const item = input;
    navigate(`searched/${item}`);
  };

  useEffect(() => {
    try {
      const fetch = async () => {
        const { data } = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/categories.php'
        );
        setCategory(data.categories);
      };
      fetch();
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  return (
    <>
      <div>
        <Box maxWidth={'100%'}>
          <Image
            w={'100%'}
            h={'50vh'}
            objectFit={'cover'}
            // opacity={0.2}
            src="https://cdn.pixabay.com/photo/2017/09/23/23/22/tomato-2780424_1280.jpg"
            alt="banner"
          />
          <Container marginTop={'-13%'} maxWidth={'container.sm'}>
            <HStack>
              <Input
                onChange={inputHandler}
                bg={'whiteAlpha.900'}
                type="Search"
                placeholder="Search Items"
              />
              <Button onClick={searchData}>Search</Button>
            </HStack>
          </Container>
        </Box>
      </div>
      <Container marginTop={'11%'} maxW={'container.lg'}>
        <Heading textAlign={'center'}> Categories</Heading>
        <HStack wrap={'wrap'} justifyContent={'center'} m={2}>
          {category.map(i => (
            <CateCard
              img={i.strCategoryThumb}
              category={i.strCategory}
              desc={i.strCategoryDescription}
              key={i.idCategory}
              id={i.idCategory}
            />
          ))}
        </HStack>
      </Container>
      <FooterAlfabet />
    </>
  );
};

export default Home;
