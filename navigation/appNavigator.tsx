import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Homescreen from '../screens/Homescreen';
import Details from '../screens/Details';
import MyProfile from '../screens/MyProfile';
import LoginScreen from '../screens/Login';
import Signup from '../screens/Signup';
import Signup2 from '../screens/Signup2';

const stackNavigator = createSharedElementStackNavigator(
  {
    Home: Homescreen,
    Details: Details,
  },
  {
    mode: 'modal',
    defaultNavigationOptions: {
      cardStyleInterpolator: ({current: {progress}}) => {
        const opacity = progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        });
        return {cardStyle: {opacity}};
      },
      gestureEnabled: false,
      cardStyle: {
        backgroundColor: 'white',
      },
    },
  },
);

const BottomTabNavigator = createBottomTabNavigator({
  Home: stackNavigator,
  Profile: MyProfile,
});

const appStackNavigator = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Signup,
    Signup2,
    BottomTabNavigator: {
      screen: BottomTabNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    // headerMode: 'none',
  },
);

const AppContainer = createAppContainer(appStackNavigator);

export default AppContainer;
