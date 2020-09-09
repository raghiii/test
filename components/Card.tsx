// @flow
import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {SharedElement} from 'react-navigation-shared-element';

import type {Profile} from './Profile';

const {Value} = Animated;

type CardProps = {
  profile: Profile;
  likeOpacity?: Value | number;
  nopeOpacity?: Value | number;
};

export default class Card extends React.PureComponent<CardProps> {
  static defaultProps = {
    likeOpacity: 0,
    nopeOpacity: 0,
  };

  render() {
    const {profile, likeOpacity, nopeOpacity, navigation} = this.props;
    return (
      <TouchableWithoutFeedback
        style={StyleSheet.absoluteFill}
        onPress={() => navigation.push('Details', {profile})}>
        <View style={StyleSheet.absoluteFill}>
          <SharedElement id={profile.id} style={StyleSheet.absoluteFill}>
            <Image style={styles.image} source={profile.profile} />
          </SharedElement>
          <View style={styles.overlay}>
            <View style={styles.header}>
              <Animated.View style={[styles.like, {opacity: likeOpacity}]}>
                <Text style={styles.likeLabel}>UNLOCK</Text>
              </Animated.View>
              <Animated.View style={[styles.nope, {opacity: nopeOpacity}]}>
                <Text style={styles.nopeLabel}>NOPE</Text>
              </Animated.View>
            </View>
            <View style={styles.footer}>
              <Text style={styles.name}>{profile.name}</Text>
              <Text style={styles.name}>{profile.age}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null,
    borderRadius: 20,
    margin: 10,
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    color: 'white',
    fontSize: 32,
  },
  like: {
    borderWidth: 4,
    borderRadius: 5,
    padding: 8,
    borderColor: '#6ee3b4',
  },
  likeLabel: {
    fontSize: 32,
    color: '#6ee3b4',
    fontWeight: 'bold',
  },
  nope: {
    borderWidth: 4,
    borderRadius: 5,
    padding: 8,
    borderColor: '#ec5288',
  },
  nopeLabel: {
    fontSize: 32,
    color: '#ec5288',
    fontWeight: 'bold',
  },
});
