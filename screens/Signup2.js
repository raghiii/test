import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  Picker,
} from 'react-native';
import logo from '../assets/images/homescreenimage.jpg';
import SelectInput from 'react-native-select-input-ios';

const DATA = [
  {
    id: '1',
    title: 'Tell us your gender?',
    placeholder: 'Enter gender',
  },
  {
    id: '2',
    title: 'Your height?',
    placeholder: 'Enter height',
  },
  {
    id: '3',
    title: "City you're living in?",
    placeholder: 'Enter place',
  },
  {
    id: '4',
    title: 'A little about your family...',
    placeholder: 'Type something',
  },
];

function Item({
  id,
  title,
  placeholder,
  setGender,
  setHeight,
  setCurrentPlace,
  setFamilyInfo,
  setShowPicker,
}) {
  const onFocus = () => {
    // Open date picker
    setShowPicker(true);
  };

  const onBlur = () => {
    setShowPicker(false);
    // Close date picker and add value to textinput
  };
  return (
    <View style={styles.nameContainer}>
      <Text style={styles.questions}>{title}</Text>
      <TextInput
        style={{height: 60, fontSize: 20}}
        placeholder={placeholder}
        multiline={true}
        numberOfLines={4}
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={(text) => {
          switch (id) {
            case '1':
              setGender(text);
              break;
            case '2':
              setHeight(text);
              break;
            case '3':
              setCurrentPlace(text);
              break;
            case '4':
              setFamilyInfo(text);
              break;
            default:
              break;
          }
        }}
      />
    </View>
  );
}

const Signup2 = (props) => {
  const [text, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [currentPlace, setCurrentPlace] = useState('');
  const [familyInfo, setFamilyInfo] = useState('');
  const [pickerTest, setPickerTest] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const imageHeight = new Animated.Value(100);

  useEffect(() => {
    const keyboardWillShowSub = Keyboard.addListener(
      'keyboardWillShow',
      keyboardWillShow,
    );
    const keyboardWillHideSub = Keyboard.addListener(
      'keyboardWillHide',
      keyboardWillHide,
    );
    return () => {
      keyboardWillShowSub.remove();
      keyboardWillHideSub.remove();
    };
  }, []);

  const keyboardWillShow = (event) => {
    Animated.timing(imageHeight, {
      duration: event.duration,
      toValue: 50,
      useNativeDriver: false,
    }).start();
  };

  const keyboardWillHide = (event) => {
    Animated.timing(imageHeight, {
      duration: event.duration,
      toValue: 100,
      useNativeDriver: false,
    }).start();
  };

  const options = [
    {value: 0, label: '0'},
    {value: 1, label: '1'},
    {value: 2, label: '2'},
    {value: 3, label: '3'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {/* <Animated.Image
          source={logo}
          style={{height: imageHeight, width: 100, resizeMode: 'cover'}}
        /> */}
        <Animated.View style={[{height: imageHeight}, styles.logo]}>
          <Text style={{fontSize: 30}}>App's logo</Text>
        </Animated.View>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.dataContainer}
          renderItem={({item}) => (
            <Item
              id={item.id}
              title={item.title}
              placeholder={item.placeholder}
              setGender={setGender}
              setHeight={setHeight}
              setCurrentPlace={setCurrentPlace}
              setFamilyInfo={setFamilyInfo}
              setShowPicker={setShowPicker}
            />
          )}
        />
        {!showPicker && (
          <View>
            <SelectInput value={0} options={options} />
          </View>
          //   <Picker
          //     mode="dropdown"
          //     selectedValue={pickerTest}
          //     onValueChange={(lang) => setPickerTest(lang)}>
          //     <Picker.Item label="Java" value="java" />
          //     <Picker.Item label="JavaScript" value="js" />
          //   </Picker>
        )}
        <View style={styles.nextButton}>
          <TouchableOpacity
            style={styles.abcd}
            onPress={() => {
              console.log('##values', text, height, currentPlace, familyInfo);
              props.navigation.navigate('Signup2');
            }}>
            <Text style={styles.nextText}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signup2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  dataContainer: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  questions: {
    fontSize: 30,
  },
  nextButton: {
    bottom: 40,
    right: 40,
    alignItems: 'flex-end',
  },
  abcd: {
    borderColor: 'brown',
    borderWidth: 0.8,
    padding: 10,
  },
  nextText: {
    fontSize: 20,
  },
});
