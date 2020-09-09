import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Tell us your good name?',
    placeholder: 'Enter name',
  },
  {
    id: '2',
    title: 'Your date of birth?',
    placeholder: 'Enter date of birth',
  },
  {
    id: '3',
    title: 'Your place of birth?',
    placeholder: 'Enter place of birth',
  },
  {
    id: '4',
    title: 'Your religion?',
    placeholder: 'Enter religion',
  },
];

function Item({
  id,
  title,
  placeholder,
  setText,
  setAge,
  setBirthplace,
  setReligion,
}) {
  return (
    <View>
      <Text style={styles.questions}>{title}</Text>
      <TextInput
        style={{height: 60, fontSize: 20}}
        placeholder={placeholder}
        multiline={true}
        numberOfLines={4}
        onChangeText={(text) => {
          switch (id) {
            case '1':
              setText(text);
              console.log('##text case 1', text);
              break;
            case '2':
              console.log('##text case 2', text);
              setAge(text);
              break;
            case '3':
              console.log('##text case 3', text);
              setBirthplace(text);
              break;
            case '4':
              console.log('##text case 4', text);
              setReligion(text);
              break;
            default:
              break;
          }
        }}
        // defaultValue={text}
      />
    </View>
  );
}

const Signup = (props) => {
  const [text, setText] = useState('');
  const [age, setAge] = useState('');
  const [birthplace, setBirthplace] = useState('');
  const [religion, setReligion] = useState('');
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.dataContainer}
        renderItem={({item}) => (
          <Item
            id={item.id}
            title={item.title}
            placeholder={item.placeholder}
            setText={setText}
            setAge={setAge}
            setBirthplace={setBirthplace}
            setReligion={setReligion}
          />
        )}
      />
      <View style={styles.nextButton}>
        <TouchableOpacity
          style={styles.abcd}
          onPress={() => {
            console.log('##values', text, age, birthplace, religion);
            props.navigation.navigate('Signup2');
          }}>
          <Text style={styles.nextText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;

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
