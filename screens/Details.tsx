import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

const Details = (props) => {
  const profile = props.navigation.getParam('profile');
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <SharedElement id={profile.id}>
          <Image style={styles.image} source={profile.profile} />
        </SharedElement>
        <View style={styles.descContainer}>
          <View style={styles.description}>
            <Text>Name</Text>
            <Text style={styles.descText}>{profile.name}</Text>
          </View>
          <View style={styles.description}>
            <Text>Age</Text>
            <Text style={styles.descText}>{profile.age}</Text>
          </View>
        </View>
        <View style={styles.descContainer}>
          <View style={styles.description}>
            <Text>Height</Text>
            <Text style={styles.descText}>5'8"</Text>
          </View>
          <View style={styles.description}>
            <Text>D.O.B.</Text>
            <Text style={styles.descText}>21 Oct, 98</Text>
          </View>
        </View>
        <View style={styles.familyDetails}>
          <Text>Family Details</Text>
          <Text style={styles.familyText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
        <View style={styles.contact}>
          <View style={styles.contactDetails}>
            <Text>Contact Details</Text>
            <Text style={styles.descText}>UNLOCK</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

Details.sharedElements = (navigation, otherNavigation, showing) => {
  const profile = navigation.getParam('profile');
  return [profile.id];
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: 400,
    // borderRadius: 8,
  },
  descContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  description: {
    backgroundColor: '#68C1FA',
    borderRadius: 8,
    padding: 15,
    width: 150,
  },
  descText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '400',
    padding: 5,
  },
  familyDetails: {
    marginTop: 30,
    backgroundColor: '#68C1FA',
    padding: 15,
  },
  familyText: {
    fontSize: 18,
    color: 'white',
    padding: 10,
  },
  contact: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
    marginBottom: 30,
  },
  contactDetails: {
    backgroundColor: '#68C1FA',
    borderRadius: 8,
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
});

export default Details;
