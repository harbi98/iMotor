import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, ScrollView } from 'react-native';
import React, {useContext} from 'react';
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
                            tintColor: '#FFFFFFFF',
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
                    <Button
                        type='clear'
                        buttonStyle={{
                            height: 70
                        }}
                        onPress={() => navigation.navigate("Profile")}
                    >
                        <View flexDirection='row' style={{width: '95%', alignItems: 'center', paddingHorizontal: 20}}>
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
                    <Button
                        type='clear'
                        buttonStyle={{
                            height: 70
                        }}
                    >
                        <View flexDirection='row' style={{width: '95%', alignItems: 'center', paddingHorizontal: 20}}>
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
                <View style={{width: window_width}}>
                    <Text style={{fontSize: 20, color: 'grey', marginBottom: 10, marginLeft: 15}}>Settings</Text>
                    <Button
                        type='clear'
                        buttonStyle={{
                            height: 70
                        }}
                    >
                        <View flexDirection='row' style={{width: '95%', alignItems: 'center', paddingHorizontal: 20}}>
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
                    <Button
                        type='clear'
                        buttonStyle={{
                            height: 70
                        }}
                    >
                        <View flexDirection='row' style={{width: '95%', alignItems: 'center', paddingHorizontal: 20}}>
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
                <View style={{width: window_width}}>
                    <Text style={{fontSize: 20, color: 'grey', marginBottom: 10, marginLeft: 15}}>Others</Text>
                    <Button
                        type='clear'
                        buttonStyle={{
                            height: 70
                        }}
                    >
                        <View flexDirection='row' style={{width: '95%', alignItems: 'center', paddingHorizontal: 20}}>
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
                    <Button
                        type='clear'
                        buttonStyle={{
                            height: 70
                        }}
                    >
                        <View flexDirection='row' style={{width: '95%', alignItems: 'center', paddingHorizontal: 20}}>
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
                    <Button
                        type='clear'
                        buttonStyle={{
                            height: 70
                        }}
                    >
                        <View flexDirection='row' style={{width: '95%', alignItems: 'center', paddingHorizontal: 20}}>
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
                    <Button
                        type='clear'
                        buttonStyle={{
                            height: 70
                        }}
                    >
                        <View flexDirection='row' style={{width: '95%', alignItems: 'center', paddingHorizontal: 20}}>
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
                    <Button
                        type='clear'
                        buttonStyle={{
                            height: 70
                        }}
                    >
                        <View flexDirection='row' style={{width: '95%', alignItems: 'center', paddingHorizontal: 20}}>
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
                <View style={{width: window_width}}>
                    <Button
                        type='clear'
                        buttonStyle={{
                            height: 70
                        }}
                        onPress={() => logout()}
                    >
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
                    </Button>
                </View>
            </View>
            <View style={{height: 80}}>
                {/* Blank space */}
            </View>
        </ScrollView>
    </SafeAreaView>
    )
}

const custom_styles = StyleSheet.create({})