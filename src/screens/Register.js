import { View, TextInput, StyleSheet, Dimensions, Image, SafeAreaView } from 'react-native';
import { styles } from '../public/Style';
import { Button, Text } from '@rneui/themed';

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;

export default function Register({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image resizeMode='contain' style={custom_style.app_title} source={require('../../assets/iMotor.png')}/>
      <View style={custom_style.form_container}>
        <View flexDirection='row' style={custom_style.field_container}>
          <View style={{paddingRight: 5, width: '50%'}}>
            <Text>First Name</Text>
            <TextInput
              style={custom_style.input}
            />
          </View>
          <View style={{paddingLeft: 5, width: '50%'}}>
            <Text>Last Name</Text>
            <TextInput
              style={custom_style.input}
            />
          </View>
        </View>
        <View style={custom_style.field_container}>
          <Text>Email Address</Text>
          <TextInput
            autoCapitalize='none'
            spellCheck={false}
            style={custom_style.input}
          />
        </View>
        <View style={custom_style.field_container}>
          <Text>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={custom_style.input}
          />
        </View>
        <View style={custom_style.field_container}>
          <Text>Confirm Password</Text>
          <TextInput
            secureTextEntry={true}
            style={custom_style.input}
          />
        </View>
        <View style={{ paddingTop: 10}}>
        <Button
            title="Register"
            onPress={() => console.log('Button pressed')}
            buttonStyle={custom_style.register_button}
            titleStyle={{ fontSize: 15 }}
          />
          <View 
            flexDirection='row' 
            style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}
          >
            <Text>Already have an account?</Text>
            <Button
              title="Login"
              onPress={() => navigation.navigate('Login')}
              type='clear'
              titleStyle={{ color: '#0300A4', fontSize: 15, }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const custom_style = StyleSheet.create({
  app_title: {
    width: window_width * 0.9,
    height: window_height * 0.20,
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
  form_container: {
    width: window_width * 0.8,
  },
  register_button: {
    backgroundColor: '#0a5ca8',
    width: '100%',
    height: 60,
    borderRadius: 20,
  },
  field_container: {
    marginTop: 10
  }
});