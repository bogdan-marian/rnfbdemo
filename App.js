/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import firebase from '@react-native-firebase/app';
import analytics from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native Firebase V6 Demo</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text>The following modules are installed natively and working:</Text>
        {firebase.apps.length && <Text style={styles.module}>app()</Text>}
        {/* {analytics().native && <Text style={styles.module}>analytics()</Text>} */}
        {crashlytics().native && <Text style={styles.module}>crashlytics()</Text>}

        <Button onPress={() => { console.log("Native Crash Now"); crashlytics().crash() }}>
          <Text>Native Crash Now</Text>
        </Button>
        <Button onPress={() => { console.log("Javascript Crash Now"); undefined.does_not_exist() }}>
          <Text>Javascript Crash Now</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
