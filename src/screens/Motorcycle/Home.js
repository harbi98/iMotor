import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, ScrollView, FlatList, TouchableHighlight } from 'react-native';
import React, {useEffect, useState} from 'react';
import { styles } from '../../public/Style';
import { SearchBar, Button, Skeleton } from '@rneui/themed';
import { BASE_URL, processResponse } from '../../config';
import { LinearGradient } from 'expo-linear-gradient';

const window_width = Dimensions.get('window').width;

const Home = () => {
    const [brands, setBrands] = useState([]);
    const [brandsLoading, setBrandsLoading] = useState(true);

    const getBrands = () => {
        try{
            fetch(BASE_URL+'brands/type/motorcycle',{
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    //'Authorization': `Bearer ${userToken}`,
                },
            })
            .then(processResponse)
            .then(res => {
                const { statusCode, data } = res;
                console.log(statusCode);
                setBrands(data.brands);
                setBrandsLoading(false);
            })
            .catch((e) => {
                console.log(e)
            })
        } catch (e){
            console.log(e);
        }
    }
    useEffect(() => {
        getBrands();
    }, [])
    return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={{flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <View
                    flexDirection='row'
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: window_width,
                    }}
                >
                    <SearchBar platform='ios' placeholder='Search listing' containerStyle={{width: window_width - 75,}}/>
                    <Button type='clear' onPress={() => console.log(brands)}>
                        <Image
                            style={{
                                tintColor: '#000000',
                                marginRight: 3,
                                width: 30,
                                height: 30
                            }}
                            source={require('../../../assets/bell.png')}
                        />
                    </Button>
                </View>
                <View style={{width: window_width, alignItems: 'center', marginBottom: 20}}>
                    <View
                        flexDirection='row'
                        style={{ width: window_width * 0.9, justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}
                    >
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Premium listings</Text>
                        <Image
                            style={{
                                tintColor: '#000000',
                                marginRight: 3,
                                width: 20,
                                height: 20
                            }}
                            source={require('../../../assets/arrow-right.png')}
                        />
                    </View>
                    <ScrollView horizontal={true} style={{width: window_width * 0.9}}>
                        <View style={{height: 100, width: 100, backgroundColor: 'grey', borderRadius: 10, marginRight: 15}}>
                        </View>
                        <View style={{height: 100, width: 100, backgroundColor: 'grey', borderRadius: 10, marginRight: 15}}>
                        </View>
                        <View style={{height: 100, width: 100, backgroundColor: 'grey', borderRadius: 10, marginRight: 15}}>
                        </View>
                        <View style={{height: 100, width: 100, backgroundColor: 'grey', borderRadius: 10, marginRight: 15}}>
                        </View>
                    </ScrollView>
                </View>
                <View style={{width: window_width, alignItems: 'center', marginBottom: 20}}>
                    <View
                        flexDirection='row'
                        style={{ width: window_width * 0.9, justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}
                    >
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Featured listings</Text>
                        <Image
                            style={{
                                tintColor: '#000000',
                                marginRight: 3,
                                width: 20,
                                height: 20
                            }}
                            source={require('../../../assets/arrow-right.png')}
                        />
                    </View>
                    <ScrollView horizontal={true} style={{width: window_width * 0.9}}>
                        <View style={{height: 100, width: 100, backgroundColor: 'grey', borderRadius: 10, marginRight: 15}}>
                        </View>
                        <View style={{height: 100, width: 100, backgroundColor: 'grey', borderRadius: 10, marginRight: 15}}>
                        </View>
                        <View style={{height: 100, width: 100, backgroundColor: 'grey', borderRadius: 10, marginRight: 15}}>
                        </View>
                        <View style={{height: 100, width: 100, backgroundColor: 'grey', borderRadius: 10, marginRight: 15}}>
                        </View>
                    </ScrollView>
                </View>
                <View style={{flex: 1,width: window_width * 0.9, marginBottom: 10}}>
                    <View flexDirection='row' style={{justifyContent: 'space-between', alignItems: 'center', marginBottom: 15}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Motorcycle Brands</Text>
                        <Image
                            style={{
                                tintColor: '#000000',
                                marginRight: 3,
                                width: 20,
                                height: 20
                            }}
                            source={require('../../../assets/arrow-right.png')}
                        />
                    </View>
                    <View style={{height: window_width * 0.9}}>
                        {brandsLoading ?
                        <View style={{justifyContent: 'space-evenly', width: '100%', height: '100%'}}>
                            <View flexDirection='row' style={{justifyContent: 'space-evenly'}}>
                                <Skeleton
                                    LinearGradientComponent={LinearGradient}
                                    animation="wave"
                                    width={window_width * 0.28}
                                    height={window_width * 0.28}
                                    borderRadius={10}
                                />
                                <Skeleton
                                    LinearGradientComponent={LinearGradient}
                                    animation="wave"
                                    width={window_width * 0.28}
                                    height={window_width * 0.28}
                                    borderRadius={10}
                                />
                                <Skeleton
                                    LinearGradientComponent={LinearGradient}
                                    animation="wave"
                                    width={window_width * 0.28}
                                    height={window_width * 0.28}
                                    borderRadius={10}
                                />
                            </View>
                            <View flexDirection='row' style={{justifyContent: 'space-evenly'}}>
                                <Skeleton
                                    LinearGradientComponent={LinearGradient}
                                    animation="wave"
                                    width={window_width * 0.28}
                                    height={window_width * 0.28}
                                    borderRadius={10}
                                />
                                <Skeleton
                                    LinearGradientComponent={LinearGradient}
                                    animation="wave"
                                    width={window_width * 0.28}
                                    height={window_width * 0.28}
                                    borderRadius={10}
                                />
                                <Skeleton
                                    LinearGradientComponent={LinearGradient}
                                    animation="wave"
                                    width={window_width * 0.28}
                                    height={window_width * 0.28}
                                    borderRadius={10}
                                />
                            </View>
                            <View flexDirection='row' style={{justifyContent: 'space-evenly'}}>
                                <Skeleton
                                    LinearGradientComponent={LinearGradient}
                                    animation="wave"
                                    width={window_width * 0.28}
                                    height={window_width * 0.28}
                                    borderRadius={10}
                                />
                                <Skeleton
                                    LinearGradientComponent={LinearGradient}
                                    animation="wave"
                                    width={window_width * 0.28}
                                    height={window_width * 0.28}
                                    borderRadius={10}
                                />
                                <Skeleton
                                    LinearGradientComponent={LinearGradient}
                                    animation="wave"
                                    width={window_width * 0.28}
                                    height={window_width * 0.28}
                                    borderRadius={10}
                                />
                            </View>
                        </View>
                        : 
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 2.5}}>
                            {brands.length > 0 ?
                                    brands.slice(0,9).map((brand, key) => {
                                        return (
                                            <TouchableHighlight
                                                key={key}
                                                underlayColor={'rgba(225, 255, 201, 1)'}
                                                style={{
                                                    width: window_width * 0.28,
                                                    height: window_width * 0.28,
                                                    borderRadius: 10,
                                                    backgroundColor: '#ffffff',
                                                    elevation: 3,
                                                    shadowColor: '#000',
                                                    shadowOffset: { width: 0, height: 2 },
                                                    shadowOpacity: 0.3,
                                                    shadowRadius: 2,
                                                    margin: 2.5,
                                                    padding: 10
                                                }}
                                                onPress={() => alert(brand.id + ' ' + brand.brand_name)}
                                            >
                                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={{uri: brand.brand_photo}}/>
                                            </TouchableHighlight>
                                        )
                                    })
                                :
                                    null
                            }
                        </View>
                        }
                    </View>
                </View>
                <View style={{marginBottom: Platform.OS === 'ios' ? 70 : 80}}/>
            </View>
        </ScrollView>
    </SafeAreaView>
    )
}

export default Home;

const custom_style = StyleSheet.create({})