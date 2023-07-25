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
  AspectRatio,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const MealDetailCard = ({ data = [] }) => {
  const [newArray] = useState([]);

  const [loader, setLoader] = useState('true');
  // const url = data.strYoutube;
  // console.log(url);
  // const str = url.split('=');
  // const vid = str[str.length - 1];
  // console.log(vid);

  // console.log(data);

  let arrkey = [];
  let arrVal = [];

  useEffect(() => {
    // console.log('Reache');
    processData(data);
    setLoader(false);
  }, [data]);

  const processData = detail => {
    for (let i = 1; i <= 20; i++) {
      if (
        detail[`strIngredient${i}`] == '' ||
        detail[`strIngredient${i}`] == null
      ) {
        continue;
      } else {
        arrkey.push(detail[`strIngredient${i}`]);
        arrVal.push(detail[`strMeasure${i}`]);
      }
    }
    arrkey.map((i, index) => {
      newArray.push({ mes: arrVal[index], inge: arrkey[index] });
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
              <IngreCard ingredients={i.inge} measure={i.mes} />
            ))}
          </HStack>
          <MealCard
            image={data.strMealThumb}
            mealName={data.strMeal}
            mealCategory={data.strCategory}
            instruction={data.strInstructions}
            videoLink={`https://www.youtube.com/embed/`}
          />
        </>
      )}
    </>
  );
};

const MealCard = ({
  image,
  mealName,
  mealCategory,
  instruction,
  videoLink,
}) => (
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
    <Heading m={2} fontSize={['2xl', '3xl']} textAlign={'center'}>
      Youtube Video
    </Heading>
    <AspectRatio
      alignItems={'center'}
      marginTop={2}
      marginBottom={2}
      maxW="560px"
      ratio={1}
    >
      <iframe width="420" height="315" src={videoLink}></iframe>
    </AspectRatio>
  </Container>
);

const IngreCard = ({ id, measure, ingredients }) => (
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
