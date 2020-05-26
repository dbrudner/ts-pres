// Import React
import React from 'react';
// Import Spectacle Core tags
import { Deck, Slide, Heading, List, ListItem, Text } from 'spectacle';
// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Intro to TypeScript
          </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Goals
          </Heading>
          <List>
            <ListItem>Gain understanding of what TypeScript offers</ListItem>
            <ListItem>
              Persuade to learn more about TS and consider it when building your
              next thing
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What is TypeScript
          </Heading>
          <Text>A superset of javascript that allows for static typing</Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Where is TypeScript
          </Heading>
          <List>
            <ListItem>Everywhere in the JS ecosystem</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Why should you use typescript in your app
          </Heading>
          <List>
            <ListItem>
              Code documentation and all the benefits thereof (faster onboarding
              time, easier collaboration, better code review)
            </ListItem>
            <ListItem>
              Faster development time, specifically in large/mature apps
            </ListItem>
            <ListItem>Improves 3rd party code integration (demo)</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            TypeScript cons
          </Heading>
          <List>
            <ListItem>NOT a drop-in replacement for unit testing</ListItem>
          </List>
          <List>
            <ListItem>Poor error messaging for complex types</ListItem>
          </List>
          <List>
            <ListItem>Learning curve</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Why should you learn typescript
          </Heading>
          <List>
            <ListItem>
              All the benefits you get from a statically typed language
            </ListItem>
            <ListItem>It's everywhere at this point</ListItem>
            <ListItem>It'll make you a better developer</ListItem>
            <ListItem>Gain a better understanding of your own code</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            How
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
