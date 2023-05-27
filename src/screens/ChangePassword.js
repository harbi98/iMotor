import { StyleSheet, View, StatusBar, SafeAreaView, TextInput, Image, KeyboardAvoidingView, TouchableHighlight } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL, processResponse } from '../config';
import { styles } from '../public/Style';
import { Button, Text, Input } from '@rneui/themed';
import { useToast } from "react-native-toast-notifications";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function ChangePassword({navigation}) {
  const toast = useToast();

  const {userToken} = useContext(AuthContext);

  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setConfirmNewPassword] = useState();

  const changePassword = () => {
    try{
        fetch(BASE_URL+'change-password',{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${userToken}`,
            },
            body: JSON.stringify({
              old_password: oldPassword,
              new_password: newPassword,
              confirm_password: confirmNewPassword,
            })
        })
        .then(processResponse)
        .then(res => {
          const { statusCode, data } = res;
          if(statusCode === 200) {
            toast.show(data.message, {
              type: "custom", // "normal | success | warning | danger | custom"
              placement: "top", // "top | bottom"
              duration: 4000,
              animationType: "zoom-in", // "slide-in | zoom-in"
            });
          } else {
            toast.show(data.message, {
              type: "danger", // "normal | success | warning | danger | custom"
              placement: "top", // "top | bottom"
              duration: 4000,
              animationType: "zoom-in", // "slide-in | zoom-in"
            });
          }
        })
        .catch((e) => {
            console.log(e);
        })
    } catch (e){
        console.log(e);
    }
  };
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
        <Text style={{color: '#ffffff', fontSize: 20, fontWeight: '600'}}>Change Password</Text>
        <View style={{width: 50, height: 50}}/>
      </View>
      <KeyboardAwareScrollView style={{width: '100%', marginBottom: 25}}>
        <View style={{flex: 1, width: '100%', alignItems: 'center', paddingTop: 20}}>
          <Image source={require('../../assets/change_pass_dialog.png')} style={{width: 200, height: 200}}/>
          <View style={{width: '80%', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontFamily: 'back-groove', fontSize: 40, marginBottom: 20, textAlign: 'center'}}>Change Password</Text>
            <Text style={{fontSize: 15}}>Set your new password.</Text>
            <View style={{paddingTop: 30, width: '100%', alignItems: 'center'}}>
              <TextInput
                secureTextEntry={true}
                style={custom_styles.input}
                autoCapitalize='none'
                placeholder='Old password'
                value={oldPassword}
                onChangeText={(e) => setOldPassword(e)}
              />
              <TextInput
                secureTextEntry={true}
                style={custom_styles.input}
                autoCapitalize='none'
                placeholder='New password'
                value={newPassword}
                onChangeText={(e) => setNewPassword(e)}
              />
              <TextInput
                secureTextEntry={true}
                style={custom_styles.input}
                autoCapitalize='none'
                placeholder='Confirm new password'
                value={confirmNewPassword}
                onChangeText={(e) => setConfirmNewPassword(e)}
              />
              <TouchableHighlight
                underlayColor={'#ffffff'}
                activeOpacity={0.5}
                style={custom_styles.submit_button}
                onPress={() => changePassword()}
              >
                <View style={custom_styles.submit_button}>
                  <Text style={{color: '#ffffff', margin: 15}}>Submit</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
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