import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import GetAge from './GetAge';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <GetAge />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
});

export default App;
