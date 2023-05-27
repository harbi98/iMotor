import { StyleSheet, View, StatusBar, SafeAreaView, TextInput, Image, KeyboardAvoidingView, TouchableHighlight } from 'react-native';
import React, { useState, useContext } from 'react';
import { styles } from '../public/Style';
import { Button, Text, Input } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ResetPassword({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar
          backgroundColor="#0a5ca8"
          barStyle={'light-content'}
        />
        <View style={{
        backgroundColor: '#ffffff',
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingTop: 5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        paddingTop: Platform.OS === 'ios' ? 50 : 0,
        backgroundColor: '#0a5ca8',
        }}>
          <TouchableHighlight
              underlayColor={'trasparent'}
              activeOpacity={0.1}
              style={{
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
              }}
              onPress={() => navigation.goBack()}
          >
              <View
                  style={{
                      width: 50,
                      height: 50,
                      backgroundColor: '#0a5ca8',
                      alignItems: 'center',
                      justifyContent: 'center',
                  }}
              >
              <Image
                  style={{
                      tintColor: '#ffffff',
                      width: 30,
                      height: 30,
                  }}
                  source={require('../../assets/angle-small-left.png')}
              />
              </View>
          </TouchableHighlight>
          <Text style={{color: '#ffffff', fontSize: 20}}>Create New Password</Text>
          <View style={{width: 50, height: 50}}/>
      </View>
      <View style={{flex: 1, width: '80%', alignItems: 'center', paddingTop: 20}}>
        <Image source={require('../../assets/change_pass_dialog.png')} style={{width: 200, height: 200}}/>
        <Text style={{fontWeight: 'bold', fontFamily: 'back-groove', fontSize: 40, marginBottom: 20, textAlign: 'center'}}>Reset Password</Text>
        <Text style={{fontSize: 15}}>Your identity has been verified!</Text>
        <Text style={{fontSize: 15}}>Set your new password.</Text>
        <View style={{paddingTop: 30, width: '100%', alignItems: 'center'}}>
            <TextInput
                style={custom_styles.input}
                autoCapitalize='none'
                placeholder='New Password'
            />
            <TextInput
                style={custom_styles.input}
                autoCapitalize='none'
                placeholder='Confirm new Password'
            />
            <TouchableHighlight
              underlayColor={'#ffffff'}
              activeOpacity={0.5}
              style={custom_styles.submit_button}
              onPress={() => navigation.navigate('VerifyForgotPassword')}
            >
              <View style={custom_styles.submit_button}>
                <Text style={{color: '#ffffff', margin: 15}}>Submit</Text>
              </View>
            </TouchableHighlight>
        </View>
      </View>
    </View>
  )
}

const custom_styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#D7D7D7',
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  submit_button: {
      backgroundColor: '#0a5ca8',
      width: '100%',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      
  },
})