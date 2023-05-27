import React, { useContext, useState } from 'react';
import { View, TextInput, StyleSheet, Dimensions, Image, SafeAreaView, KeyboardAvoidingView, Platform, StatusBar, TouchableHighlight } from 'react-native';
import { styles } from '../public/Style';
import { Button, Text, Divider } from '@rneui/themed';
import { AuthContext } from '../context/AuthContext';

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login, errorMessage} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#ffffff"
        barStyle={'dark-content'}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled={Platform.OS === "ios" ? false : true }
        style={{alignItems: 'center'}}
      >
        <Image resizeMode='contain' style={custom_style.app_title} source={require('../../assets/iMotor.png')}/>
        <View style={custom_style.form_container}>
          {errorMessage ?
              <View style={custom_style.form_error}>
                <Text numberOfLines={1} ellipsizeMode='tail'>{errorMessage}</Text>
              </View>
            :
            null
          }
          <View style={custom_style.field_container}>
            <Text>Email Address</Text>
            <TextInput
              autoCapitalize='none'
              style={custom_style.input}
              onChangeText={email => setEmail(email)}
              value={email}
            />
          </View>
          <View style={custom_style.field_container}>
            <Text>Password</Text>
            <TextInput
              secureTextEntry={true}
              style={custom_style.input}
              onChangeText={password => setPassword(password)}
              value={password}
            />
          </View>
          <View>
            <View style={{ alignItems: 'center', alignItems: 'flex-end' }}>
              <Button
                title="Forgot Password?"
                type='clear'
                titleStyle={{ color: '#0300A4', fontSize: 15 }}
                onPress={() => navigation.navigate('ForgotPassword')}
              />
            </View>
            <View>
              <TouchableHighlight
                underlayColor={'#ffffff'}
                activeOpacity={0.5}
                style={custom_style.login_button}
                onPress={() => login(email, password)}
              >
                <View style={custom_style.login_button}>
                  <Text style={{color: '#ffffff', margin: 15}}>Login</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View 
              flexDirection='row' 
              style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25, marginBottom: 25 }}
            >
              <Text>New User?</Text>
              <Button
                title="Register Here"
                onPress={() => navigation.navigate('Register')}
                type='clear'
                titleStyle={{ color: '#0300A4', fontSize: 15, }}
              />
            </View>
            <View flexDirection='row' style={{alignItems: 'center'}}>
              <View style={{flex: 1, backgroundColor: '#D7D7D7', height: 1, alignItems: 'center', justifyContent: 'center'}}/>
                <View style={{marginLeft: 10, marginRight: 10}}><Text style={{color: '#D7D7D7'}}>or connect with</Text></View>
              <View style={{flex: 1, backgroundColor: '#D7D7D7', height: 1, alignItems: 'center', justifyContent: 'center'}}/>
            </View>
            <View flexDirection='row' style={{alignItems: 'center', justifyContent: 'space-evenly', paddingTop: 25}}>
              <Button 
                titleStyle={{fontSize: 10}} 
                buttonStyle={{borderRadius: 5, width: 100}}
                onPress={() => alert('Not yet available')}
              >
                <Image style={{tintColor: 'white', width: 25, height: 25, marginRight: 3}} source={require('../../assets/facebook.png')}/>
                Facebook
              </Button>
              <Button
                titleStyle={{fontSize: 10}} 
                buttonStyle={{borderRadius: 5, width: 100, backgroundColor: '#DB4437'}}
                onPress={() => alert('Not yet available')}
              >
                <Image style={{tintColor: 'white', width: 25, height: 25, marginRight: 3}} source={require('../../assets/google-plus.png')}/>
                Google
              </Button>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const custom_style = StyleSheet.create({
  app_title: {
    width: window_width * 0.9,
    height: window_height * 0.20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    //height: 40,
    borderColor: '#D7D7D7',
    marginTop: 5,
  },
  form_container: {
    width: window_width * 0.8,
  },
  login_button: {
    backgroundColor: '#0a5ca8',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  field_container: {
    marginTop: 10
  },
  form_error: {
    width: '100%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    height: 40,
    borderColor: '#F47C7C',
    backgroundColor: '#FAD4D4',
  }
});