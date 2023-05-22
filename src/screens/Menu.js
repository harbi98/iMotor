import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, ScrollView, Platform, TouchableHighlight } from 'react-native';
import React, {useContext, useState} from 'react';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../public/Style';
import { Button, Divider } from '@rneui/themed';

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;

export default function Menu({navigation}) {
    const {logout} = useContext(AuthContext);

    return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={{flex: 1, width: window_width}}>
            <View
                style={{
                    width: window_width,
                    height: 250,
                    backgroundColor: '#0a5ca8',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <View flexDirection='row' style={{width: '80%', alignItems: 'center'}}>
                    <Image
                        style={{
                            tintColor: '#FFFFFF',
                            marginRight: 3,
                            width: 120,
                            height: 120
                        }}
                        source={require('../../assets/account-circle-outline.png')}
                    />
                    <View style={{flex: 1}}>
                        <Text numberOfLines={1} style={{fontSize: 35, color: '#FFFFFFFF'}}>Hi Juan</Text>
                        <Text numberOfLines={1} style={{fontSize: 35, color: '#FFFFFFFF'}}>Dela Cruz</Text>
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
                <View style={{width: window_width}}>
                    <Text style={{fontSize: 20, color: 'grey', marginBottom: 10, marginLeft: 15}}>My Account</Text>
                    <TouchableHighlight
                        underlayColor={'#ffffff'}
                        activeOpacity={0.3}
                        containerStyle={{
                            height: 50,
                        }}
                        style={{height: 50, justifyContent: 'center'}}
                        onPress={() => navigation.navigate("Profile")}
                    >
                        <View style={{flexDirection: 'row', paddingRight: 30, paddingLeft: 30, justifyContent: 'space-between'}}>
                            <View flexDirection='row' style={{width: '95%', alignItems: 'center'}}>
                                <Image
                                    style={{
                                        tintColor: '#000000',
                                        marginRight: 3,
                                        width: 35,
                                        height: 35
                                    }}
                                    source={require('../../assets/circle-user.png')}
                                />
                                <Text style={{marginLeft: 20}}>Profile</Text>
                            </View>
                            <Image
                                style={{
                                    tintColor: '#000000',
                                    width: 25,
                                    height: 25
                                }}
                                source={require('../../assets/chevron-right.png')}
                            />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={'#ffffff'}
                        activeOpacity={0.3}
                        containerStyle={{
                            height: 50,
                        }}
                        style={{height: 50, justifyContent: 'center'}}
                        onPress={() => navigation.navigate('MyListings')}
                    >
                        <View style={{flexDirection: 'row', paddingRight: 30, paddingLeft: 30, justifyContent: 'space-between'}}>
                            <View flexDirection='row' style={{width: '95%', alignItems: 'center'}}>
                                <Image
                                    style={{
                                        tintColor: '#000000',
                                        marginRight: 3,
                                        width: 35,
                                        height: 35
                                    }}
                                    source={require('../../assets/ballot.png')}
                                />
                                <Text style={{marginLeft: 20}}>My Listings</Text>
                            </View>
                            <Image
                                style={{
                                    tintColor: '#000000',
                                    width: 25,
                                    height: 25
                                }}
                                source={require('../../assets/chevron-right.png')}
                            />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={'#ffffff'}
                        activeOpacity={0.3}
                        containerStyle={{
                            height: 50,
                        }}
                        style={{height: 50, justifyContent: 'center'}}
                        onPress={() => navigation.navigate('Subscription')}
                    >
                        <View style={{flexDirection: 'row', paddingRight: 30, paddingLeft: 30, justifyContent: 'space-between'}}>
                            <View flexDirection='row' style={{width: '95%', alignItems: 'center'}}>
                                <Image
                                    style={{
                                        tintColor: '#000000',
                                        marginRight: 3,
                                        width: 35,
                                        height: 35
                                    }}
                                    source={require('../../assets/money-bills-simple.png')}
                                />
                                <Text style={{marginLeft: 20}}>Subscription</Text>
                            </View>
                            <Image
                                style={{
                                    tintColor: '#000000',
                                    width: 25,
                                    height: 25
                                }}
                                source={require('../../assets/chevron-right.png')}
                            />
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{width: window_width}}>
                    <Text style={{fontSize: 20, color: 'grey', marginBottom: 10, marginLeft: 15}}>Settings</Text>
                    <TouchableHighlight
                        underlayColor={'#ffffff'}
                        activeOpacity={0.3}
                        containerStyle={{
                            height: 50,
                        }}
                        style={{height: 50, justifyContent: 'center'}}
                    >
                        <View style={{flexDirection: 'row', paddingRight: 30, paddingLeft: 30, justifyContent: 'space-between'}}>
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
                                <Text style={{marginLeft: 20}}>City</Text>
                            </View>
                            <Image
                                style={{
                                    tintColor: '#000000',
                                    width: 25,
                                    height: 25
                                }}
                                source={require('../../assets/chevron-right.png')}
                            />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={'#ffffff'}
                        activeOpacity={0.3}
                        containerStyle={{
                            height: 50,
                        }}
                        style={{height: 50, justifyContent: 'center'}}
                    >
                        <View style={{flexDirection: 'row', paddingRight: 30, paddingLeft: 30, justifyContent: 'space-between'}}>
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
                                <Text style={{marginLeft: 20}}>Language</Text>
                            </View>
                            <Image
                                style={{
                                    tintColor: '#000000',
                                    width: 25,
                                    height: 25
                                }}
                                source={require('../../assets/chevron-right.png')}
                            />
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{width: window_width}}>
                    <Text style={{fontSize: 20, color: 'grey', marginBottom: 10, marginLeft: 15}}>Others</Text>
                    <TouchableHighlight
                        underlayColor={'#ffffff'}
                        activeOpacity={0.3}
                        containerStyle={{
                            height: 50,
                        }}
                        style={{height: 50, justifyContent: 'center'}}
                    >
                        <View style={{flexDirection: 'row', paddingRight: 30, paddingLeft: 30, justifyContent: 'space-between'}}>
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
                                <Text style={{marginLeft: 20}}>Support</Text>
                            </View>
                            <Image
                                style={{
                                    tintColor: '#000000',
                                    width: 25,
                                    height: 25
                                }}
                                source={require('../../assets/chevron-right.png')}
                            />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={'#ffffff'}
                        activeOpacity={0.3}
                        containerStyle={{
                            height: 50,
                        }}
                        style={{height: 50, justifyContent: 'center'}}
                    >
                        <View style={{flexDirection: 'row', paddingRight: 30, paddingLeft: 30, justifyContent: 'space-between'}}>
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
                                <Text style={{marginLeft: 20}}>Report an issue</Text>
                            </View>
                            <Image
                                style={{
                                    tintColor: '#000000',
                                    width: 25,
                                    height: 25
                                }}
                                source={require('../../assets/chevron-right.png')}
                            />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={'#ffffff'}
                        activeOpacity={0.3}
                        containerStyle={{
                            height: 50,
                        }}
                        style={{height: 50, justifyContent: 'center'}}
                    >
                        <View style={{flexDirection: 'row', paddingRight: 30, paddingLeft: 30, justifyContent: 'space-between'}}>
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
                                <Text style={{marginLeft: 20}}>Contact Us</Text>
                            </View>
                            <Image
                                style={{
                                    tintColor: '#000000',
                                    width: 25,
                                    height: 25
                                }}
                                source={require('../../assets/chevron-right.png')}
                            />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={'#ffffff'}
                        activeOpacity={0.3}
                        containerStyle={{
                            height: 50,
                        }}
                        style={{height: 50, justifyContent: 'center'}}
                    >
                        <View style={{flexDirection: 'row', paddingRight: 30, paddingLeft: 30, justifyContent: 'space-between'}}>
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
                                <Text style={{marginLeft: 20}}>Terms & Conditions</Text>
                            </View>
                            <Image
                                style={{
                                    tintColor: '#000000',
                                    width: 25,
                                    height: 25
                                }}
                                source={require('../../assets/chevron-right.png')}
                            />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={'#ffffff'}
                        activeOpacity={0.3}
                        containerStyle={{
                            height: 50,
                        }}
                        style={{height: 50, justifyContent: 'center'}}
                    >
                        <View style={{flexDirection: 'row', paddingRight: 30, paddingLeft: 30, justifyContent: 'space-between'}}>
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
                                <Text style={{marginLeft: 20}}>Advertise</Text>
                            </View>
                            <Image
                                style={{
                                    tintColor: '#000000',
                                    width: 25,
                                    height: 25
                                }}
                                source={require('../../assets/chevron-right.png')}
                            />
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{width: window_width}}>
                    <TouchableHighlight
                        underlayColor={'#ffffff'}
                        activeOpacity={0.3}
                        containerStyle={{
                            height: 50,
                        }}
                        style={{height: 50, justifyContent: 'center'}}
                        onPress={() => logout()}
                    >
                        <View style={{flexDirection: 'row', paddingRight: 30, paddingLeft: 30, justifyContent: 'space-between'}}>
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
                                <Text style={{marginLeft: 20}}>Logout</Text>
                            </View>
                            <Image
                                style={{
                                    tintColor: '#000000',
                                    width: 25,
                                    height: 25
                                }}
                                source={require('../../assets/chevron-right.png')}
                            />
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={{marginBottom: Platform.OS === 'ios' ? 70 : 80}}/>
        </ScrollView>
    </SafeAreaView>
    )
}

const custom_styles = StyleSheet.create({})