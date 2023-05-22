import { StyleSheet, Text, SafeAreaView, Dimensions, View, ScrollView, Image, FlatList, TouchableHighlight } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL, processResponse } from '../config';
import React, {useEffect, useState, useContext} from 'react';
import { styles } from '../public/Style';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Skeleton, ListItem, Icon, Button } from '@rneui/themed';

const window_width = Dimensions.get('window').width;

export default function MyListings({navigation}) {
  const {userToken} = useContext(AuthContext);
  
  const [carListing, setCarListing] = useState([]);
  const [motorcycleListing, setMotorcycleListing] = useState([]);
  const [boatListing, setBoatListing] = useState([]);
  const [heavyVehicleListing, setHeavyVehicleListing] = useState([]);

  const getCarListings = () => {
    try{
      fetch(BASE_URL+'listings/cars',{
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
          //console.log(statusCode);
          setCarListing(data.cars);
      })
      .catch((e) => {
          console.log(e)
      })
    } catch (e){
        console.log(e);
    }
  }
  const getMotorcycleListings = () => {
    try{
      fetch(BASE_URL+'listings/motorcycles',{
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
          //console.log(statusCode);
          setMotorcycleListing(data.motorcycles);
      })
      .catch((e) => {
          console.log(e)
      })
    } catch (e){
        console.log(e);
    }
  }
  const getBoatListings = () => {
    
  }
  const getHeavyVehicleListings = () => {
    
  }

  const CarRoute = () => (
    <View style={{flex: 1, borderTopWidth: 1, borderTopColor: '#d3d3d3'}}>
      {carListing.length > 0 ?
          carListing.map((listing, key) => {
            return (
              <View
                key={key}
                style={{
                  width: '100%', 
                  height: 125,
                  borderBottomWidth: 1,
                  borderBottomColor: '#f3f3f3'
                }}
              >
                <ListItem.Swipeable
                  containerStyle={{
                    width: '100%', 
                    height: '100%', 
                    paddingTop: 10, 
                    paddingBottom: 10, 
                    paddingRight: 20, 
                    paddingLeft: 20,
                  }}
                  rightContent={(reset) => (
                    <View style={{flexDirection: 'row', width: '100%'}}>
                      <Button
                      onPress={() => alert('Edit Info')}
                      icon={{ name: 'info', color: 'blue' }}
                      buttonStyle={{ backgroundColor: '#ffffff', minHeight: '100%', minWidth: '50%' }}
                      />
                      <Button
                        onPress={() => alert('Delete Listing')}
                        icon={{ name: 'delete', color: 'red' }}
                        buttonStyle={{ backgroundColor: '#ffffff', minHeight: '100%', minWidth: '50%' }}
                      />
                    </View>
                  )}
                >
                  <ListItem.Content>
                    <View style={{width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center'}}>
                      <View style={{flex: 1, flexDirection: 'row', paddingRight: 10}}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                          <Image
                            style={{width: 100, height: 100, borderRadius: 10}}
                            source={{
                              uri: listing.featured_photo
                            }}
                          />
                        </View>
                        <View style={{
                            paddingLeft: 20,
                            flex: 2,
                            height: 100, 
                            justifyContent: 'space-between',
                        }}>
                            <Text>{listing.title}</Text>
                            <View style={{width: '100%'}}>
                                <View flexDirection='row' style={{width: '100%'}}>
                                    <View flexDirection='row' style={{width: '50%'}}>
                                        <Text>Year </Text>
                                        <Text>{listing.model_year}</Text>
                                    </View>
                                    <View flexDirection='row' style={{width: '50%'}}>
                                        <Text>KMS </Text>
                                        <Text>{listing.mileage}</Text>
                                    </View>
                                </View>
                                <View>
                            </View>
                            </View>
                            <Text>{listing.price}</Text>
                        </View>
                      </View>
                    </View>
                  </ListItem.Content>
                </ListItem.Swipeable>
              </View>
            )
          })
        :
          null
      }
    </View>
  );
  const MotorcycleRoute = () => (
    <View style={{flex: 1, borderTopWidth: 1, borderTopColor: '#d3d3d3'}}>
      {motorcycleListing.length > 0 ?
          motorcycleListing.map((listing, key) => {
            return (
              <View
                key={key}
                style={{
                  width: '100%', 
                  height: 125,
                  borderBottomWidth: 1,
                  borderBottomColor: '#f3f3f3'
                }}
              >
                <ListItem.Swipeable
                  containerStyle={{
                    width: '100%', 
                    height: '100%', 
                    paddingTop: 10, 
                    paddingBottom: 10, 
                    paddingRight: 20, 
                    paddingLeft: 20,
                  }}
                  rightContent={(reset) => (
                    <View style={{flexDirection: 'row', width: '100%'}}>
                      <Button
                      onPress={() => alert('Edit Info')}
                      icon={{ name: 'info', color: 'blue' }}
                      buttonStyle={{ backgroundColor: '#ffffff', minHeight: '100%', minWidth: '50%' }}
                      />
                      <Button
                        onPress={() => alert('Delete Listing')}
                        icon={{ name: 'delete', color: 'red' }}
                        buttonStyle={{ backgroundColor: '#ffffff', minHeight: '100%', minWidth: '50%' }}
                      />
                    </View>
                  )}
                >
                  <ListItem.Content>
                    <View style={{width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center'}}>
                      <View style={{flex: 1, flexDirection: 'row', paddingRight: 10}}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                          <Image
                            style={{width: 100, height: 100, borderRadius: 10}}
                            source={{
                              uri: listing.featured_photo
                            }}
                          />
                        </View>
                        <View style={{
                            paddingLeft: 20,
                            flex: 2,
                            height: 100, 
                            justifyContent: 'space-between',
                        }}>
                            <Text>{listing.title}</Text>
                            <View style={{width: '100%'}}>
                                <View flexDirection='row' style={{width: '100%'}}>
                                    <View flexDirection='row' style={{width: '50%'}}>
                                        <Text>Year </Text>
                                        <Text>{listing.model_year}</Text>
                                    </View>
                                    <View flexDirection='row' style={{width: '50%'}}>
                                        <Text>KMS </Text>
                                        <Text>{listing.mileage}</Text>
                                    </View>
                                </View>
                                <View>
                            </View>
                            </View>
                            <Text>{listing.price}</Text>
                        </View>
                      </View>
                    </View>
                  </ListItem.Content>
                </ListItem.Swipeable>
              </View>
            )
          })
        :
          null
      }
    </View>
  );
  const BoatRoute = () => (
    <View style={{flex: 1}}>
      {boatListing.length > 0 ?
          boatListing.map((listing, key) => {
            return (
              <ListItem.Swipeable
                key={key}
                containerStyle={{width: '100%', height: 125, paddingTop: 10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20}}
                rightContent={(reset) => (
                  <View style={{flexDirection: 'row', width: '100%'}}>
                    <Button
                    onPress={() => alert('Edit Info')}
                    icon={{ name: 'info', color: 'blue' }}
                    buttonStyle={{ backgroundColor: '#ffffff', minHeight: '100%', minWidth: '50%' }}
                    />
                    <Button
                      onPress={() => alert('Delete Listing')}
                      icon={{ name: 'delete', color: 'red' }}
                      buttonStyle={{ backgroundColor: '#ffffff', minHeight: '100%', minWidth: '50%' }}
                    />
                  </View>
                )}
              >
                <ListItem.Content>
                  <View style={{width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1, flexDirection: 'row', paddingRight: 10}}>
                      <View style={{flex: 1, alignItems: 'center'}}>
                        <Image
                          style={{width: 100, height: 100, borderRadius: 10}}
                          source={{
                            uri: listing.featured_photo
                          }}
                        />
                      </View>
                      <View style={{
                          paddingLeft: 20,
                          flex: 2,
                          height: 100, 
                          justifyContent: 'space-between',
                      }}>
                          <Text>{listing.title}</Text>
                          <View style={{width: '100%'}}>
                              <View flexDirection='row' style={{width: '100%'}}>
                                  <View flexDirection='row' style={{width: '50%'}}>
                                      <Text>Year </Text>
                                      <Text>{listing.model_year}</Text>
                                  </View>
                                  <View flexDirection='row' style={{width: '50%'}}>
                                      <Text>KMS </Text>
                                      <Text>{listing.mileage}</Text>
                                  </View>
                              </View>
                              <View>
                          </View>
                          </View>
                          <Text>{listing.price}</Text>
                      </View>
                    </View>
                  </View>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem.Swipeable>
            )
          })
        :
          null
      }
    </View>
  );
  const HeavyVehicleRoute = () => (
    <View style={{flex: 1}}>
      {heavyVehicleListing.length > 0 ?
          heavyVehicleListing.map((listing, key) => {
            return (
              <ListItem.Swipeable
                key={key}
                containerStyle={{width: '100%', height: 125, paddingTop: 10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20}}
                rightContent={(reset) => (
                  <View style={{flexDirection: 'row', width: '100%'}}>
                    <Button
                    onPress={() => alert('Edit Info')}
                    icon={{ name: 'info', color: 'blue' }}
                    buttonStyle={{ backgroundColor: '#ffffff', minHeight: '100%', minWidth: '50%' }}
                    />
                    <Button
                      onPress={() => alert('Delete Listing')}
                      icon={{ name: 'delete', color: 'red' }}
                      buttonStyle={{ backgroundColor: '#ffffff', minHeight: '100%', minWidth: '50%' }}
                    />
                  </View>
                )}
              >
                <ListItem.Content>
                  <View style={{width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1, flexDirection: 'row', paddingRight: 10}}>
                      <View style={{flex: 1, alignItems: 'center'}}>
                        <Image
                          style={{width: 100, height: 100, borderRadius: 10}}
                          source={{
                            uri: listing.featured_photo
                          }}
                        />
                      </View>
                      <View style={{
                          paddingLeft: 20,
                          flex: 2,
                          height: 100, 
                          justifyContent: 'space-between',
                      }}>
                          <Text>{listing.title}</Text>
                          <View style={{width: '100%'}}>
                              <View flexDirection='row' style={{width: '100%'}}>
                                  <View flexDirection='row' style={{width: '50%'}}>
                                      <Text>Year </Text>
                                      <Text>{listing.model_year}</Text>
                                  </View>
                                  <View flexDirection='row' style={{width: '50%'}}>
                                      <Text>KMS </Text>
                                      <Text>{listing.mileage}</Text>
                                  </View>
                              </View>
                              <View>
                          </View>
                          </View>
                          <Text>{listing.price}</Text>
                      </View>
                    </View>
                  </View>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem.Swipeable>
            )
          })
        :
          null
      }
    </View>
  );
  
  const renderScene = SceneMap({
    first: CarRoute,
    second: MotorcycleRoute,
    third: BoatRoute,
    fourth: HeavyVehicleRoute,
  });

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Car' },
    { key: 'second', title: 'Motorcycle' },
    { key: 'third', title: 'Boat' },
    { key: 'fourth', title: 'Heavy Vehicle' },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: '#8bc63f', 
        height: '100%',
        borderRadius: 10,
        padding: 0,
      }}
      style={{ 
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginBottom: 30,
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
      }}
      acti
      renderLabel={({ route, focused,color }) => (
        <Text style={{ color: focused ? color : '#c3c3c3', fontSize: 10, margin: 0, textAlign: 'center' }}>
          {route.title}
        </Text>
      )}
      pressColor='transparent'
    />
  );

  useEffect(() => {
    getCarListings();
    getMotorcycleListings();
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, width: window_width}}>
        <View style={{
          width: '100%', 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          paddingTop: 5,
          paddingLeft: 15,
          paddingRight: 15,
          paddingBottom: 5
        }}>
          <TouchableHighlight
            underlayColor={'#ffffff'}
            style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={() => navigation.goBack()}
          >
            <View
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: '#0a5ca8',
                    alignItems: 'center',
                    justifyContent: 'center',
                    elevation: 10,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.5,
                    shadowRadius: 3,
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
          <Text>My Listings</Text>
          <View style={{width: 50, height: 50}}/>
        </View>
        <TabView
          swipeEnabled={false}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
        />
      </View>
    </SafeAreaView>
  )
}

const custom_styles = StyleSheet.create({})