import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

const Home = ({navigation}) => {
    return (
        <View style={styles.homeContainer}>
            <View style={styles.contact}>
                <TouchableOpacity onPress={()=>navigation.navigate("ProductListStack")}>
                    <Text style={styles.homeTitle}>Hello, World ! </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
    },
    home: {
        flex: 1,
        padding: 5,
        ...Platform.select({
            ios: {
                marginBottom: "0%"
            },
            android: {
                marginBottom: 0
            }
        })
    },
    homeTitle: {
        textAlign: "center",
        padding:10,
        backgroundColor:"red",
    }
});

export default Home;