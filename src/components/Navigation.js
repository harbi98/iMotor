import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import {navigationRef} from '../context/AuthContext';
import Login from '../screens/Login';
import Verification from '../screens/Verification';
import Register from '../screens/Register';
import Categories from '../screens/Categories';
import CarTabs from '../screens/Car/Tabs';
import MotorcycleTabs from '../screens/Motorcycle/Tabs';
import Profile from '../screens/Profile';
import MyListings from '../screens/MyListings';
import Subscription from '../screens/Subscription';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    const {notVerified, userToken} = useContext(AuthContext);
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                {notVerified == true ? 
                    <Stack.Screen name='Verification' component={Verification} options={{ headerShown: false }}/>
                    :
                    <>
                        {userToken ?
                                <>
                                    <Stack.Screen name='Categories' component={Categories} options={{ headerShown: false }}/>
                                    <Stack.Screen name='CarTabs' component={CarTabs} options={{ headerShown: false }}/>
                                    <Stack.Screen name='MotorcycleTabs' component={MotorcycleTabs} options={{ headerShown: false }}/>
                                    <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }}/>
                                    <Stack.Screen name='MyListings' component={MyListings} options={{ headerShown: false }}/>
                                    <Stack.Screen name='Subscription' component={Subscription} options={{ headerShown: false }}/>
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