import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Config from 'react-native-config';

const App = () => {
  return (
    <View style={[styles.container, { backgroundColor: Config.APP_COLOR }]}>
      <Text style={styles.title}>{Config.APP_NAME}</Text>
      <Text style={styles.text}>Environment: {Config.ENV}</Text>
      <Text style={styles.text}>API URL: {Config.API_URL}</Text>
      <Text style={styles.text}>App ID: {Config.APPLICATION_ID}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
});

export default App;