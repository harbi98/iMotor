import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, ImageBackground, Image, TextInput } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import React from 'react';
import { styles } from '../public/Style';
import {LinearGradient} from 'expo-linear-gradient';

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;

export default function AddListing() {
  return (
    <SafeAreaView style={styles.container}>
        <LinearGradient
            // Background Linear Gradient
            colors={['red', 'transparent']}
            style={styles.background}
        />
        <View style={{width: window_width, alignItems: 'center', marginTop: 10}}>
            <Text>Create Listing</Text>
        </View>
        <View style={custom_style.container}>
            <View style={{flex: 1, width: window_width * 0.9}}>
                <ProgressSteps
                    labelFontSize={10}
                >
                    <ProgressStep
                        label="Vehicle Details"
                        nextBtnText="Proceed"
                        nextBtnStyle={custom_style.form_btn}
                        nextBtnTextStyle={custom_style.form_btn_txt}
                    >
                        <View style={{alignItems: 'center'}}>
                            <View style={custom_style.form_container}>
                                <Text>Brand</Text>
                                <TextInput
                                    autoCapitalize='none'
                                    style={custom_style.input}
                                />
                                <View flexDirection='row' style={{width: '100%'}}>
                                    <View style={{flex: 1, paddingRight: 5}}>
                                        <Text>Model</Text>
                                        <TextInput
                                            autoCapitalize='none'
                                            style={custom_style.input}
                                        />
                                    </View>
                                    <View style={{flex: 1, paddingLeft: 5}}>
                                        <Text>Year Model</Text>
                                        <TextInput
                                            autoCapitalize='none'
                                            style={custom_style.input}
                                        />
                                    </View>
                                </View>
                                <Text>Variant</Text>
                                <TextInput
                                    autoCapitalize='none'
                                    style={custom_style.input}
                                />
                                <Text>Mileage</Text>
                                <TextInput
                                    autoCapitalize='none'
                                    style={custom_style.input}
                                />
                                <Text>Price</Text>
                                <TextInput
                                    autoCapitalize='none'
                                    style={custom_style.input}
                                />
                            </View>
                        </View>
                    </ProgressStep>
                    <ProgressStep
                        label="Engine" 
                        previousBtnStyle={custom_style.form_btn} 
                        nextBtnStyle={custom_style.form_btn}
                        nextBtnTextStyle={custom_style.form_btn_txt}
                        previousBtnTextStyle={custom_style.form_btn_txt}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <View style={custom_style.form_container}>
                                    <View flexDirection='row' style={{width: '100%'}}>
                                        <View style={{flex: 1, paddingRight: 5}}>
                                            <Text>Fuel Type</Text>
                                            <TextInput
                                                autoCapitalize='none'
                                                style={custom_style.input}
                                            />
                                        </View>
                                        <View style={{flex: 1, paddingLeft: 5}}>
                                            <Text>Fuel Capacity</Text>
                                            <TextInput
                                                autoCapitalize='none'
                                                style={custom_style.input}
                                            />
                                        </View>
                                    </View>
                                    <Text>Transmission</Text>
                                    <TextInput
                                        autoCapitalize='none'
                                        style={custom_style.input}
                                    />
                                    <View flexDirection='row' style={{width: '100%'}}>
                                        <View style={{flex: 1, paddingRight: 5}}>
                                            <Text>Maximum Output (HP)</Text>
                                            <TextInput
                                                autoCapitalize='none'
                                                style={custom_style.input}
                                            />
                                        </View>
                                        <View style={{flex: 1, paddingLeft: 5}}>
                                            <Text>Maximum Torque</Text>
                                            <TextInput
                                                autoCapitalize='none'
                                                style={custom_style.input}
                                            />
                                        </View>
                                    </View>
                                    <View flexDirection='row' style={{width: '100%'}}>
                                        <View style={{flex: 1, paddingRight: 5}}>
                                            <Text>Engine Size</Text>
                                            <TextInput
                                                autoCapitalize='none'
                                                style={custom_style.input}
                                            />
                                        </View>
                                        <View style={{flex: 1, paddingLeft: 5}}>
                                            <Text>Displacement</Text>
                                            <TextInput
                                                autoCapitalize='none'
                                                style={custom_style.input}
                                            />
                                        </View>
                                    </View>
                                    <Text>Drivetrain</Text>
                                    <TextInput
                                        autoCapitalize='none'
                                        style={custom_style.input}
                                    />
                                    <View flexDirection='row' style={{width: '100%'}}>
                                        <View style={{flex: 1, paddingRight: 5}}>
                                            <Text>Number of Cylinders</Text>
                                            <TextInput
                                                autoCapitalize='none'
                                                style={custom_style.input}
                                            />
                                        </View>
                                        <View style={{flex: 1, paddingLeft: 5}}>
                                            <Text>Number of Valves</Text>
                                            <TextInput
                                                autoCapitalize='none'
                                                style={custom_style.input}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ProgressStep>
                    <ProgressStep
                        label="Amenities" 
                        previousBtnStyle={custom_style.form_btn} 
                        nextBtnStyle={custom_style.form_btn}
                        nextBtnTextStyle={custom_style.form_btn_txt}
                        previousBtnTextStyle={custom_style.form_btn_txt}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <View style={custom_style.form_container}>
                                    
                                </View>
                            </View>
                        </View>
                    </ProgressStep>
                </ProgressSteps>
            </View>
        </View>
    </SafeAreaView>
  )
}

const custom_style = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 60,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 1000,
    },
    imagebackground: {
        height: window_width * 0.5,
        width: window_width * 0.9,
        marginTop: 20,
    },
    form_container: {
        marginTop: 10,
        flex: 1,
        width: window_width * 0.9,
    },
    input: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        height: 60,
        borderColor: '#D7D7D7',
        marginTop: 5,
    },
    form_btn_proceed: {
        width: 100, 
        height: 40, 
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#8bc63f',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 30,
        marginRight: 50,
        marginBottom: 30
    },
    form_btn: {
        width: 100, 
        height: 40, 
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#8bc63f',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 30,
        marginRight: -30,
        marginLeft: -30,
    },
    form_btn_txt: {
        color: '#ffffff',
        fontSize: 14
    }
})


{/* <ImageBackground source={require('../../assets/image-placeholder.jpg')} resizeMode='cover' style={custom_style.imagebackground}>
    
</ImageBackground>
<View style={{width: window_width * 0.9, alignItems: 'flex-end', paddingRight: 20, marginTop: -25}}>
    <Button
        buttonStyle={{backgroundColor: '#8bc63f'}}
        containerStyle={{width: 50, height: 50, borderRadius: 25}}
    >
        <Image
            style={{
                tintColor: '#ffffff',
                width: 35,
                height: 35
            }}
            source={require('../../assets/arrow-small-up.png')}
        />
    </Button>
</View> */}