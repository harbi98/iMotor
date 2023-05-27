import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image, Platform, StatusBar } from 'react-native';
import React from 'react';
import { styles } from '../../public/Style';
import { SearchBar, Button, Divider } from '@rneui/themed';

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;

export default function Favorites() {
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
                borderBottomColor: '#D3D3D3',
                paddingBottom: 10,
            }}
        >
            <SearchBar
                platform='ios'
                placeholder='Search favorites'
                containerStyle={{width: window_width - 20, height: 40}}
                inputContainerStyle={{height: 40}}
            />
        </View>
        <ScrollView style={{flex: 1, width: window_width}}>
            <View
            flexDirection='row'
            style={{
                    width: '100%', 
                    height: 125, 
                    paddingLeft: 15, 
                    paddingRight: 15, 
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: '#D3D3D3'
                }}
            >
                <View style={{backgroundColor: 'grey', width: 100, height: 100}}>

                </View>
                <View style={{
                    flex: 1, 
                    marginLeft: 15, 
                    height: 100, 
                    justifyContent: 'space-between',
                }}>
                    <Text>Title</Text>
                    <View style={{width: '100%'}}>
                        <View flexDirection='row' style={{width: '100%'}}>
                            <View flexDirection='row' style={{width: '50%'}}>
                                <Text>Year </Text>
                                <Text>2023</Text>
                            </View>
                            <View flexDirection='row' style={{width: '50%'}}>
                                <Text>KMS </Text>
                                <Text>12,123</Text>
                            </View>
                        </View>
                        <View>
                        <Text>Posted on 24 Jul, 2023</Text>
                    </View>
                    </View>
                    <Text>Price</Text>
                </View>
                <Button type='clear'>
                    <Image 
                        style={{tintColor: 'red', width: 30, height: 30, marginRight: 3}} 
                        source={require('../../../assets/trash-can.png')}
                    />
                </Button>
            </View>
            <View
                flexDirection='row'
                style={{
                        width: '100%', 
                        height: 125, 
                        paddingLeft: 15, 
                        paddingRight: 15, 
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: '#D3D3D3'
                    }}
                >
                <View style={{backgroundColor: 'grey', width: 100, height: 100}}>

                </View>
                <View style={{
                    flex: 1, 
                    marginLeft: 15, 
                    height: 100, 
                    justifyContent: 'space-between',
                }}>
                    <Text>Title</Text>
                    <View style={{width: '100%'}}>
                        <View flexDirection='row' style={{width: '100%'}}>
                            <View flexDirection='row' style={{width: '50%'}}>
                                <Text>Year </Text>
                                <Text>2023</Text>
                            </View>
                            <View flexDirection='row' style={{width: '50%'}}>
                                <Text>KMS </Text>
                                <Text>12,123</Text>
                            </View>
                        </View>
                        <View>
                        <Text>Posted on 24 Jul, 2023</Text>
                    </View>
                    </View>
                    <Text>Price</Text>
                </View>
                <Button type='clear'>
                    <Image 
                        style={{tintColor: 'red', width: 30, height: 30, marginRight: 3}} 
                        source={require('../../../assets/trash-can.png')}
                    />
                </Button>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const custom_styles = StyleSheet.create({})