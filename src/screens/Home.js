import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, ScrollView, FlatList, TouchableHighlight } from 'react-native';
import React, {useEffect, useState} from 'react';
import { styles } from '../public/Style';
import { SearchBar, Button, Skeleton } from '@rneui/themed';
import { BASE_URL, processResponse } from '../config';
import { LinearGradient } from 'expo-linear-gradient';

const window_width = Dimensions.get('window').width;

const Home = () => {
    const [brands, setBrands] = useState([]);
    const [brandsLoading, setBrandsLoading] = useState(true);

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
    useEffect(() => {
        getBrands();
    }, [])
    return (
    <SafeAreaView style={styles.container}>
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
                    source={require('../../assets/bell.png')}
                />
            </Button>
        </View>
        {/* <Divider 
            style={{ width: window_width * 0.9, marginTop: 2, marginBottom: 2 }}
            width='1'
        /> */}
        {/* <Divider 
            style={{ width: window_width * 0.9, marginTop: 2, marginBottom: 20 }}
            width='1'
        /> */}
        <View style={{width: window_width, alignItems: 'center', marginBottom: 20}}>
            <View
                flexDirection='row'
                style={{ width: window_width * 0.9, justifyContent: 'space-between' }}
            >
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Picks for you</Text>
                <Image
                    style={{
                        tintColor: '#000000',
                        marginRight: 3,
                        width: 30,
                        height: 30
                    }}
                    source={require('../../assets/arrow-right.png')}
                />
            </View>
            <ScrollView horizontal={true} style={{width: window_width * 0.9}}>
                <View style={{height: 150, width: 150, backgroundColor: 'grey', borderRadius: 20, marginRight: 15}}>
                </View>
                <View style={{height: 150, width: 150, backgroundColor: 'grey', borderRadius: 20, marginRight: 15}}>
                </View>
                <View style={{height: 150, width: 150, backgroundColor: 'grey', borderRadius: 20, marginRight: 15}}>
                </View>
            </ScrollView>
        </View>
        {/* <Divider 
            style={{ width: window_width * 0.9, marginTop: 2, marginBottom: 20 }}
            width='1'
        /> */}
        <View style={{flex: 1,width: window_width * 0.9, marginBottom: 10}}>
            <View flexDirection='row' style={{justifyContent: 'space-between', alignItems: 'center', marginBottom: 15}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Car Brands</Text>
                <View flexDirection='row' style={{alignItems: 'center'}}>
                    <Text>Browse More</Text>
                    <Image
                        style={{
                            tintColor: '#000000',
                            marginRight: 3,
                            width: 20,
                            height: 20
                        }}
                        source={require('../../assets/arrow-right.png')}
                    />
                </View>
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
                            borderRadius={20}
                        />
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="wave"
                            width={window_width * 0.28}
                            height={window_width * 0.28}
                            borderRadius={20}
                        />
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="wave"
                            width={window_width * 0.28}
                            height={window_width * 0.28}
                            borderRadius={20}
                        />
                    </View>
                    <View flexDirection='row' style={{justifyContent: 'space-evenly'}}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="wave"
                            width={window_width * 0.28}
                            height={window_width * 0.28}
                            borderRadius={20}
                        />
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="wave"
                            width={window_width * 0.28}
                            height={window_width * 0.28}
                            borderRadius={20}
                        />
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="wave"
                            width={window_width * 0.28}
                            height={window_width * 0.28}
                            borderRadius={20}
                        />
                    </View>
                    <View flexDirection='row' style={{justifyContent: 'space-evenly'}}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="wave"
                            width={window_width * 0.28}
                            height={window_width * 0.28}
                            borderRadius={20}
                        />
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="wave"
                            width={window_width * 0.28}
                            height={window_width * 0.28}
                            borderRadius={20}
                        />
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="wave"
                            width={window_width * 0.28}
                            height={window_width * 0.28}
                            borderRadius={20}
                        />
                    </View>
                </View>
                : 
                <FlatList
                    contentContainerStyle={{width: '100%', height: '100%', justifyContent: 'space-evenly'}}
                    numColumns={3}
                    columnWrapperStyle={{justifyContent: 'space-evenly'}}
                    data={brands.slice(0,9)}
                    extraData={brands}
                    renderItem={({item}) => {
                        return (
                            <TouchableHighlight
                                underlayColor={'rgba(139, 198, 63, 0.2)'}
                                style={{
                                    width: window_width * 0.28,
                                    height: window_width * 0.28,
                                    borderRadius: 20,
                                    borderWidth: 1,
                                    borderColor: '#A7AE9C'
                                }}
                                onPress={() => alert(item.id + ' ' + item.brand_name)}
                            >
                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={{uri: item.brand_photo}}/>
                            </TouchableHighlight>
                        )
                    }}
                />
                }
            </View>
        </View>
    </SafeAreaView>
    )
}

export default Home;

const custom_style = StyleSheet.create({})