import { Button, Container, HStack, Heading } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import Error from './Error';

const FooterAlfabet = () => {
  const [value, setValue] = useState('a');
  const [alphaData, setAlphaData] = useState([]);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`
      );
      console.log(data.meals);
      if (data.meals == null) {
        setAlphaData([]);
        setNoData(true);
      } else {
        setAlphaData(data.meals);
      }
    };
    fetch();
  }, [value]);

  const clickHandler = e => {
    console.log(e.target.value);
    setValue(e.target.value);
    setNoData(false);
  };

  return (
    <>
      <Container maxWidth={'container.md'}>
        <Heading m={4} textAlign={'center'} fontSize={'xl'}>
          Browse By Alphabet
        </Heading>
        <HStack wrap={'wrap'} justifyContent={'center'}>
          <Button
            value={'a'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            A
          </Button>
          <Button
            value={'b'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            B
          </Button>
          <Button
            value={'c'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            C
          </Button>
          <Button
            value={'d'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            D
          </Button>
          <Button
            value={'e'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            E
          </Button>
          <Button
            value={'f'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            F
          </Button>
          <Button
            value={'g'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            G
          </Button>
          <Button
            value={'h'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            H
          </Button>
          <Button
            value={'i'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            I
          </Button>
          <Button
            value={'j'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            J
          </Button>
          <Button
            value={'k'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            K
          </Button>
          <Button
            value={'l'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            L
          </Button>
          <Button
            value={'m'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            M
          </Button>
          <Button
            value={'n'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            N
          </Button>
          <Button
            value={'o'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            O
          </Button>
          <Button
            value={'p'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            P
          </Button>
          <Button
            value={'q'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            Q
          </Button>
          <Button
            value={'r'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            R
          </Button>
          <Button
            value={'s'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            S
          </Button>
          <Button
            value={'t'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            T
          </Button>
          <Button
            value={'u'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            U
          </Button>
          <Button
            value={'v'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            V
          </Button>
          <Button
            value={'w'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            W
          </Button>
          <Button
            value={'x'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            X
          </Button>
          <Button
            value={'y'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            Y
          </Button>
          <Button
            value={'z'}
            onClick={clickHandler}
            color={'white'}
            bg={'blackAlpha.900'}
          >
            Z
          </Button>
        </HStack>
      </Container>
      <Container maxW={'container.lg'}>
        {noData ? (
          <Error />
        ) : (
          <>
            <HStack wrap={'wrap'} justifyContent={'center'}>
              {alphaData.map(i => (
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
    </>
  );
};

export default FooterAlfabet;
