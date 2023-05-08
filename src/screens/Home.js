import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, ScrollView } from 'react-native';
import React from 'react';
import { styles } from '../public/Style';
import { SearchBar, Button, Divider } from '@rneui/themed';

const window_width = Dimensions.get('window').width;

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
        <View
            flexDirection='row'
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: window_width,
            }}
        >
            <SearchBar platform='ios' placeholder='Search listing' containerStyle={{width: window_width - 75,}}/>
            <Button type='clear'>
                <Image
                    style={{
                        tintColor: '#000000',
                        marginRight: 3,
                        width: 30,
                        height: 30
                    }}
                    source={require('../../assets/bell.png')}
                />
            </Button>
        </View>
        {/* <Divider 
            style={{ width: window_width * 0.9, marginTop: 2, marginBottom: 2 }}
            width='1'
        /> */}
        {/* <Divider 
            style={{ width: window_width * 0.9, marginTop: 2, marginBottom: 20 }}
            width='1'
        /> */}
        <View style={{width: window_width, alignItems: 'center', marginBottom: 20}}>
            <View
                flexDirection='row'
                style={{ width: window_width * 0.9, justifyContent: 'space-between' }}
            >
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Picks for you</Text>
                <Image
                    style={{
                        tintColor: '#000000',
                        marginRight: 3,
                        width: 30,
                        height: 30
                    }}
                    source={require('../../assets/arrow-right.png')}
                />
            </View>
            <ScrollView horizontal={true} style={{width: window_width * 0.9}}>
                <View style={{height: 150, width: 150, backgroundColor: 'grey', borderRadius: 20, marginRight: 15}}>
                </View>
                <View style={{height: 150, width: 150, backgroundColor: 'grey', borderRadius: 20, marginRight: 15}}>
                </View>
                <View style={{height: 150, width: 150, backgroundColor: 'grey', borderRadius: 20, marginRight: 15}}>
                </View>
            </ScrollView>
        </View>
        {/* <Divider 
            style={{ width: window_width * 0.9, marginTop: 2, marginBottom: 20 }}
            width='1'
        /> */}
        <View style={{flex: 1,width: window_width * 0.9, marginBottom: 10}}>
            <View flexDirection='row' style={{justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Car Brands</Text>
                <View flexDirection='row' style={{alignItems: 'center'}}>
                    <Text>Browse More</Text>
                    <Image
                        style={{
                            tintColor: '#000000',
                            marginRight: 3,
                            width: 20,
                            height: 20
                        }}
                        source={require('../../assets/arrow-right.png')}
                    />
                </View>
            </View>
            <View style={{justifyContent: 'space-evenly', height: window_width * 0.9}}>
                <View flexDirection='row' style={{justifyContent: 'space-evenly'}}>
                    <View style={{width: window_width * 0.28, height: window_width * 0.28, borderRadius: 20, backgroundColor: 'red'}}></View>
                    <View style={{width: window_width * 0.28, height: window_width * 0.28, borderRadius: 20, backgroundColor: 'grey'}}></View>
                    <View style={{width: window_width * 0.28, height: window_width * 0.28, borderRadius: 20, backgroundColor: 'grey'}}></View>
                </View>
                <View flexDirection='row' style={{justifyContent: 'space-evenly'}}>
                    <View style={{width: window_width * 0.28, height: window_width * 0.28, borderRadius: 20, backgroundColor: 'grey'}}></View>
                    <View style={{width: window_width * 0.28, height: window_width * 0.28, borderRadius: 20, backgroundColor: 'grey'}}></View>
                    <View style={{width: window_width * 0.28, height: window_width * 0.28, borderRadius: 20, backgroundColor: 'grey'}}></View>
                </View>
                <View flexDirection='row' style={{justifyContent: 'space-evenly'}}>
                    <View style={{width: window_width * 0.28, height: window_width * 0.28, borderRadius: 20, backgroundColor: 'grey'}}></View>
                    <View style={{width: window_width * 0.28, height: window_width * 0.28, borderRadius: 20, backgroundColor: 'grey'}}></View>
                    <View style={{width: window_width * 0.28, height: window_width * 0.28, borderRadius: 20, backgroundColor: 'grey'}}></View>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

const custom_style = StyleSheet.create({})