/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  console.log('I am a console statement');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Welcome!</Text>
              <Text style={styles.sectionDescription}>
                This is a <Text style={styles.highlight}>boring</Text> page.
              </Text>
              <Text style={styles.sectionDescription}>This page will not contain anything substantial</Text>
              <Text style={styles.sectionDescription}>However, feel free to read this completely useless texts in this page</Text>
              <Text style={styles.sectionDescription}>Here are a couple more text so that the page is not completely white</Text>
              <Text style={styles.sectionDescription}>One, Two, Three</Text>
              <Text style={styles.sectionDescription}>Four, Five, Six</Text>
              <Text style={styles.sectionDescription}>Seven, Eight, Nine</Text>
              <Text style={styles.sectionDescription}>Is this the end of the page?</Text>
              <Text style={styles.sectionDescription}>No!</Text>
              <Text style={styles.sectionDescription}>*Insert more text here*</Text>
              <Text style={styles.sectionDescription}>Is this the end of the page?</Text>
              <Text style={styles.sectionDescription}>Yes!</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
