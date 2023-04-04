import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, ScrollView } from 'react-native';
import React from 'react';
import { styles } from '../public/Style';
import { Button, Divider } from '@rneui/themed';

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;

export default function Menu({navigation}) {
  return (
    <View style={styles.container}>
        <ScrollView style={{flex: 1, width: window_width}}>
            <View
                style={{
                    width: window_width,
                    height: 300,
                    backgroundColor: '#0a5ca8',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: 50
                }}
            >
                <View flexDirection='row' style={{width: '80%', alignItems: 'center'}}>
                    <Image
                        style={{
                            tintColor: '#FFFFFFFF',
                            marginRight: 3,
                            width: 120,
                            height: 120
                        }}
                        source={require('../../assets/account-circle-outline.png')}
                    />
                    <View style={{flex: 1}}>
                        <Text numberOfLines={1} style={{fontSize: 35, color: '#FFFFFFFF'}}>Hi Juan Dela</Text>
                        <Text numberOfLines={1} style={{fontSize: 35, color: '#FFFFFFFF'}}>Cruz</Text>
                        <Text numberOfLines={1} style={{fontSize: 15, color: '#FFFFFFFF'}}>example@email.com</Text>
                    </View>
                </View>
                <View flexDirection='row' style={{width: '80%', height: 50, backgroundColor: '#FFFFFFFF', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#0a5ca8', marginRight: 10, marginLeft: 10}}>Verified Account</Text>
                    <Image
                        style={{
                            tintColor: '#0a5ca8',
                            marginRight: 3,
                            width: 20,
                            height: 20
                        }}
                        source={require('../../assets/check-decagram.png')}
                    />
                </View>
            </View>
            <View style={{flex: 1, alignItems: 'center', marginTop: 10}}>
                <View style={{width: window_width * 0.9}}>
                    <Text style={{fontSize: 20, color: 'grey', marginBottom: 10}}>My Account</Text>
                    <Button type='clear'>
                        <View flexDirection='row' style={{width: '95%', alignItems: 'center'}}>
                            <Image
                                style={{
                                    tintColor: '#000000',
                                    marginRight: 3,
                                    width: 35,
                                    height: 35
                                }}
                                source={require('../../assets/account-box-outline.png')}
                            />
                            <Text>Profile</Text>
                        </View>
                        <Image
                            style={{
                                tintColor: '#000000',
                                marginRight: 3,
                                width: 35,
                                height: 35
                            }}
                            source={require('../../assets/chevron-right.png')}
                        />
                    </Button>
                    <Button type='clear'>
                        <View flexDirection='row' style={{width: '95%', alignItems: 'center'}}>
                            <Image
                                style={{
                                    tintColor: '#000000',
                                    marginRight: 3,
                                    width: 35,
                                    height: 35
                                }}
                                source={require('../../assets/list-box-outline.png')}
                            />
                            <Text>My Listings</Text>
                        </View>
                        <Image
                            style={{
                                tintColor: '#000000',
                                marginRight: 3,
                                width: 35,
                                height: 35
                            }}
                            source={require('../../assets/chevron-right.png')}
                        />
                    </Button>
                </View>
                <Divider 
                    style={{ width: window_width * 0.95, marginTop: 2, marginBottom: 10 }}
                    width='1'
                />
                <View style={{width: window_width * 0.9}}>
                    <Text style={{fontSize: 20, color: 'grey', marginBottom: 10}}>Settings</Text>
                    <Button type='clear'>
                        <View flexDirection='row' style={{width: '95%', alignItems: 'center'}}>
                            <Image
                                style={{
                                    tintColor: '#000000',
                                    marginRight: 3,
                                    width: 35,
                                    height: 35
                                }}
                                source={require('../../assets/city-variant-outline.png')}
                            />
                            <Text>City</Text>
                        </View>
                        <Image
                            style={{
                                tintColor: '#000000',
                                marginRight: 3,
                                width: 35,
                                height: 35
                            }}
                            source={require('../../assets/chevron-right.png')}
                        />
                    </Button>
                    <Button type='clear'>
                        <View flexDirection='row' style={{width: '95%', alignItems: 'center'}}>
                            <Image
                                style={{
                                    tintColor: '#000000',
                                    marginRight: 3,
                                    width: 35,
                                    height: 35
                                }}
                                source={require('../../assets/translate.png')}
                            />
                            <Text>Language</Text>
                        </View>
                        <Image
                            style={{
                                tintColor: '#000000',
                                marginRight: 3,
                                width: 35,
                                height: 35
                            }}
                            source={require('../../assets/chevron-right.png')}
                        />
                    </Button>
                </View>
                <Divider 
                    style={{ width: window_width * 0.95, marginTop: 2, marginBottom: 10 }}
                    width='1'
                />
                <View style={{width: window_width * 0.9}}>
                    <Text style={{fontSize: 20, color: 'grey', marginBottom: 10}}>Others</Text>
                    <Button type='clear'>
                        <View flexDirection='row' style={{width: '95%', alignItems: 'center'}}>
                            <Image
                                style={{
                                    tintColor: '#000000',
                                    marginRight: 3,
                                    width: 35,
                                    height: 35
                                }}
                                source={require('../../assets/face-agent.png')}
                            />
                            <Text>Support</Text>
                        </View>
                        <Image
                            style={{
                                tintColor: '#000000',
                                marginRight: 3,
                                width: 35,
                                height: 35
                            }}
                            source={require('../../assets/chevron-right.png')}
                        />
                    </Button>
                    <Button type='clear'>
                        <View flexDirection='row' style={{width: '95%', alignItems: 'center'}}>
                            <Image
                                style={{
                                    tintColor: '#000000',
                                    marginRight: 3,
                                    width: 35,
                                    height: 35
                                }}
                                source={require('../../assets/bug.png')}
                            />
                            <Text>Report an issue</Text>
                        </View>
                        <Image
                            style={{
                                tintColor: '#000000',
                                marginRight: 3,
                                width: 35,
                                height: 35
                            }}
                            source={require('../../assets/chevron-right.png')}
                        />
                    </Button>
                    <Button type='clear'>
                        <View flexDirection='row' style={{width: '95%', alignItems: 'center'}}>
                            <Image
                                style={{
                                    tintColor: '#000000',
                                    marginRight: 3,
                                    width: 35,
                                    height: 35
                                }}
                                source={require('../../assets/phone-outline.png')}
                            />
                            <Text>Call us</Text>
                        </View>
                        <Image
                            style={{
                                tintColor: '#000000',
                                marginRight: 3,
                                width: 35,
                                height: 35
                            }}
                            source={require('../../assets/chevron-right.png')}
                        />
                    </Button>
                    <Button type='clear'>
                        <View flexDirection='row' style={{width: '95%', alignItems: 'center'}}>
                            <Image
                                style={{
                                    tintColor: '#000000',
                                    marginRight: 3,
                                    width: 35,
                                    height: 35
                                }}
                                source={require('../../assets/text-box-outline.png')}
                            />
                            <Text>Terms & Conditions</Text>
                        </View>
                        <Image
                            style={{
                                tintColor: '#000000',
                                marginRight: 3,
                                width: 35,
                                height: 35
                            }}
                            source={require('../../assets/chevron-right.png')}
                        />
                    </Button>
                    <Button type='clear'>
                        <View flexDirection='row' style={{width: '95%', alignItems: 'center'}}>
                            <Image
                                style={{
                                    tintColor: '#000000',
                                    marginRight: 3,
                                    width: 35,
                                    height: 35
                                }}
                                source={require('../../assets/advertisements.png')}
                            />
                            <Text>Advertise with us</Text>
                        </View>
                        <Image
                            style={{
                                tintColor: '#000000',
                                marginRight: 3,
                                width: 35,
                                height: 35
                            }}
                            source={require('../../assets/chevron-right.png')}
                        />
                    </Button>
                </View>
                <Divider 
                    style={{ width: window_width * 0.95, marginTop: 2, marginBottom: 2 }}
                    width='1'
                />
                <View style={{width: window_width * 0.9}}>
                    <Button type='clear' onPress={() => navigation.navigate('Login')}>
                        <View flexDirection='row' style={{width: '95%', alignItems: 'center'}}>
                            <Image
                                style={{
                                    tintColor: '#000000',
                                    marginRight: 3,
                                    width: 35,
                                    height: 35
                                }}
                                source={require('../../assets/logout.png')}
                            />
                            <Text>Logout</Text>
                        </View>
                        <Image
                            style={{
                                tintColor: '#FFFFFFFF',
                                marginRight: 3,
                                width: 35,
                                height: 35
                            }}
                            source={require('../../assets/logout.png')}
                        />
                    </Button>
                </View>
            </View>
            <View style={{height: 130}}>
                {/* Blank space */}
            </View>
        </ScrollView>
    </View>
  )
}

const custom_styles = StyleSheet.create({})