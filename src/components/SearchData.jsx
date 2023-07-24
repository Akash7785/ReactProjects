import { Container, HStack, Heading } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';
import Error from './Error';

const SearchData = () => {
  const { item } = useParams();
  const [search, setSearch] = useState([]);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    const fetchSearch = async () => {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`
      );
      if (data.meals === null) {
        setSearch([]);
        setNoData(true);
      } else {
        setSearch(data.meals);
      }
    };
    fetchSearch();
  }, []);
  return (
    <Container maxW={'container.lg'}>
      {noData ? (
        <Error />
      ) : (
        <>
          <Heading
            textTransform={'uppercase'}
            m={2}
            textAlign={'center'}
            fontSize={'2xl'}
          >
            {item}
          </Heading>
          <HStack wrap={'wrap'} justifyContent={'center'}>
            {search.map(i => (
              <Card
                id={i.idMeal}
                key={i.idMeal}
                img={i.strMealThumb}
                category={i.strMeal}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default SearchData;
