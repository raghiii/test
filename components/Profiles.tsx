/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  Animated,
  PanResponder,
} from 'react-native';
import type {Profile} from './Profile';
import Card from './Card';

type ProfilesProps = {
  profiles: Profile[];
};

type ProfilesState = {
  profiles: Profile[];
};

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Profiles extends React.PureComponent<
  ProfilesProps,
  ProfilesState
> {
  constructor(props: ProfilesProps) {
    super(props);
    const {profiles} = props;
    this.position = new Animated.ValueXY();
    this.state = {
      profiles,
      currentIndex: 0,
    };

    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({x: gestureState.dx, y: gestureState.dy});
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: {x: SCREEN_WIDTH + 100, y: gestureState.dy},
            useNativeDriver: true,
          }).start(() => {
            this.setState({currentIndex: this.state.currentIndex + 1}, () => {
              this.position.setValue({x: 0, y: 0});
              // this.props.navigation.navigate('Profile');
            });
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: {x: -SCREEN_WIDTH - 100, y: gestureState.dy},
            useNativeDriver: true,
          }).start(() => {
            this.setState({currentIndex: this.state.currentIndex + 1}, () => {
              this.position.setValue({x: 0, y: 0});
            });
          });
        } else {
          Animated.spring(this.position, {
            toValue: {x: 0, y: 0},
            friction: 4,
            useNativeDriver: true,
          }).start();
        }
      },
    });

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp',
    });

    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.92, 1],
      extrapolate: 'clamp',
    });
  }

  renderUsers = () => {
    return this.props.profiles
      .map((profile, i) => {
        if (i < this.state.currentIndex) {
          return null;
        } else if (i === this.state.currentIndex) {
          return (
            <Animated.View
              {...this.PanResponder.panHandlers}
              key={profile.id}
              style={[
                {
                  transform: this.position.getTranslateTransform(),
                },
                {
                  height: SCREEN_HEIGHT - 250,
                  width: SCREEN_WIDTH,
                  position: 'absolute',
                },
              ]}>
              <Card
                key={profile.id}
                {...{profile}}
                navigation={this.props.navigation}
              />
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              key={profile.id}
              style={[
                {
                  opacity: this.nextCardOpacity,
                  transform: [{scale: this.nextCardScale}],
                  height: SCREEN_HEIGHT - 250,
                  width: SCREEN_WIDTH,
                  padding: 10,
                  position: 'absolute',
                },
              ]}>
              <Card
                key={profile.id}
                {...{profile}}
                navigation={this.props.navigation}
              />
            </Animated.View>
          );
        }
      })
      .reverse();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{'<'} Swipe left to ignore</Text>
          <Text style={styles.headerText}>Swipe right to unlock {'>'}</Text>
        </View>
        <View style={styles.cards}>{this.renderUsers()}</View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerText: {
    fontWeight: '300',
    fontSize: 16,
  },
  cards: {
    flex: 1,
  },
  footer: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 16,
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.18,
    shadowRadius: 2,
  },
});
