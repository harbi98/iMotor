import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight, Platform } from 'react-native';
import React, {useRef} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import MenuScreen from '../Menu';
import ChatScreen from '../Chat';
import FavoritesScreen from './Favorites';
import AddListing from './AddListing';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => {
    return (
        <TouchableHighlight
            underlayColor={'#ffffff'}
            style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                justifyContent: 'center',
                alignItems: 'center',
                top: -30,
            }}
            onPress={onPress}
        >
            <View
                style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    backgroundColor: '#8bc63f'
                }}
            >
                {children}
            </View>
        </TouchableHighlight>
    )
}

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                //tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    position: 'absolute', 
                    height: Platform.OS === 'ios' ? 100 : 70,
                    backgroundColor: '#0a5ca8',
                    tabBarStyle: { position: 'absolute' },
                    paddingBottom: Platform.OS === 'ios' ? 30 : 15,
                    paddingTop: 15,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Image
                                style={{
                                    tintColor: focused ? '#ffffff' : '#cccccc',
                                    width: 30,
                                    height: 30,
                                }}
                                source={require('../../../assets/home-outline.png')}
                            />
                            {focused ? <Text style={{color: '#ffffff', fontSize: 9}}>Home</Text> : ''}
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Image
                                style={{
                                    tintColor: focused ? '#ffffff' : '#cccccc',
                                    width: 30,
                                    height: 30
                                }}
                                source={require('../../../assets/square-star.png')}
                            />
                            {focused ? <Text style={{color: '#ffffff', fontSize: 9}}>Favorites</Text> : ''}
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Add Listing"
                component={AddListing}
                options={{
                    tabBarIcon: ((focused) => (
                        <Image
                            source={require('../../../assets/square-plus.png')}
                            resizeMode='contain'
                            style={{
                                tintColor: '#ffffff',
                                width: 30,
                                height: 30,
                            }}
                        />
                    )),
                    tabBarButton: (props) => (<CustomTabBarButton {...props}/>)
                }}
            />
            <Tab.Screen
                name="Chats"
                component={ChatScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Image
                                style={{
                                    tintColor: focused ? '#ffffff' : '#cccccc',
                                    width: 30,
                                    height: 30
                                }}
                                source={require('../../../assets/messages.png')}
                            />
                            {focused ? <Text style={{color: '#ffffff', fontSize: 9}}>Messages</Text> : ''}
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Menu"
                component={MenuScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Image
                                style={{
                                    tintColor: focused ? '#ffffff' : '#cccccc',
                                    width: 30,
                                    height: 30
                                }}
                                source={require('../../../assets/user-gear.png')}
                            />
                            {focused ? <Text style={{color: '#ffffff', fontSize: 9}}>Options</Text> : ''}
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default Tabs;

const styles = StyleSheet.create({})