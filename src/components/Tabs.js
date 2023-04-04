import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import MenuScreen from '../screens/Menu';
import ChatScreen from '../screens/Chat';
import FavoritesScreen from '../screens/Favorites';

const Tab = createBottomTabNavigator();

function AddListScreen() {
    return(
        <SafeAreaView>
            <Text>Add List</Text>
        </SafeAreaView>
    );
}

export default function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'green',
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    borderRadius: 20,
                    backgroundColor: '#0a5ca8',
                    height: 100,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{justifyContent: 'center', alignItems: 'center', top: 15}}>
                            <Image
                                style={{
                                    tintColor: '#FFFFFF',
                                    marginRight: 3,
                                    width: 30,
                                    height: 30
                                }}
                                source={require('../../assets/home-outline.png')}
                            />
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: '#FFFFFF'
                                    }}
                                >
                                    Home
                                </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{justifyContent: 'center', alignItems: 'center', top: 15}}>
                            <Image
                                style={{
                                    tintColor: '#FFFFFF',
                                    marginRight: 3,
                                    width: 30,
                                    height: 30
                                }}
                                source={require('../../assets/heart-outline.png')}
                            />
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: '#FFFFFF'
                                    }}
                                >
                                    Favorites
                                </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Add List"
                component={AddListScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{justifyContent: 'center', alignItems: 'center', top: 15}}>
                            <Image
                                style={{
                                    tintColor: '#FFFFFF',
                                    marginRight: 3,
                                    width: 30,
                                    height: 30
                                }}
                                source={require('../../assets/plus-box-outline.png')}
                            />
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: '#FFFFFF'
                                    }}
                                >
                                    Add List
                                </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Chats"
                component={ChatScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{justifyContent: 'center', alignItems: 'center', top: 15}}>
                            <Image
                                style={{
                                    tintColor: '#FFFFFF',
                                    marginRight: 3,
                                    width: 30,
                                    height: 30
                                }}
                                source={require('../../assets/message-processing-outline.png')}
                            />
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: '#FFFFFF'
                                    }}
                                >
                                    Chat
                                </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Menu"
                component={MenuScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{justifyContent: 'center', alignItems: 'center', top: 15}}>
                            <Image
                                style={{
                                    tintColor: '#FFFFFF',
                                    marginRight: 3,
                                    width: 30,
                                    height: 30
                                }}
                                source={require('../../assets/menu.png')}
                            />
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: '#FFFFFF'
                                    }}
                                >
                                    Menu
                                </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})