import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const image = require('../assets/images/homescreenimage.jpg');

const LoginScreen = (props) => {
  return (
    <ImageBackground source={image} style={styles.image}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome to Vivaah!</Text>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => props.navigation.navigate('Signup')}>
          <Text style={styles.signup}>Sign up for free.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.login}>Already a member, Login Here.</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    color: 'white',
  },
  signupButton: {
    margin: 40,
    borderColor: 'brown',
    borderWidth: 1,
    alignItems: 'center',
  },
  signup: {
    fontSize: 25,
    color: 'white',
    fontWeight: '300',
    padding: 10,
  },
  loginButton: {
    position: 'absolute',
    bottom: 50,
  },
  login: {
    fontSize: 20,
    color: 'white',
    fontWeight: '300',
    padding: 10,
  },
});
