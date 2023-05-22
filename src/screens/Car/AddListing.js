import { StyleSheet, Text, View, SafeAreaView, Dimensions, TextInput, ImageBackground, Image, ScrollView, Platform } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import React, {useState, useEffect, useContext, useRef} from 'react';
import { styles } from '../../public/Style';
import { BASE_URL, processResponse } from '../../config';
import { ListItem, Avatar, Button, Chip } from '@rneui/themed';
import { AuthContext } from '../../context/AuthContext';
import * as ImagePicker from 'expo-image-picker';
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import { LinearGradient } from 'expo-linear-gradient';


const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;
const handleHead = ({tintColor}) => <Text style={{color: tintColor}}>H1</Text>

export default function AddListing() {
    const {userToken} = useContext(AuthContext);

    const RichText = React.useRef();
    const _editor = React.createRef();

    const [descriptionText, setDescriptionText] = useState();
    const [allAmenities, setAllAmenities] = useState();
    const [amenities, setAmenities] = useState();
    const [allSafetyFeatures, setAllSafetyFeatures] = useState();
    const [safetyFeatures, setSafetyFeatures] = useState();

    const [locationExpanded, setLocationExpanded] = useState(false);
    const [brandExpanded, setBrandsExpanded] = useState(false);

    const [brands, setBrands] = useState([]);
    const [selectedBrandID, setSelectedBrandID] = useState();
    const [selectedBrandName, setSelectedBrandName] = useState();
    const [selectedBrandPhoto, setSelectedBrandPhoto] = useState();
    
    const [locations, setLocations] = useState([]);
    const [selectedLocationID, setSelectedLocationID] = useState();
    const [selectedLocationName, setSelectedLocationName] = useState();
    const [selectedLocationPhoto, setSelectedLocationPhoto] = useState();

    const [image, setImage] = useState(null);
    const [price, setPrice] = useState();
    const [model, setModel] = useState();
    const [yearModel, setYearModel] = useState();
    const [variant, setVariant] = useState();
    const [vehicleID, setVehicleID] = useState();
    const [mileage, setMileage] = useState();
    const [bodyType, setBodyType] = useState();
    const [exteriorColor, setExteriorColor] = useState();
    const [interiorColor, setInteriorColor] = useState();
    const [noOfSeats, setNoOfSeats] = useState();
    const [seatType,setSeatType] = useState();
    const [wheelType, setWheelType] = useState();
    const [engineType, setEngineType] = useState();
    const [fuelType, setFuelType] = useState();
    const [transmission, setTransmission] = useState();
    const [maximumPower, setMaximumPower] = useState();
    const [maximumTorque, setMaximumTorque] = useState();
    const [engineCapacity, setEngineCapacity] = useState();
    const [displacement, setDisplacement] = useState();
    const [drivetrain, setDriveTrain] = useState();
    const [numberOfCylinders, setNumberOfCylinders] = useState();
    const [numberOfValves, setNumberOfValves] = useState();

    const source = {
        html: `
        <p><span style="color: rgb(72, 72, 72);">The&nbsp;</span><a href="https://www.zigwheels.ph/new-motorcycles/honda/click-160" rel="noopener noreferrer" target="_blank" style="color: rgb(219, 21, 31);">Click 160</a><span style="color: rgb(72, 72, 72);">, a new Scooter from Honda comes in 1 variants. The top variant of Click 160 is powered by the Standard a 157 cc, 1 cylinder Gasoline engine that fires 15 hp of power and 13.8 Nm torque. The 2 seater&nbsp;</span><a href="https://www.zigwheels.ph/new-motorcycles/honda/click-160/standard" rel="noopener noreferrer" target="_blank" style="color: rgb(219, 21, 31);">Click 160 Standard</a><span style="color: rgb(72, 72, 72);">&nbsp;Variable Speed comes with CVT transmission. For added safety are provided central locking &amp; power door locks.</span></p>
        `
    };

    const htmlToReact = () => {
        return (
            <RenderHtml
                contentWidth={window_width*0.1}
                source={source}
            />
        )
    }

    const addAmenities = (amenity) => {
        if(allAmenities) {
            setAllAmenities(allAmenities + ',' + amenity)
            setAmenities()
        } else {
            setAllAmenities(amenity)
            setAmenities();
        }
    }

    const removeAmenity = (item) => {
        setAllAmenities(
            allAmenities.replace(new RegExp(",?" + item + ",?"), function(match) {
                var first_comma = match.charAt(0) === ',', second_comma;
                if (first_comma && (second_comma = match.charAt(match.length - 1) === ',')) {
                  return ',';
                }
                return '';
            })
        )
        setAmenities();
    }
    const addSafetyFeatures = (safetyFeatures) => {
        if(allSafetyFeatures) {
            setAllSafetyFeatures(allSafetyFeatures + ',' + safetyFeatures)
            setSafetyFeatures()
        } else {
            setAllSafetyFeatures(safetyFeatures)
            setSafetyFeatures();
        }
    }

    const removeSafetyFeatures = (item) => {
        setAllSafetyFeatures(
            allSafetyFeatures.replace(new RegExp(",?" + item + ",?"), function(match) {
                var first_comma = match.charAt(0) === ',', second_comma;
                if (first_comma && (second_comma = match.charAt(match.length - 1) === ',')) {
                  return ',';
                }
                return '';
            })
        )
        setSafetyFeatures();
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8,
            base64: true
        });

        if (!result.canceled) {
        setImage(result.assets[0].base64);
        }
    };

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
            })
            .catch((e) => {
                console.log(e)
            })
        } catch (e){
            console.log(e);
        }
    }
    const getLocations = () => {
        try{
            fetch(BASE_URL+'locations',{
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
                setLocations(data.locations);
            })
            .catch((e) => {
                console.log(e)
            })
        } catch (e){
            console.log(e);
        }
    }
    const selectBrand = (id, name, photo) => {
        setSelectedBrandID(id)
        setSelectedBrandName(name);
        setSelectedBrandPhoto(photo);
        setBrandsExpanded(false);
    }
    const selectLocation = (id, name, photo) => {
        setSelectedLocationID(id)
        setSelectedLocationName(name);
        setSelectedLocationPhoto(photo);
        setLocationExpanded(false);
    }
    const createListing = () => {
        try{
            fetch(BASE_URL+'listings/cars/store',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`,
                },
                body: JSON.stringify({
                    price: price,
                    description: descriptionText,
                    model: model,
                    model_year: yearModel,
                    variant: variant,
                    mileage: mileage,
                    vin: vehicleID,
                    amenities: allAmenities,
                    safety_features: allSafetyFeatures,
                    vehicle_type: 'car',
                    brand_id: selectedBrandID,
                    location_id: selectedLocationID,
                    featured_photo: 'data:image/webp;base64,'+image,
                    transmission: transmission,
                    engine_capacity: engineCapacity,
                    displacement: displacement,
                    drivetrain: drivetrain,
                    maximum_power: maximumPower,
                    maximum_torque: maximumTorque,
                    no_of_cylinder: numberOfCylinders,
                    no_of_valve: numberOfValves,
                    no_of_seats: noOfSeats,
                    engine_type: engineType,
                    fuel_type: fuelType,
                    body_type: bodyType,
                    seat_type: seatType,
                    wheel_type: wheelType,
                    exterior_color: exteriorColor,
                    interior_color: interiorColor
                })
            })
            .then(processResponse)
            .then(res => {
                const { statusCode, data } = res;
                console.log("Status Code", statusCode);
                alert(data.message);
            })
            .catch((e) => {
                console.log(e);
                console.log('Registration Error!');
            })
        } catch (e){
            console.log(e);
        }
    }
    useEffect(() => {
        getBrands();
        getLocations();
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <View style={custom_style.container}>
                <View style={{flex: 1, width: window_width * 0.9}}>
                    <ProgressSteps
                        labelFontSize={9}
                    >
                        <ProgressStep
                            label="Details"
                            nextBtnText="Next"
                            nextBtnStyle={custom_style.form_btn}
                            nextBtnTextStyle={custom_style.form_btn_txt}
                            viewProps={{flex: 1, marginBottom: 10, paddingLeft: 5, paddingRight: 5}}
                            scrollable={false}
                        >
                            <ScrollView style={{width: '100%'}}>
                                <View style={custom_style.form_container}>
                                    <ImageBackground
                                        source={image ? {uri: 'data:image/jpg;base64,'+image} : require('../../../assets/car.png')}
                                        style={{width: '100%', height: 170, backgroundColor: '#C0C0C0', borderRadius: 5, justifyContent: 'flex-end', alignItems: 'flex-end'}}
                                        imageStyle={{borderRadius: 5}}
                                    >
                                        <Button
                                            type="solid"
                                            buttonStyle={{width: 50, height: 50}}
                                            containerStyle={{width: 50, height: 50, borderRadius: 25, marginBottom: 10, marginRight: 10}}
                                            onPress={() => pickImage()}
                                        >
                                            <View>
                                                <Image source={require('../../../assets/gallery.png')} style={{width: 25, height: 25, tintColor: '#fff'}}/>
                                            </View>
                                        </Button>
                                    </ImageBackground>
                                </View>
                                <View style={custom_style.form_container}>
                                    <Text>Location</Text>
                                    <ListItem.Accordion
                                        containerStyle={{borderWidth: 1, borderColor: '#D7D7D7', borderRadius: 5, height: 40, paddingTop: 0, paddingBottom: 0, paddingLeft: 5, paddingRight: 5, marginTop: 5}}
                                        content={
                                            <>
                                                {selectedLocationPhoto ?
                                                    <Avatar
                                                        avatarStyle={{resizeMode: 'contain'}}
                                                        source={{
                                                        uri: selectedLocationPhoto,
                                                        }}
                                                    /> : null
                                                }
                                                <ListItem.Content>
                                                    {selectedLocationName ? 
                                                                <ListItem.Title>{"     " + selectedLocationName}</ListItem.Title>
                                                        :
                                                        <ListItem.Title>Select Location</ListItem.Title>
                                                    }
                                                </ListItem.Content>
                                            </>
                                        }
                                        isExpanded={locationExpanded}
                                        onPress={() => {
                                        setLocationExpanded(!locationExpanded);
                                        }}
                                    >
                                        {locations.map((location) => {
                                            return (
                                                <ListItem containerStyle={{borderWidth: 1, borderColor: '#D7D7D7', borderRadius: 5, marginTop: 5, backgroundColor: '#f3f3f3', height: 40, paddingTop: 0, paddingBottom: 0, paddingLeft: 5, paddingRight: 5}} key={location.id} onPress={() => selectLocation(location.id, location.location_name, location.location_photo)}>
                                                    <Avatar
                                                        avatarStyle={{resizeMode: 'contain'}}
                                                        source={{
                                                            uri: location.location_photo,
                                                        }}
                                                    />
                                                    <ListItem.Content>
                                                        <ListItem.Title>{location.location_name}</ListItem.Title>
                                                    </ListItem.Content>
                                                </ListItem>
                                            )
                                        })}
                                    </ListItem.Accordion>
                                </View>
                                <View style={custom_style.form_container}>
                                    <Text>Brand</Text>
                                    <ListItem.Accordion
                                        containerStyle={{borderWidth: 1, borderColor: '#D7D7D7', borderRadius: 5, height: 40, paddingTop: 0, paddingBottom: 0, paddingLeft: 5, paddingRight: 5, marginTop: 5}}
                                        content={
                                            <>
                                                {selectedBrandPhoto ?
                                                    <Avatar
                                                        avatarStyle={{resizeMode: 'contain'}}
                                                        source={{
                                                        uri: selectedBrandPhoto,
                                                        }}
                                                    /> : null
                                                }
                                                <ListItem.Content>
                                                    {selectedBrandName ? 
                                                                <ListItem.Title>{"     " + selectedBrandName}</ListItem.Title>
                                                        :
                                                        <ListItem.Title>Select Brand</ListItem.Title>
                                                    }
                                                </ListItem.Content>
                                            </>
                                        }
                                        isExpanded={brandExpanded}
                                        onPress={() => {
                                        setBrandsExpanded(!brandExpanded);
                                        }}
                                    >
                                        {brands.map((brand) => {
                                            return (
                                                <ListItem containerStyle={{borderWidth: 1, borderColor: '#D7D7D7', borderRadius: 5, marginTop: 5, backgroundColor: '#f3f3f3', height: 40, paddingTop: 0, paddingBottom: 0, paddingLeft: 5, paddingRight: 5}} key={brand.id} onPress={() => selectBrand(brand.id, brand.brand_name, brand.brand_photo)}>
                                                    <Avatar
                                                        avatarStyle={{resizeMode: 'contain'}}
                                                        source={{
                                                        uri: brand.brand_photo,
                                                        }}
                                                    />
                                                    <ListItem.Content>
                                                        <ListItem.Title>{brand.brand_name}</ListItem.Title>
                                                    </ListItem.Content>
                                                </ListItem>
                                            )
                                        })}
                                    </ListItem.Accordion>
                                </View>
                                <View flexDirection='row' style={custom_style.form_container}>
                                    <View style={{width: '50%', paddingRight: 5}}>
                                        <Text>Model</Text>
                                        <TextInput
                                            autoCapitalize='none'
                                            style={custom_style.input}
                                            value={model}
                                            onChangeText={(e) => setModel(e)}
                                        />
                                    </View>
                                    <View style={{width: '50%', paddingLeft: 5}}>
                                        <Text>Year Model</Text>
                                        <TextInput
                                            autoCapitalize='none'
                                            style={custom_style.input}
                                            value={yearModel}
                                            onChangeText={(e) => setYearModel(e)}
                                        />
                                    </View>
                                </View>
                                <View style={custom_style.form_container}>
                                    <Text>Variant</Text>
                                    <TextInput
                                        autoCapitalize='none'
                                        style={custom_style.input}
                                        value={variant}
                                        onChangeText={(e) => setVariant(e)}
                                    />
                                </View>
                                <View style={custom_style.form_container}>
                                    <Text>Vehicle ID</Text>
                                    <TextInput
                                        autoCapitalize='none'
                                        style={custom_style.input}
                                        value={vehicleID}
                                        onChangeText={(e) => setVehicleID(e)}
                                    />
                                </View>
                                <View style={custom_style.form_container}>
                                    <Text>Mileage</Text>
                                    <TextInput
                                        autoCapitalize='none'
                                        style={custom_style.input}
                                        value={mileage}
                                        onChangeText={(e) => setMileage(e)}
                                    />
                                </View>
                                <View style={custom_style.form_container}>
                                    <Text>Price</Text>
                                    <TextInput
                                        autoCapitalize='none'
                                        style={custom_style.input}
                                        value={price}
                                        onChangeText={(e) => setPrice(e)}
                                    />
                                </View>
                                <View style={{marginBottom: 20}}></View>
                            </ScrollView>
                        </ProgressStep>
                        <ProgressStep
                            label="Description" 
                            previousBtnStyle={custom_style.form_btn} 
                            nextBtnStyle={custom_style.form_btn}
                            nextBtnTextStyle={custom_style.form_btn_txt}
                            previousBtnTextStyle={custom_style.form_btn_txt}
                            viewProps={{flex: 1, marginBottom: 10}}
                            scrollable={false}
                        >
                            <View style={{
                                height: '100%',
                                backgroundColor: '#ffffff',
                                borderRadius: 5,
                                elevation: 5,
                                borderColor: '#A7AE9C',
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.3,
                                shadowRadius: 2,
                            }}>
                                <RichToolbar
                                    editor={RichText}
                                    selectedIconTint="#0a5ca8"
                                    iconTint="#312921"
                                    style={{borderTopLeftRadius: 5, borderTopRightRadius: 5}}
                                    actions={[
                                        actions.setBold,
                                        actions.setItalic,
                                        actions.setUnderline,
                                        actions.insertBulletsList,
                                        actions.insertOrderedList,
                                        actions.insertLink,
                                        actions.undo,
                                        actions.redo,
                                    ]}
                                />
                                <RichEditor
                                    initialContentHTML={'Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>'}
                                    ref={RichText}
                                    value={descriptionText}
                                    onChange={(e) => setDescriptionText(e)}
                                    containerStyle={{borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}
                                    style={{
                                        flex: 1,
                                    }}
                                />
                            </View>
                        </ProgressStep>
                        <ProgressStep
                            label="Car Attributes" 
                            previousBtnStyle={custom_style.form_btn} 
                            nextBtnStyle={custom_style.form_btn}
                            nextBtnTextStyle={custom_style.form_btn_txt}
                            previousBtnTextStyle={custom_style.form_btn_txt}
                            viewProps={{flex: 1, marginBottom: 10, paddingLeft: 5, paddingRight: 5}}
                            scrollable={false}
                        >
                            <ScrollView style={{width: '100%'}}>
                                <View style={custom_style.form_container}>
                                    <Text>Body Type</Text>
                                    <TextInput
                                        autoCapitalize='none'
                                        style={custom_style.input}
                                        value={bodyType}
                                        onChangeText={(e) => setBodyType(e)}
                                    />
                                </View>
                                <View flexDirection='row' style={custom_style.form_container}>
                                    <View style={{flex: 1, paddingRight: 5}}>
                                        <Text>Exterior Color</Text>
                                        <TextInput
                                            autoCapitalize='none'
                                            style={custom_style.input}
                                            value={exteriorColor}
                                            onChangeText={(e) => setExteriorColor(e)}
                                        />
                                    </View>
                                    <View style={{flex: 1, paddingLeft: 5}}>
                                        <Text>Interior Color</Text>
                                        <TextInput
                                            autoCapitalize='none'
                                            style={custom_style.input}
                                            value={interiorColor}
                                            onChangeText={(e) => setInteriorColor(e)}
                                        />
                                    </View>
                                </View>
                                <View flexDirection='row' style={custom_style.form_container}>
                                    <View style={{flex: 1, paddingRight: 5}}>
                                        <Text>No. of Seats</Text>
                                        <TextInput
                                            autoCapitalize='none'
                                            style={custom_style.input}
                                            value={noOfSeats}
                                            onChangeText={(e) => setNoOfSeats(e)}
                                        />
                                    </View>
                                    <View style={{flex: 2, paddingLeft: 5}}>
                                        <Text>Seat Type</Text>
                                        <TextInput
                                            autoCapitalize='none'
                                            style={custom_style.input}
                                            value={seatType}
                                            onChangeText={(e) => setSeatType(e)}
                                        />
                                    </View>
                                </View>
                                <View style={custom_style.form_container}>
                                    <Text>Wheel Type</Text>
                                    <TextInput
                                        autoCapitalize='none'
                                        style={custom_style.input}
                                        value={wheelType}
                                        onChangeText={(e) => setWheelType(e)}
                                    />
                                </View>
                                <View flexDirection='row' style={custom_style.form_container}>
                                    <View style={{flex: 1, paddingRight: 5}}>
                                        <Text>Engine Type</Text>
                                        <TextInput
                                            autoCapitalize='none'
                                            style={custom_style.input}
                                            value={engineType}
                                            onChangeText={(e) => setEngineType(e)}
                                        />
                                    </View>
                                    <View style={{flex: 1, paddingLeft: 5}}>
                                        <Text>Fuel Type</Text>
                                        <TextInput
                                            autoCapitalize='none'
                                            style={custom_style.input}
                                            value={fuelType}
                                            onChangeText={(e) => setFuelType(e)}
                                        />
                                    </View>
                                </View>
                                <View style={custom_style.form_container}>
                                    <Text>Transmission</Text>
                                    <TextInput
                                        autoCapitalize='none'
                                        style={custom_style.input}
                                        value={transmission}
                                        onChangeText={(e) => setTransmission(e)}
                                    />
                                </View>
                                <View flexDirection='row' style={custom_style.form_container}>
                                    <View style={{flex: 1, paddingRight: 5}}>
                                        <Text>Maximum Power</Text>
                                        <TextInput
                                            autoCapitalize='none'
                                            style={custom_style.input}
                                            value={maximumPower}
                                            onChangeText={(e) => setMaximumPower(e)}
                                        />
                                    </View>
                                    <View style={{flex: 1, paddingLeft: 5}}>
                                        <Text>Maximum Torque</Text>
                                        <TextInput
                                            autoCapitalize='none'
                                            style={custom_style.input}
                                            value={maximumTorque}
                                            onChangeText={(e) => setMaximumTorque(e)}
                                        />
                                    </View>
                                </View>
                                <View flexDirection='row' style={custom_style.form_container}>
                                    <View style={{flex: 1, paddingRight: 5}}>
                                        <Text>Engine Capacity</Text>
                                        <TextInput
                                            autoCapitalize='none'
                                            style={custom_style.input}
                                            value={engineCapacity}
                                            onChangeText={(e) => setEngineCapacity(e)}
                                        />
                                    </View>
                                    <View style={{flex: 1, paddingLeft: 5}}>
                                        <Text>Displacement</Text>
                                        <TextInput
                                            autoCapitalize='none'
                                            style={custom_style.input}
                                            value={displacement}
                                            onChangeText={(e) => setDisplacement(e)}
                                        />
                                    </View>
                                </View>
                                <View style={custom_style.form_container}>
                                    <Text>Drivetrain</Text>
                                    <TextInput
                                        autoCapitalize='none'
                                        style={custom_style.input}
                                        value={drivetrain}
                                        onChangeText={(e) => setDriveTrain(e)}
                                    />
                                </View>
                                <View flexDirection='row' style={custom_style.form_container}>
                                    <View style={{flex: 1, paddingRight: 5}}>
                                        <Text>Number of Cylinders</Text>
                                        <TextInput
                                            autoCapitalize='none'
                                            style={custom_style.input}
                                            value={numberOfCylinders}
                                            onChangeText={(e) => setNumberOfCylinders(e)}
                                        />
                                    </View>
                                    <View style={{flex: 1, paddingLeft: 5}}>
                                        <Text>Number of Valves</Text>
                                        <TextInput
                                            autoCapitalize='none'
                                            style={custom_style.input}
                                            value={numberOfValves}
                                            onChangeText={(e) => setNumberOfValves(e)}
                                        />
                                    </View>
                                </View>
                                <View style={{marginBottom: 20}}></View>
                            </ScrollView>
                        </ProgressStep>
                        <ProgressStep
                            label="Amenities" 
                            previousBtnStyle={custom_style.form_btn} 
                            nextBtnStyle={custom_style.form_btn}
                            nextBtnTextStyle={custom_style.form_btn_txt}
                            previousBtnTextStyle={custom_style.form_btn_txt}
                            viewProps={{flex: 1, marginBottom: 10, paddingLeft: 5, paddingRight: 5}}
                            scrollable={false}
                        >
                            <ScrollView style={{width: '100%'}}>
                                <View flexDirection='row' style={custom_style.form_container}>
                                    <View style={{flex: 1, marginRight: 5}}>
                                        <Text>Amenities</Text>
                                        <TextInput
                                            autoCapitalize='none'
                                            style={custom_style.input}
                                            value={amenities}
                                            onChangeText={(e) => setAmenities(e)}
                                        />
                                    </View>
                                    <View style={{width: 100, justifyContent: 'flex-end'}}>
                                        <Button
                                            buttonStyle={{width: 100, height: 40}}
                                            containerStyle={{width: 100, borderRadius: 5, height: 40}}
                                            onPress={() => addAmenities(amenities)}
                                        >
                                            Add
                                        </Button>
                                    </View>
                                </View>
                                <View flexDirection='row' style={{flex: 1, flexWrap: 'wrap'}}>
                                    {allAmenities ?
                                        allAmenities.split(',').map((amenity) => {
                                            return (
                                                <Chip
                                                    key={amenity}
                                                    title={amenity}
                                                    icon={{
                                                        name: 'close',
                                                        type: 'font-awesome',
                                                        size: 20,
                                                        color: 'red'
                                                    }}
                                                    onPress={() => removeAmenity(amenity)}
                                                    iconRight
                                                    type="outline"
                                                    containerStyle={{margin: 5}}
                                                />
                                            )
                                        })
                                        :
                                        null
                                    }
                                </View>
                                <View style={{marginBottom: 20}}></View>
                            </ScrollView>
                        </ProgressStep>
                        <ProgressStep
                            scrollViewProps={{borderColor: 'grey', borderBottomWidth: 1}}
                            label="Safety Features" 
                            previousBtnStyle={custom_style.form_btn} 
                            nextBtnStyle={custom_style.form_btn}
                            nextBtnTextStyle={custom_style.form_btn_txt}
                            previousBtnTextStyle={custom_style.form_btn_txt}
                            viewProps={{flex: 1, marginBottom: 10, paddingLeft: 5, paddingRight: 5}}
                            scrollable={false}
                            onSubmit={() => createListing()}
                        >
                            <ScrollView style={{width: '100%'}}>
                                <View flexDirection='row' style={custom_style.form_container}>
                                    <View style={{flex: 1, marginRight: 5}}>
                                        <Text>Security Features</Text>
                                        <TextInput
                                            autoCapitalize='none'
                                            style={custom_style.input}
                                            value={safetyFeatures}
                                            onChangeText={(e) => setSafetyFeatures(e)}
                                        />
                                    </View>
                                    <View style={{width: 100, justifyContent: 'flex-end'}}>
                                        <Button
                                            buttonStyle={{width: 100, height: 40}}
                                            containerStyle={{width: 100, borderRadius: 5, height: 40}}
                                            onPress={() => addSafetyFeatures(safetyFeatures)}
                                        >
                                            Add
                                        </Button>
                                    </View>
                                </View>
                                <View flexDirection='row' style={{flex: 1, flexWrap: 'wrap'}}>
                                    {allSafetyFeatures ?
                                        allSafetyFeatures.split(',').map((safety_features) => {
                                            return (
                                                <Chip
                                                    key={safety_features}
                                                    title={safety_features}
                                                    icon={{
                                                        name: 'close',
                                                        type: 'font-awesome',
                                                        size: 20,
                                                        color: 'red'
                                                    }}
                                                    onPress={() => removeSafetyFeatures(safety_features)}
                                                    iconRight
                                                    type="outline"
                                                    containerStyle={{margin: 5}}
                                                />
                                            )
                                        })
                                        :
                                        null
                                    }
                                </View>
                                <View style={{marginBottom: 20}}></View>
                            </ScrollView>
                        </ProgressStep>
                    </ProgressSteps>
                </View>
            </View>
        </SafeAreaView>
    )
    }

const custom_style = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 60,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 1000,
    },
    imagebackground: {
        height: window_width * 0.5,
        width: window_width * 0.9,
        marginTop: 20,
    },
    form_container: {
        marginTop: 10,
        flex: 1,
        width: window_width * 0.9,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        height: 40,
        borderColor: '#D7D7D7',
        marginTop: 5,
    },
    form_container: {
        width: '100%',
        marginBottom: 10,
    },
    form_btn_proceed: {
        width: 100, 
        height: 50, 
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#8bc63f',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginRight: 50,
        marginBottom: 30,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    form_btn: {
        width: 100, 
        height: 50, 
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#8bc63f',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginRight: -30,
        marginLeft: -30,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    form_btn_txt: {
        color: '#ffffff',
        fontSize: 14
    }
})