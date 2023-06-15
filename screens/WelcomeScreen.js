import * as React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        accessibilityLabel={'LittleLemonLogo'}
        accessible={true}
        source={require('../assets /little-lemon-logo.png')}
      />
      <Text style={styles.innerText}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Subscribe')}>
        <Text style={styles.buttonText}>NewsLetter</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'white'
  },
  logo: {
    marginLeft: 80,
    height: 250,
    width: 200,
  },
  innerText: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: 20,
    padding: 20,
    fontWeight: 400,
  },
  button: {
    backgroundColor: '#495E57',
    borderRadius: 4,
    margin: 20,
    marginTop: 90,
    height: 40,
  },
  buttonText: {
    color: '#EDEFEE',
    fontSize: 26,
    textAlign: 'center',
    padding: 5,
  },
});
