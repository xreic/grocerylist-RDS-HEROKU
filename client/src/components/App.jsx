// Dependencies
import React, { Component } from 'react';

// Styled-Components + ChakraUI
import styled from 'styled-components';
import { Box, Image, Heading, List, ListItem, Stack } from '@chakra-ui/core';

// Components
import GroceryForm from './Form/GroceryForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <HTMLBody>
        <BodyWrapper>
          <Image src="grocery-bags.png" display="inline" />

          <Stack spacing="1rem">
            <Heading>Grocery List</Heading>

            <Box>
              <GroceryForm />
            </Box>

            <List styleType="disc">
              <ListItem>
                <span> frozen pizza </span>
                <span> 5 </span>
              </ListItem>
              <ListItem>
                <span> noosa yogurt </span>
                <span> 10 </span>
              </ListItem>
              <ListItem>
                <span> wine </span>
                <span> 2 </span>
              </ListItem>
              <ListItem>
                <span> iced coffe </span>
                <span> 1 </span>
              </ListItem>
              <ListItem>
                <span> a </span>
                <span> 1 </span>
              </ListItem>
              <ListItem>
                <span> pizza </span>
                <span> 1 </span>
              </ListItem>
            </List>
          </Stack>
        </BodyWrapper>
      </HTMLBody>
    );
  }
}

export default App;

const HTMLBody = styled(Box)`
  font-family: Arial, Helvetica, sans-serif;
  background-color: honeydew;
  color: seagreen;
  position: absolute;
  height: 100%;
  width: 100%;
`;

const BodyWrapper = styled(Box)`
  width: 50%;
  margin: auto;
  text-align: center;
`;