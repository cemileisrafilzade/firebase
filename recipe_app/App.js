import React,{Component} from 'react';
// import { RootDrawer } from './navigation/RootDrawer';
import * as firebase from 'firebase';

import {
  View,Text,TouchableOpacity,Button,StyleSheet,
  TextInput
}from 'react-native'
// import { render } from 'react-dom';


export default class MyComponent extends Component {

state = {
  email:'',
  password:'',
  login:false,
}
componentDidMount = () =>{
  var firebaseConfig = {
    apiKey: "AIzaSyDyIHQNbwKIamn_eCCNfZz4shUubMhGFck",
    authDomain: "loginpage-31f06.firebaseapp.com",
    databaseURL: "https://loginpage-31f06.firebaseio.com",
    projectId: "loginpage-31f06",
    storageBucket: "loginpage-31f06.appspot.com",
    messagingSenderId: "270189607804",
    appId: "1:270189607804:web:e6334bdb8ee9619d8182f9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
firebase.auth().onAuthStateChanged(auth => {
if(auth){
console.log('signed up');
}
else{
  console.log(' not signed up');
}
})}

signup = () =>{
firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password);
}
getdata = () =>{
  firebase.database().ref('data').set(this.state.email)
}

render(){
  return (
  <View style={styles.container}>
    <Text>Log In</Text>

{/* <Text>username</Text>
    <TextInput 
    onChangeText={username =>this.setState({username:username})}
    value={this.state.username}
    style={styles.fields}/> */}
    <Text>mail</Text>
    <TextInput
     onChangeText={email => this.setState({ email: email })}
     value={this.state.username}
     underlineColorAndroid='transparent'
     keyboardType='email-address'
    style={styles.fields}/>

    <Text>password</Text>
    <TextInput
     onChangeText={password => this.setState({ password: password})}
     value={this.state.username}
     secureTextEntry
    style={styles.fields}/>

    {/* <Text>Confirm password</Text>
    <TextInput style={styles.fields}/> */}
    <TouchableOpacity
    
    onPress={() => [this.getdata(),this.signup()]}
     style={styles.btn}>
       <Text style={{color:'white',fontSize:20}}>Submit</Text>
     </TouchableOpacity>

    </View>
  
  )}};
 const styles = StyleSheet.create({
container:{
  flex:1,
  alignContent:'center',
  alignItems:'center',

  justifyContent:"center",
  
},
fields:{
  width:'80%',
  backgroundColor:'#eee',
  borderRadius:10,
  height:40,
paddingHorizontal:30,
marginVertical:10,
},
btn:{
  backgroundColor:'tomato',
  width:'80%',
  justifyContent:'center',
  alignItems:'center',
  height:40,
  borderRadius:10
}


 })