import { StyleSheet, Text, View, TextInput, ScrollView, Platform, Dimensions, TouchableHighlight, Image, StatusBar, ImageBackground } from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL, processResponse } from '../config';
import { styles } from '../public/Style';
import { value, Input } from "@rneui/base";
import { Button } from '@rneui/themed';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as ImagePicker from 'expo-image-picker';

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;

export default function Profile({navigation}) {
  const {userToken} = useContext(AuthContext);

  const [editOn, setEditOn] = useState(false);

  const [firstName, setFirstName] = useState();
  const [photo, setPhoto] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [whatsapp, setWhatsapp] = useState();
  const [viber, setViber] = useState();
  const [streetName, setStreetName] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [province, setProvince] = useState();
  const [zipCode, setZipCode] = useState();

  const handleEditOn = (status) => {
    if(status) {
      setEditOn(false)
    } else {
      setEditOn(true)
    }
  }
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
        base64: true
    });

    if (!result.canceled) {
    setPhoto('data:image/jpg;base64,'+result.assets[0].base64);
    }
  };
  const getProfileInfo = () => {
    try{
        fetch(BASE_URL+'profile',{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`,
            },
        })
        .then(processResponse)
        .then(res => {
            const { statusCode, data } = res;
            setFirstName(data.user.first_name);
            setLastName(data.user.last_name);
            setEmail(data.user.email);
            setPhone(data.user.contact);
            setWhatsapp(data.user.whatsapp_number);
            setViber(data.user.viber_number);
            setStreetName(data.user.street);
            setCity(data.user.city);
            setCountry(data.user.country);
            setProvince(data.user.state_province);
            setZipCode(data.user.zip);
            setPhoto(data.user.photo);
        })
        .catch((e) => {
            console.log(e)
        })
    } catch (e){
        console.log(e);
    }
  }
  useEffect(() => {
    getProfileInfo()
  }, [])
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
          paddingTop: Platform.OS === 'ios' ? 50: 0,
          backgroundColor: '#0a5ca8',
      }}>
        <TouchableHighlight
            underlayColor={'trasparent'}
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
        <Text style={{color: '#ffffff', fontSize: 20, fontWeight: '600'}}>Profile</Text>
        <TouchableHighlight
            underlayColor={'trasparent'}
            style={{
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={() => handleEditOn(editOn)}
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
              <Text style={{color: '#ffffff', fontSize: 16, fontWeight: '600'}}>{editOn ? 'Save' : 'Edit'}</Text>
            </View>
        </TouchableHighlight>
      </View>
      <KeyboardAwareScrollView>
        <View
            style={{
                width: window_width,
                height: 250,
                paddingTop: 20,
                backgroundColor: '#0a5ca8',
                alignItems: 'center',
                //justifyContent: 'center',
            }}
        >
          <ImageBackground
            source={photo ? {uri: photo} : require('../../assets/empty-avatar.png')}
            style={{width: 200, height: 200, borderRadius: 100, backgroundColor: '#C0C0C0', justifyContent: 'flex-end', alignItems: 'flex-end'}}
            imageStyle={{borderRadius: 100}}
          >
            <Button
                type="solid"
                buttonStyle={{width: 50, height: 50}}
                containerStyle={{width: 50, height: 50, borderRadius: 25}}
                onPress={() => pickImage()}
            >
                <View>
                    <Image source={require('../../assets/gallery.png')} style={{width: 25, height: 25, tintColor: '#fff'}}/>
                </View>
            </Button>
          </ImageBackground>
        </View>
        <View style={custom_style.form_container}>
            <View style={custom_style.form_divider_container}>
              <Text style={{fontSize: 24, fontWeight: 'bold', color: '#a3a3a3'}}>Personal Information</Text>
            </View>
            <View style={custom_style.form_field_container}>
              <Input
                containerStyle={{}}
                disabledInputStyle={{ background: "#ddd" }}
                labelStyle={{marginBottom: 10}}
                label="First Name"
                rightIconContainerStyle={{}}
                placeholder="Enter First Name"
                inputContainerStyle={{paddingRight: 10, paddingLeft: 10}}
                disabled={!editOn}
                value={firstName}
                //onChangeText={(e) => console.log(e)}
              />
              <Input
                containerStyle={{}}
                disabledInputStyle={{ background: "#ddd" }}
                labelStyle={{marginBottom: 10}}
                label="Last Name"
                rightIconContainerStyle={{}}
                placeholder="Enter Last Name"
                inputContainerStyle={{paddingRight: 10, paddingLeft: 10}}
                disabled={!editOn}
                value={lastName}
              />
              <Input
                containerStyle={{}}
                disabledInputStyle={{ background: "#ddd" }}
                labelStyle={{marginBottom: 10}}
                label="Email"
                rightIconContainerStyle={{}}
                placeholder="Enter Email"
                inputContainerStyle={{paddingRight: 10, paddingLeft: 10}}
                disabled={true} //disabled={!editOn}
                value={email}
              />
              <Input
                containerStyle={{}}
                disabledInputStyle={{ background: "#ddd" }}
                labelStyle={{marginBottom: 10}}
                label="Phone"
                rightIconContainerStyle={{}}
                placeholder="Enter Phone"
                inputContainerStyle={{paddingRight: 10, paddingLeft: 10}}
                disabled={!editOn}
                value={phone}
              />
              <Input
                containerStyle={{}}
                disabledInputStyle={{ background: "#ddd" }}
                labelStyle={{marginBottom: 10}}
                label="Whatsapp"
                rightIconContainerStyle={{}}
                placeholder="Enter Whatsapp"
                inputContainerStyle={{paddingRight: 10, paddingLeft: 10}}
                disabled={!editOn}
                value={whatsapp}
              />
              <Input
                containerStyle={{}}
                disabledInputStyle={{ background: "#ddd" }}
                labelStyle={{marginBottom: 10}}
                label="Viber"
                rightIconContainerStyle={{}}
                placeholder="Enter Viber"
                inputContainerStyle={{paddingRight: 10, paddingLeft: 10}}
                disabled={!editOn}
                value={viber}
              />
            </View>
            <View style={custom_style.form_divider_container}>
              <Text style={{fontSize: 24, fontWeight: 'bold', color: '#a3a3a3'}}>Address</Text>
            </View>
            <View style={custom_style.form_field_container}>
              <Input
                containerStyle={{}}
                disabledInputStyle={{ background: "#ddd" }}
                labelStyle={{marginBottom: 10}}
                label="Street Name"
                rightIconContainerStyle={{}}
                placeholder="Enter Street Name"
                inputContainerStyle={{paddingRight: 10, paddingLeft: 10}}
                disabled={!editOn}
                value={streetName}
              />
              <Input
                containerStyle={{}}
                disabledInputStyle={{ background: "#ddd" }}
                labelStyle={{marginBottom: 10}}
                label="City"
                rightIconContainerStyle={{}}
                placeholder="Enter City"
                inputContainerStyle={{paddingRight: 10, paddingLeft: 10}}
                disabled={!editOn}
                value={city}
              />
              <Input
                containerStyle={{}}
                disabledInputStyle={{ background: "#ddd" }}
                labelStyle={{marginBottom: 10}}
                label="Country"
                rightIconContainerStyle={{}}
                placeholder="Enter Country"
                inputContainerStyle={{paddingRight: 10, paddingLeft: 10}}
                disabled={!editOn}
                value={country}
              />
              <Input
                containerStyle={{}}
                disabledInputStyle={{ background: "#ddd" }}
                labelStyle={{marginBottom: 10}}
                label="State or Province"
                rightIconContainerStyle={{}}
                placeholder="Enter State or Province"
                inputContainerStyle={{paddingRight: 10, paddingLeft: 10}}
                disabled={!editOn}
                value={province}
              />
              <Input
                containerStyle={{}}
                disabledInputStyle={{ background: "#ddd" }}
                labelStyle={{marginBottom: 10}}
                label="Zip Code"
                rightIconContainerStyle={{}}
                placeholder="Enter Zip Code"
                inputContainerStyle={{paddingRight: 10, paddingLeft: 10}}
                disabled={!editOn}
                value={zipCode}
              />
            </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}

const custom_style = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    height: 40,
    borderColor: '#D7D7D7',
    marginTop: 5,
  },
  form_container: {
      width: '100%',
      alignItems: 'center',
      padding: 10,
      paddingTop: 40,
      backgroundColor: '#fff'
  },
  form_field_container: {
    width: '90%',
  },
  form_divider_container: {
    width: '90%',
    //borderBottomWidth: 1
    paddingBottom: 20
  },
})