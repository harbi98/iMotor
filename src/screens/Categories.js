import { StyleSheet, Text, SafeAreaView, Dimensions, Image, View } from 'react-native';
import React from 'react';
import { styles } from '../public/Style';
import { Button } from '@rneui/themed';

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;

export default function Categories({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <Image resizeMode='contain' style={custom_style.app_title} source={require('../../assets/iMotor.png')}/>
        <View style={{ width: 340, marginBottom: 20 }}>
            <Text style={{textAlign: 'center'}}>
                Lorem ipsum dolor sit amet. 
                Et iusto rerum et voluptas tempora ut sint reprehenderit nam odio fuga.
            </Text>
        </View>
        <View flexDirection='row' style={custom_style.menu_container}>
            <Button buttonStyle={custom_style.menu_button} onPress={() => navigation.navigate('Tabs')}>
                <Image style={{tintColor: 'white', width: 50, height: 50, marginRight: 3}} source={require('../../assets/car-sports.png')}/>
                Cars
            </Button>
            <Button buttonStyle={custom_style.menu_button}>
            <Image style={{tintColor: 'white', width: 50, height: 50, marginRight: 3}} source={require('../../assets/truck.png')}/>
                Heavy Vehicles
            </Button>
        </View>
        <View flexDirection='row' style={custom_style.menu_container}>
            <Button buttonStyle={custom_style.menu_button}>
            <Image style={{tintColor: 'white', width: 50, height: 50, marginRight: 3}} source={require('../../assets/motorbike.png')}/>
                Motocycle
            </Button>
            <Button buttonStyle={custom_style.menu_button}>
            <Image style={{tintColor: 'white', width: 50, height: 50, marginRight: 3}} source={require('../../assets/sail-boat.png')}/>
                Boat
            </Button>
        </View>
    </SafeAreaView>
  )
}

const custom_style = StyleSheet.create({
    app_title: {
        width: window_width * 0.9,
        height: window_height * 0.20,
    },
    menu_button: {
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 20,
        flexDirection: 'column',
    },
    menu_container: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})