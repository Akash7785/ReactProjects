import {
  Container,
  HStack,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { nanoid } from 'nanoid';

const MealDetailCard = ({ data = [] }) => {
  const [newArray, setNewArray] = useState([]);
  const [loader, setLoader] = useState('true');

  let ingreArray = [];
  let arrkey = [];
  let arrVal = [];

  useEffect(() => {
    console.log('Reache');
    processData(data);
    console.log('Processed DATa', data);
    setLoader(false);
    setNewArray(ingreArray);
  }, [data]);

  const processData = detail => {
    for (let i = 1; i <= 10; i++) {
      if (
        detail[`strIngredient${i}`] === '' ||
        detail[`strIngredient${i}`] === null
      ) {
        continue;
      } else {
        arrkey.push(detail[`strIngredient${i}`]);
        arrVal.push(detail[`strMeasure${i}`]);
      }
    }
    arrkey.map((i, index) => {
      ingreArray.push({ mes: arrVal[index], inge: arrkey[index] });
    });
    console.log('Setted ingre', newArray);
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Heading
            textAlign={'center'}
            fontSize={['2xl', '3xl']}
            textTransform={'capitalize'}
          >
            Total Ingredients {newArray.length}
          </Heading>
          <HStack wrap={'wrap'}>
            {newArray.map(i => (
              <>
                <IngreCard
                  key={nanoid()}
                  measure={i.mes}
                  ingredients={i.inge}
                />
              </>
            ))}
          </HStack>
          <MealCard
            image={data.strMealThumb}
            mealName={data.strMeal}
            mealCategory={data.strCategory}
            instruction={data.strInstructions}
          />
        </>
      )}
    </>
  );
};

const MealCard = ({ image, mealName, mealCategory, instruction }) => (
  <Container p={4} maxW={['full', 'container.xl']}>
    <Stack direction={['column', 'row']}>
      <VStack>
        <Image m={4} src={image} minW={'200px'} />
        <Heading textAlign={'center'} fontSize={['lg', 'xl']}>
          {mealName}
        </Heading>
        <Heading textAlign={'center'} fontSize={['xsm', 'sm']}>
          {mealCategory}
        </Heading>
      </VStack>
      <VStack>
        <Heading fontSize={['2xl', '3xl']}>INSTRUCTION</Heading>
        <Text maxW={'90%'} textAlign={'justify'}>
          {instruction}
        </Text>
      </VStack>
    </Stack>
  </Container>
);

const IngreCard = ({ measure, ingredients, id }) => (
  <Container>
    <List spacing={3}>
      <ListItem>
        <HStack>
          <ListIcon color="green.500" />
          <Text textAlign={'center'}>{measure}</Text>
          <Text textAlign={'center'}>{ingredients}</Text>
        </HStack>
      </ListItem>
    </List>
  </Container>
);

export default MealDetailCard;
