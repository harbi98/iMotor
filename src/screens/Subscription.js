import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, TouchableHighlight, Image, StatusBar, Platform } from 'react-native';
import React, {useEffect, useState} from 'react';
import { styles } from '../public/Style';
import {PricingCard, lightColors} from '@rneui/base';

const window_width = Dimensions.get('screen').width;

export default function Subscription({navigation}) {

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
        paddingTop: Platform.OS === 'ios' ? 50 : 0,
        backgroundColor: '#0a5ca8',
        }}>
          <TouchableHighlight
              underlayColor={'trasparent'}
              activeOpacity={0.1}
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
          <Text style={{color: '#ffffff', fontSize: 20, fontWeight: '600'}}>Subscription</Text>
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
                {/* <Text style={{color: '#ffffff', fontSize: 16, fontWeight: '600'}}>{editOn ? 'Save' : 'Edit'}</Text> */}
              </View>
          </TouchableHighlight>
        </View>
        <ScrollView>
        <View
        style={{
            flex: 1, 
            width: window_width, 
            alignItems: 'center', 
            padding: 10
        }}>
            <PricingCard
                color={lightColors.primary}
                containerStyle={{width: window_width * 0.8, borderRadius: 5}}
                title="Basic"
                price="70 AED"
                info={['30 days', '1 Listing/s Allowed']}
                button={{ title: ' GET STARTED' }}
            />
            <PricingCard
                color={lightColors.secondary}
                containerStyle={{width: window_width * 0.8, borderRadius: 5}}
                title="Standard"
                price="300 AED"
                info={['30 days', '5 Listing/s Allowed', 'Featured Listing for 7 Days']}
                button={{ title: ' GET STARTED' }}
            />
            <PricingCard
                color={lightColors.black}
                containerStyle={{width: window_width * 0.8, borderRadius: 5}}
                title="Premium"
                price="499 AED"
                info={['30 days', '20 Listing/s Allowed', 'Featured Listing for 14 Days']}
                button={{ title: ' GET STARTED' }}
            />
        </View>
        </ScrollView>
    </View>
    )
}

const custom_styles = StyleSheet.create({})