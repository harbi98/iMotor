import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image, TouchableHighlight, StatusBar, Platform } from 'react-native';
import React from 'react';
import { styles } from '../public/Style';
import { SearchBar, Button } from '@rneui/themed';

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;

export default function Chat() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
            backgroundColor="#ffffff"
            barStyle={'dark-content'}
        />
        <View
            flexDirection='row'
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: window_width,
                borderBottomWidth: 1,
                borderBottomColor: '#d3d3d3',
                paddingTop: 3,
                paddingBottom: 10,
            }}
        >
            <SearchBar
                platform='ios'
                placeholder='Search messages'
                containerStyle={{width: window_width - 20, height: 40}}
                inputContainerStyle={{height: 40}}
            />
        </View>
        {/* <Divider 
            style={{ width: window_width * 0.9, marginTop: 2, marginBottom: 15 }}
            width='1'
        /> */}
        <ScrollView style={{flex: 1, width: window_width}}>
            <TouchableHighlight
                underlayColor={'#ffffff'}
                activeOpacity={0.2}
                style={{borderBottomWidth: 1, borderBottomColor: '#f3f3f3'}}
                onPress={() => console.log('pressed')}
            >
                <View
                flexDirection='row' 
                style={{
                    width: window_width, 
                    alignItems: 'center', 
                    paddingLeft: 15, 
                    paddingRight: 15,
                    padding: 10
                }}>
                    <Image
                        style={{
                            marginRight: 3,
                            width: 70,
                            height: 70,
                            borderRadius: 35
                        }}
                        source={require('../../assets/person1.png')}
                    />
                    <View style={{flex: 1, paddingLeft: 20}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>John Do</Text>
                        <Text numberOfLines={2}>Lorem ipsum dolor sit amet. Et iusto rerum et voluptas tempora ut sint reprehenderit nam odio fuga.</Text>
                    </View>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor={'#ffffff'}
                activeOpacity={0.2}
                style={{borderBottomWidth: 1, borderBottomColor: '#f3f3f3'}}
                onPress={() => console.log('pressed')}
            >
                <View
                flexDirection='row' 
                style={{
                    width: window_width, 
                    alignItems: 'center', 
                    paddingLeft: 15, 
                    paddingRight: 15,
                    padding: 10
                }}>
                    <Image
                        style={{
                            marginRight: 3,
                            width: 70,
                            height: 70,
                            borderRadius: 35
                        }}
                        source={require('../../assets/person2.png')}
                    />
                    <View style={{flex: 1, paddingLeft: 20}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Ronny Pierre</Text>
                        <Text numberOfLines={2}>Lorem ipsum dolor sit amet.</Text>
                    </View>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor={'#ffffff'}
                activeOpacity={0.2}
                style={{borderBottomWidth: 1, borderBottomColor: '#f3f3f3'}}
                onPress={() => console.log('pressed')}
            >
                <View
                flexDirection='row' 
                style={{
                    width: window_width, 
                    alignItems: 'center', 
                    paddingLeft: 15, 
                    paddingRight: 15,
                    padding: 10
                }}>
                    <Image
                        style={{
                            marginRight: 3,
                            width: 70,
                            height: 70,
                            borderRadius: 35
                        }}
                        source={require('../../assets/person3.png')}
                    />
                    <View style={{flex: 1, paddingLeft: 20}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Miguel Jones</Text>
                        <Text numberOfLines={2}>Et iusto rerum et voluptas tempora ut sint reprehenderit nam odio fuga.</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </ScrollView>
    </SafeAreaView>
  )
}

const custom_style = StyleSheet.create({})