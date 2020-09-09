import React from 'react';
import Profiles from '../components/Profiles';
const profiles = [
  {
    id: '1',
    name: 'Caroline',
    age: 24,
    profile: require('../assets/profiles/1.jpg'),
  },
  {
    id: '2',
    name: 'Jack',
    age: 30,
    profile: require('../assets/profiles/2.jpg'),
  },
  {
    id: '3',
    name: 'Anet',
    age: 21,
    profile: require('../assets/profiles/3.jpg'),
  },
  {
    id: '4',
    name: 'John',
    age: 28,
    profile: require('../assets/profiles/4.jpg'),
  },
  {
    id: '5',
    name: 'Alisa',
    age: 24,
    profile: require('../assets/profiles/5.jpg'),
  },
  {
    id: '6',
    name: 'Jake',
    age: 24,
    profile: require('../assets/profiles/6.jpg'),
  },
  {
    id: '7',
    name: 'Erica',
    age: 25,
    profile: require('../assets/profiles/7.jpg'),
  },
  {
    id: '8',
    name: 'Logan',
    age: 25,
    profile: require('../assets/profiles/8.jpg'),
  },
];

const Homescreen = (props) => {
  return <Profiles {...{profiles}} navigation={props.navigation} />;
};

export default Homescreen;
