import React from 'react';
import {StyleSheet,Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function App(props) {
  return (
    <LinearGradient
      colors={['#ffffff', '#000000', '#ffffff']}
      style={styles.linearGradient}>
      <Text style={styles.buttonText}>Demo of Linear Gradient</Text>
    </LinearGradient>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 50,
    height: 50,
    width: 350,
    marginLeft: 300,
    marginTop: 230,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default App;
