import {useState} from 'react';
import { View,Image,Text,TextInput,Pressable,StyleSheet,Alert } from 'react-native';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [emailAddress, onChangeEmail] = useState('');
  const handleSubmit = () =>{
     Alert.alert("Thanks for Subscribing, stay tunned!")
     onChangeEmail('')
  }

  return (
    <View style={styles.container}>
     <Image 
     style={styles.logo}
     resizeMode="contain"
     accessibilityLabel={'Little Lemon Logo'}
     accessible={true}
     
    source={require('../assets /little-lemon-logo-grey.png')}
     /> 
     <Text style={styles.innerText}>
     Subscribe to our newsletter for our latest delicious recipes!
     </Text>
     <TextInput 
     style={styles.input}
     value={emailAddress}
     placeholder="Type your email"
     onChangeText={onChangeEmail}
     keyboardType={'email-address'}
     /> 
     <Pressable style={styles.button} onPress ={handleSubmit}
     >
      <Text style={styles.buttonText}>
      Subscribe
      </Text>
     </Pressable>
    </View>
  );
};

export default SubscribeScreen;
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  logo: {
    margin:100,
    height: 150,
    justifyContent:'center',
    width: 150, marginBottom:2,
  },
  innerText: {
    fontSize: 28,
    textAlign: 'center',
    marginTop: 20,
    padding: 10,
    fontWeight: 400,
  },
  input: {
    height: 45,
    margin: 20,
    borderWidth: 2,
    padding: 8,
    fontSize: 24,
    borderColor: 'black',
    borderRadius:4,
  },
  button: {
    backgroundColor: '#495E57',
    borderRadius: 4,
    margin: 20,
    height: 40,
  },
  buttonText: {
    color: '#EDEFEE',
    fontSize: 26,
    textAlign: 'center',
    padding: 5,
  },
});