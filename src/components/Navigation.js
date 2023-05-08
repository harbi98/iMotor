import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import Login from '../screens/Login';
import Verification from '../screens/Verification';
import Register from '../screens/Register';
import Categories from '../screens/Categories';
import Tabs from '../components/Tabs';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    const {notVerified, userToken} = useContext(AuthContext);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {notVerified == true ? 
                    <Stack.Screen name='Verification' component={Verification} options={{ headerShown: false }}/>
                    :
                    <>
                        {userToken ?
                                <>
                                    <Stack.Screen name='Categories' component={Categories} options={{ headerShown: false }}/>
                                    <Stack.Screen name='Tabs' component={Tabs} options={{ headerShown: false }}/>
                                    <Stack.Screen name='Profile' component={Profile}/>
                                </>
                            :
                                <>
                                    <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
                                    <Stack.Screen name='Register' component={Register} options={{ headerShown: false }}/>
                                </>
                        }
                    </>
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}