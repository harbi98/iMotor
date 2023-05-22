import React, { useContext, useState } from 'react';
import { View, TextInput, StyleSheet, Dimensions, Image, SafeAreaView } from 'react-native';
import { styles } from '../public/Style';
import { Button, Text, Divider } from '@rneui/themed';
import { AuthContext } from '../context/AuthContext';

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <Image resizeMode='contain' style={custom_style.app_title} source={require('../../assets/iMotor.png')}/>
      <View style={custom_style.form_container}>
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
            />
          </View>
          <View>
            <Button
              title="LOGIN"
              loading={false}
              onPress={() => login(email, password)}
              buttonStyle={custom_style.login_button}
              titleStyle={{ fontSize: 15 }}
            />
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
            >
              <Image style={{tintColor: 'white', width: 25, height: 25, marginRight: 3}} source={require('../../assets/facebook.png')}/>
              Facebook
            </Button>
            <Button
              titleStyle={{fontSize: 10}} 
              buttonStyle={{borderRadius: 5, width: 100, backgroundColor: '#DB4437'}}
            >
              <Image style={{tintColor: 'white', width: 25, height: 25, marginRight: 3}} source={require('../../assets/google-plus.png')}/>
              Google
            </Button>
          </View>
        </View>
      </View>
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
    height: 40,
    borderColor: '#D7D7D7',
    marginTop: 5,
  },
  form_container: {
    width: window_width * 0.8,
  },
  login_button: {
    backgroundColor: '#0a5ca8',
    height: 40,
    borderRadius: 5,
    width: '100%'
  },
  field_container: {
    marginTop: 10
  }
});