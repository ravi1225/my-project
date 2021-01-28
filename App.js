import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Heading from './heading';
import Todo from './todo';
import Constants from 'expo-constants';
import { Colors } from './src/components/Colors';

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
    backgroundColor: Colors.white,
    marginTop: Constants.statusBarHeight
    
  },
});






