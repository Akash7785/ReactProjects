import { Box, Container } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MealDetailCard from './MealDetailCard';

const MealDetail = () => {
  const [mealData, setMealData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      console.log(data);
      setMealData(data.meals);
    };
    fetch();
  }, []);

  return (
    <div>
      <Box maxWidth={'100%'}>
        <Container maxWidth={'conatiner.xl'}>
          <MealDetailCard data={mealData[0]} />
        </Container>
      </Box>
    </div>
  );
};

export default MealDetail;
