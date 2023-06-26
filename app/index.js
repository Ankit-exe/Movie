import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Home from '../components/Home';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaView  className='flex-1 bg-neutral-800'>
      <Home />
    </SafeAreaView>

  );
}
