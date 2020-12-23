// Add file local.properties in android folder and then add the below line

// sdk.dir = /home/tragicmj/Android/Sdk

import React,{Component,useState,useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { WebView } from 'react-native-webview';


// const {google} = require('googleapis');

// const oauth2Client = new google.auth.OAuth2(
//   YOUR_CLIENT_ID,
//   YOUR_CLIENT_SECRET,
//   YOUR_REDIRECT_URL
// );

// // generate a url that asks permissions for Blogger and Google Calendar scopes
// const scopes = [
//   'https://www.googleapis.com/auth/blogger',
//   'https://www.googleapis.com/auth/calendar'
// ];

// const url = oauth2Client.generateAuthUrl({
//   // 'online' (default) or 'offline' (gets refresh_token)
//   access_type: 'online',

//   // If you only need one scope you can pass it as a string
//   scope: scopes
// });

const App  = () => {
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const webviewRef = useRef(null);
  backButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goBack()
  }
  
  frontButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goForward()
  }

  return (
    <>
      <StatusBar barStyle='dark-content' />
        <SafeAreaView style={styles.flexContainer}>
        <Text>Hello</Text>
         {/* <WebView source={{ uri: 'https://meet.google.com/jkq-vbzj-ukq' }} 
          startInLoadingState={true}
          originWhitelist={['*']}
          renderLoading={() => (
            <ActivityIndicator
              color='black'
              size='large'
              style={styles.flexContainer}
            />)}
            ref={webviewRef}
            onNavigationStateChange={navState => {
              setCanGoBack(navState.canGoBack)
              setCanGoForward(navState.canGoForward)
              setCurrentUrl(navState.url)
            }}
          />*/}
      <View style={styles.tabBarContainer}>
            <TouchableOpacity onPress={backButtonHandler}>
              <Text style={styles.button}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={frontButtonHandler}>
              <Text style={styles.button}>Forward</Text>
            </TouchableOpacity>
          </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1
  },
  tabBarContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#b43757'
  },
  button: {
    color: 'white',
    fontSize: 24
  }
});

export default App;

