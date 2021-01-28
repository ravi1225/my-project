import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Heading from './heading';
import Todo from './todo';
import Constants from 'expo-constants';

export default function App() {
  return (
      <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
          <Heading />
          <View>
            <Todo />
          </View> 
      </SafeAreaView>
      </>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight
    
  },
});
