import { StyleSheet, SafeAreaView, TextInput, Image, View } from 'react-native';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../public/Style';
import { Button, Text } from '@rneui/themed';

export default function Verification({navigation}) {
    const {email, verify} = useContext(AuthContext);
    const [verificationCode, setVerificationCode] = useState('');

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
    <SafeAreaView style={styles.container}>
        <View style={{flex: 1, width: '90%', alignItems: 'center', justifyContent: 'center', paddingTop: 100}}>
            <Image source={require('../../assets/otp_dialog.psd')} style={{width: 200, height: 200}}/>
            <Text style={{fontWeight: 'bold', fontFamily: 'back-groove', fontSize: 40, marginBottom: 50}}>Verify your email</Text>
            <Text style={{fontSize: 15}}>Please enter the 6 digit code sent to</Text>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>{email}</Text>
            <View style={{flex: 1, paddingTop: 50, width: '100%', alignItems: 'center'}}>
                <TextInput
                    style={custom_styles.input}
                    keyboardType='numeric'
                    textAlign='center'
                    onChangeText={text => onChanged(text)}
                    value={verificationCode}
                    maxLength={6}
                />
                <Button type='clear'>Resend Code</Button>
                <Button
                    title="Verify"
                    loading={false}
                    onPress={() => verify(verificationCode)}
                    buttonStyle={custom_styles.verify_button}
                    titleStyle={{ fontSize: 15 }}
                />
            </View>
        </View>
    </SafeAreaView>
    )
}

const custom_styles = StyleSheet.create({
    input: {
        height: 40,
        paddingLeft: 20,
        width: 300,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        height: 60,
        borderColor: '#D7D7D7',
        marginTop: 5,
        fontSize: 40,
        letterSpacing: 10
      },
    verify_button: {
        backgroundColor: '#0a5ca8',
        width: 300,
        height: 60,
        borderRadius: 20,
    },
})