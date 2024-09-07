import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { Box, Flex, Spacer } from '@chakra-ui/react';

function Header() {
  return (
    <>
      <Flex>
        <Box>MixMaster</Box>
        <Spacer />
        <Box>
          <ul>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return `${isActive ? 'active' : 'menu'}`;
              }}
            >
              <li>Home</li>
            </NavLink>
            <NavLink to="/about" className="menu">
              <li>About</li>
            </NavLink>
            <NavLink to="/news-letter" className="menu">
              <li>NewsLetter</li>
            </NavLink>
          </ul>
        </Box>
      </Flex>
    </>
  );
}

export default Header;
