import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, ScrollView, FlatList, TouchableHighlight, ImageBackground } from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import { styles } from '../../public/Style';
import { AuthContext } from '../../context/AuthContext';
import { SearchBar, Button, Skeleton } from '@rneui/themed';
import { BASE_URL, processResponse } from '../../config';
import { LinearGradient } from 'expo-linear-gradient';

const window_width = Dimensions.get('window').width;

const Home = () => {
    const {userToken} = useContext(AuthContext);

    const [brands, setBrands] = useState([]);
    const [brandsLoading, setBrandsLoading] = useState(true);
    const [premiumListings, setPremiumListings] = useState([]);
    const [featuredListings, setFeaturedListings] = useState([]);

    const getBrands = () => {
        try{
            fetch(BASE_URL+'brands/type/car',{
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
    const getPremiumListings = () => {
        try{
            fetch(BASE_URL+'listings/all/cars',{
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
                console.log('Carlistings ' + statusCode);
                setPremiumListings(data.cars);
            })
            .catch((e) => {
                console.log(e)
            })
        } catch (e){
            console.log(e);
        }
    }
    const getFeaturedListings = () => {
        try{
            fetch(BASE_URL+'listings/all/cars',{
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
                console.log('Carlistings ' + statusCode);
                setFeaturedListings(data.cars);
            })
            .catch((e) => {
                console.log(e)
            })
        } catch (e){
            console.log(e);
        }
    }
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    useEffect(() => {
        getBrands();
        getPremiumListings();
        getFeaturedListings();
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
                        {premiumListings.length > 0 ?
                                premiumListings.map((listing, key) => {
                                    return (
                                        <TouchableHighlight
                                        key={key}
                                        underlayColor={'#ffffff'}
                                        style={{
                                            height: 150, 
                                            width: 150, 
                                            borderRadius: 10, 
                                            marginRight: 10, 
                                            margin: 3,
                                            elevation: 3,
                                            shadowColor: '#000',
                                            shadowOffset: { width: 0, height: 1 },
                                            shadowOpacity: 0.3,
                                            shadowRadius: 2,
                                        }}
                                        onPress={() => console.log('ppressed')}
                                        >
                                            <>
                                                <ImageBackground
                                                    style={{height: 90, width: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: '#ffffff', alignItems: 'flex-end', padding: 5}}
                                                    imageStyle={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
                                                    source={{
                                                        uri: listing.featured_photo
                                                    }}
                                                >
                                                    <View style={{backgroundColor: 'red', padding: 5, borderRadius: 5, alignItems: 'center'}}>
                                                        <Text style={{color: '#ffffff', fontSize: 9, fontWeight: '600'}}>PREMIUM</Text>
                                                    </View>
                                                </ImageBackground>
                                                <View style={{height: 60, width: 150, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#ffffff', paddingLeft: 10, justifyContent: 'center'}}>
                                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>AED {numberWithCommas(listing.price)}</Text>
                                                    <Text style={{fontWeight: 'bold', fontSize: 12}}>{listing.model}</Text>
                                                    <Text style={{fontSize: 12}}>{listing.model_year} - {listing.mileage}</Text>
                                                </View>
                                            </>
                                        </TouchableHighlight>
                                    );
                                })
                            :
                            <>
                                <View
                                style={{
                                    height: 150, 
                                    width: 150, 
                                    borderRadius: 10, 
                                    marginRight: 10, 
                                    margin: 3,
                                    elevation: 3,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 1 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 2,
                                }}
                                >
                                    <Skeleton
                                        LinearGradientComponent={LinearGradient}
                                        animation="wave"
                                        width={150}
                                        height={90}
                                        borderTopLeftRadius={10}
                                        borderTopRightRadius={10}
                                    />
                                    <View style={{height: 60, width: 150, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#ffffff', paddingLeft: 10, justifyContent: 'space-evenly'}}>
                                        <Skeleton
                                            LinearGradientComponent={LinearGradient}
                                            animation="wave"
                                            width={'80%'}
                                            height={16}
                                            borderRadius={5}
                                        />
                                        <Skeleton
                                            LinearGradientComponent={LinearGradient}
                                            animation="wave"
                                            width={'50%'}
                                            height={12}
                                            borderRadius={5}
                                        />
                                        <Skeleton
                                            LinearGradientComponent={LinearGradient}
                                            animation="wave"
                                            width={'60%'}
                                            height={12}
                                            borderRadius={5}
                                        />
                                    </View>
                                </View>
                                <View
                                style={{
                                    height: 150, 
                                    width: 150, 
                                    borderRadius: 10, 
                                    marginRight: 10, 
                                    margin: 3,
                                    elevation: 3,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 1 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 2,
                                }}
                                >
                                    <Skeleton
                                        LinearGradientComponent={LinearGradient}
                                        animation="wave"
                                        width={150}
                                        height={90}
                                        borderTopLeftRadius={10}
                                        borderTopRightRadius={10}
                                    />
                                    <View style={{height: 60, width: 150, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#ffffff', paddingLeft: 10, justifyContent: 'space-evenly'}}>
                                        <Skeleton
                                            LinearGradientComponent={LinearGradient}
                                            animation="wave"
                                            width={'80%'}
                                            height={16}
                                            borderRadius={5}
                                        />
                                        <Skeleton
                                            LinearGradientComponent={LinearGradient}
                                            animation="wave"
                                            width={'50%'}
                                            height={12}
                                            borderRadius={5}
                                        />
                                        <Skeleton
                                            LinearGradientComponent={LinearGradient}
                                            animation="wave"
                                            width={'60%'}
                                            height={12}
                                            borderRadius={5}
                                        />
                                    </View>
                                </View>
                                <View
                                style={{
                                    height: 150, 
                                    width: 150, 
                                    borderRadius: 10, 
                                    marginRight: 10, 
                                    margin: 3,
                                    elevation: 3,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 1 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 2,
                                }}
                                >
                                    <Skeleton
                                        LinearGradientComponent={LinearGradient}
                                        animation="wave"
                                        width={150}
                                        height={90}
                                        borderTopLeftRadius={10}
                                        borderTopRightRadius={10}
                                    />
                                    <View style={{height: 60, width: 150, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#ffffff', paddingLeft: 10, justifyContent: 'space-evenly'}}>
                                        <Skeleton
                                            LinearGradientComponent={LinearGradient}
                                            animation="wave"
                                            width={'80%'}
                                            height={16}
                                            borderRadius={5}
                                        />
                                        <Skeleton
                                            LinearGradientComponent={LinearGradient}
                                            animation="wave"
                                            width={'50%'}
                                            height={12}
                                            borderRadius={5}
                                        />
                                        <Skeleton
                                            LinearGradientComponent={LinearGradient}
                                            animation="wave"
                                            width={'60%'}
                                            height={12}
                                            borderRadius={5}
                                        />
                                    </View>
                                </View>
                            </>
                        }
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
                        {featuredListings.length > 0 ?
                                featuredListings.map((listing, key) => {
                                    return (
                                        <TouchableHighlight
                                        key={key}
                                        underlayColor={'#ffffff'}
                                        style={{
                                            height: 150, 
                                            width: 150, 
                                            borderRadius: 10, 
                                            marginRight: 10, 
                                            margin: 3,
                                            elevation: 3,
                                            shadowColor: '#000',
                                            shadowOffset: { width: 0, height: 1 },
                                            shadowOpacity: 0.3,
                                            shadowRadius: 2,
                                        }}
                                        onPress={() => console.log('ppressed')}
                                        >
                                            <>
                                                <ImageBackground
                                                    style={{height: 90, width: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: '#ffffff', alignItems: 'flex-end', padding: 5}}
                                                    imageStyle={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
                                                    source={{
                                                        uri: listing.featured_photo
                                                    }}
                                                >
                                                    <View style={{backgroundColor: '#0a5ba3', padding: 5, borderRadius: 5, alignItems: 'center'}}>
                                                        <Text style={{color: '#ffffff', fontSize: 9, fontWeight: '600'}}>FEATURED</Text>
                                                    </View>
                                                </ImageBackground>
                                                <View style={{height: 60, width: 150, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#ffffff', paddingLeft: 10, justifyContent: 'center'}}>
                                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>AED {numberWithCommas(listing.price)}</Text>
                                                    <Text style={{fontWeight: 'bold', fontSize: 12}}>{listing.model}</Text>
                                                    <Text style={{fontSize: 12}}>{listing.model_year} - {listing.mileage}</Text>
                                                </View>
                                            </>
                                        </TouchableHighlight>
                                    );
                                })
                            :
                            <>
                                <View
                                style={{
                                    height: 150, 
                                    width: 150, 
                                    borderRadius: 10, 
                                    marginRight: 10, 
                                    margin: 3,
                                    elevation: 3,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 1 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 2,
                                }}
                                >
                                    <Skeleton
                                        LinearGradientComponent={LinearGradient}
                                        animation="wave"
                                        width={150}
                                        height={90}
                                        borderTopLeftRadius={10}
                                        borderTopRightRadius={10}
                                    />
                                    <View style={{height: 60, width: 150, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#ffffff', paddingLeft: 10, justifyContent: 'space-evenly'}}>
                                        <Skeleton
                                            LinearGradientComponent={LinearGradient}
                                            animation="wave"
                                            width={'80%'}
                                            height={16}
                                            borderRadius={5}
                                        />
                                        <Skeleton
                                            LinearGradientComponent={LinearGradient}
                                            animation="wave"
                                            width={'50%'}
                                            height={12}
                                            borderRadius={5}
                                        />
                                        <Skeleton
                                            LinearGradientComponent={LinearGradient}
                                            animation="wave"
                                            width={'60%'}
                                            height={12}
                                            borderRadius={5}
                                        />
                                    </View>
                                </View>
                                <View
                                style={{
                                    height: 150, 
                                    width: 150, 
                                    borderRadius: 10, 
                                    marginRight: 10, 
                                    margin: 3,
                                    elevation: 3,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 1 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 2,
                                }}
                                >
                                    <Skeleton
                                        LinearGradientComponent={LinearGradient}
                                        animation="wave"
                                        width={150}
                                        height={90}
                                        borderTopLeftRadius={10}
                                        borderTopRightRadius={10}
                                    />
                                    <View style={{height: 60, width: 150, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#ffffff', paddingLeft: 10, justifyContent: 'space-evenly'}}>
                                        <Skeleton
                                            LinearGradientComponent={LinearGradient}
                                            animation="wave"
                                            width={'80%'}
                                            height={16}
                                            borderRadius={5}
                                        />
                                        <Skeleton
                                            LinearGradientComponent={LinearGradient}
                                            animation="wave"
                                            width={'50%'}
                                            height={12}
                                            borderRadius={5}
                                        />
                                        <Skeleton
                                            LinearGradientComponent={LinearGradient}
                                            animation="wave"
                                            width={'60%'}
                                            height={12}
                                            borderRadius={5}
                                        />
                                    </View>
                                </View>
                                <View
                                style={{
                                    height: 150, 
                                    width: 150, 
                                    borderRadius: 10, 
                                    marginRight: 10, 
                                    margin: 3,
                                    elevation: 3,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 1 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 2,
                                }}
                                >
                                    <Skeleton
                                        LinearGradientComponent={LinearGradient}
                                        animation="wave"
                                        width={150}
                                        height={90}
                                        borderTopLeftRadius={10}
                                        borderTopRightRadius={10}
                                    />
                                    <View style={{height: 60, width: 150, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#ffffff', paddingLeft: 10, justifyContent: 'space-evenly'}}>
                                        <Skeleton
                                            LinearGradientComponent={LinearGradient}
                                            animation="wave"
                                            width={'80%'}
                                            height={16}
                                            borderRadius={5}
                                        />
                                        <Skeleton
                                            LinearGradientComponent={LinearGradient}
                                            animation="wave"
                                            width={'50%'}
                                            height={12}
                                            borderRadius={5}
                                        />
                                        <Skeleton
                                            LinearGradientComponent={LinearGradient}
                                            animation="wave"
                                            width={'60%'}
                                            height={12}
                                            borderRadius={5}
                                        />
                                    </View>
                                </View>
                            </>
                        }
                    </ScrollView>
                </View>
                <View style={{flex: 1,width: window_width * 0.9, marginBottom: 10}}>
                    <View flexDirection='row' style={{justifyContent: 'space-between', alignItems: 'center', marginBottom: 15}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Car Brands</Text>
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
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 5}}>
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
            </View>
            <View style={{marginBottom: Platform.OS === 'ios' ? 70 : 80}}/>
        </ScrollView>
    </SafeAreaView>
    )
}

export default Home;

const custom_style = StyleSheet.create({})