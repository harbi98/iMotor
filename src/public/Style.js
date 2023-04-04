import { StyleSheet, Dimensions } from "react-native";

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
});
    
export { styles };