import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

function Header() {
  return (
    <>
      <Flex justify="space-between" mt="20px" mb="20px">
        <Box ml="25vh">
          <Heading as="h2" size="2xl" color="#10b981">
            MixMaster
          </Heading>
        </Box>
        <Box alignContent={'center'} mr={'25vh'}>
          <ul>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return `${isActive ? 'active' : 'menu'}`;
              }}
            >
              <li>
                <Text fontSize="lg">Home</Text>
              </li>
            </NavLink>
            <NavLink to="/about" className="menu">
              <li>
                <Text fontSize="lg">About</Text>
              </li>
            </NavLink>
            <NavLink to="/news-letter" className="menu">
              <li>
                <Text fontSize="lg">Newsletter</Text>
              </li>
            </NavLink>
          </ul>
        </Box>
      </Flex>
    </>
  );
}

export default Header;
