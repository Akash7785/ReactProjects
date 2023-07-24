import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import { Container, HStack, Heading } from '@chakra-ui/react';

const CateWise = () => {
  const [item, setItem] = useState([]);
  const { cate } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cate}`
      );
      setItem(data.meals);
    };
    fetchData();
  }, [cate]);

  return (
    <Container maxW={'container.lg'}>
      <Heading m={2} textAlign={'center'} fontSize={'2xl'}>
        Category {cate}
      </Heading>
      <HStack wrap={'wrap'} justifyContent={'center'}>
        {item.map(i => (
          <Card
            id={i.idMeal}
            key={i.idMeal}
            img={i.strMealThumb}
            category={i.strMeal}
          />
        ))}
      </HStack>
    </Container>
  );
};

export default CateWise;
