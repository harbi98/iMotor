import { StyleSheet, SafeAreaView, TextInput, Image, View, StatusBar, TouchableHighlight } from 'react-native';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../public/Style';
import { Button, Text } from '@rneui/themed';

export default function VerifyForgotPassword({navigation}) {
    const {email} = useContext(AuthContext);
    const [verificationCode, setVerificationCode] = useState();
    const onChanged = (text) => {
        let newText = '';
        let numbers = '0123456789';

        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
            }
        }
        setVerificationCode(newText);
    }
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
            <Text style={{color: '#ffffff', fontSize: 20}}>Verify Your Email</Text>
            <View style={{width: 50, height: 50}}/>
        </View>
        <View style={{flex: 1, width: '90%', alignItems: 'center', paddingTop: 20}}>
            <Image source={require('../../assets/otp_dialog.png')} style={{width: 200, height: 200}}/>
            <Text style={{fontWeight: 'bold', fontFamily: 'back-groove', fontSize: 40, marginBottom: 20}}>Verify your email</Text>
            <Text style={{fontSize: 15}}>Please enter the 6 digit code sent to</Text>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>{email ? email : null}</Text>
            <View style={{paddingTop: 50, width: '90%', alignItems: 'center'}}>
                <TextInput
                    style={custom_styles.input}
                    keyboardType='numeric'
                    textAlign='center'
                    maxLength={6}
                    onChangeText={(e) => onChanged(e)}
                    value={verificationCode}
                />
                <TouchableHighlight
                    underlayColor={'#ffffff'}
                    activeOpacity={0.5}
                    style={{padding: 15}}
                    onPress={() => console.log('pressed')}
                >
                    <Text style={{textDecorationLine: 'underline', color: '#8bc63f'}}>Resend Code</Text>
                </TouchableHighlight>
                <TouchableHighlight
                underlayColor={'#ffffff'}
                activeOpacity={0.5}
                style={custom_styles.verify_button}
                onPress={() => navigation.navigate('ResetPassword')}
                >
                    <View style={custom_styles.verify_button}>
                        <Text style={{color: '#ffffff', margin: 15}}>Verify</Text>
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
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        //height: 40,
        borderColor: '#D7D7D7',
        marginTop: 5,
        fontSize: 20,
        letterSpacing: 10,
    },
    verify_button: {
        backgroundColor: '#0a5ca8',
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})