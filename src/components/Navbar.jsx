import { Box, Button, Container, Select } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [selectedCate, setSelectedCate] = useState();

  const categoryHandler = e => {
    const cate = e.target.value;

    navigate(`/categroyWise/${cate}`);
  };

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
      );
      setCategory(data.meals);
    };
    fetch();
  }, []);

  return (
    <>
      <Box
        bg={'blackAlpha.900'}
        p={4}
        w={'100%'}
        color={'whiteAlpha.900'}
        position={'sticky'}
        zIndex={10}
      >
        <Button variant={'unstyled'} marginLeft={[1, 2]} marginRight={[1, 2]}>
          <Link to="/">Home</Link>
        </Button>
        <Button variant={'unstyled'} marginLeft={[1, 2]} marginRight={[1, 2]}>
          <Link to="/about">About</Link>
        </Button>
        <Button variant={'unstyled'} marginLeft={[1, 2]} marginRight={[1, 2]}>
          <Link to="/contact">Contact</Link>
        </Button>
        <Container maxW={['150px', 'xs']} float={'right'}>
          <Select
            value={selectedCate}
            bg="white"
            color="black"
            placeholder="Category"
            onChange={categoryHandler}
          >
            {category.map(i => (
              <option key={i.strCategory} value={i.strCategory}>
                {i.strCategory}
              </option>
            ))}
          </Select>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
