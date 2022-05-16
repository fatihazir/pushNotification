/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('out of main!', remoteMessage);
});



const App = () => {

  const [backgroundDataCheck, setBackgroundDataCheck] = React.useState("noData")

  React.useEffect(() => {
    //Foreground 
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);


  React.useEffect(() => {

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        console.log("getInitialNotification: ", remoteMessage);
      }).catch((err) => {
        console.log("getInitialNotification catch : ", err.toString());
      });


    messaging()
      //@ts-ignore
      .getToken(firebase.app().options.messagingSenderId)
      .then(res => {
        console.log("pushToken:", res);
      })
      .catch((e) => {
        console.log("catch : ", e.toString());
      });

  }, []);


  messaging().setBackgroundMessageHandler(async remoteMessage => {
    setBackgroundDataCheck("Dataa")
    console.log('Message handled in the background!', remoteMessage);
  });




  return (
    <SafeAreaView >
      <Text>Selamlar</Text>
      <Text>{backgroundDataCheck}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
