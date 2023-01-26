import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity
} from 'react-native'


import ProductList from '../components/ProductList/ProductList';
import {Feather} from '@expo/vector-icons';


const ProductListScreen = () => {
    return (
        <SafeAreaView style={styles.productListContainer}>
            <View style={[styles.viewContainer]}>
                <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                    <View style={{flex: 1}}>
                        <View style={styles.shortBy}>
                            <Text style={styles.shortByTitle}>Sort By</Text>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <Text>Hello</Text>
                    </View>
                </View>
            </View>
            <View style={styles.productListWrap}>
                <ScrollView>
                    <ProductList/>
                </ScrollView>
            </View>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    productListContainer: {
        flex: 1,
    },
    productListWrap: {
        flex: 1,
        ...Platform.select({
            ios: {
                marginBottom: "0%"
            },
            android: {
                marginBottom: 0
            }
        })
    },
    viewContainer: {
        marginHorizontal: 4,
        zIndex: 1
    },

    shortBy: {
        overflow: "hidden"
    },

    shortByTitle: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: "bold"
    },

    noProductWrap: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    noProductTitle: {
        fontWeight: "bold",
        fontSize: 20,
        margin: 2
    },
    productNotDataFound: {
        marginTop: 10,
        padding: 7,
        backgroundColor: "#F9C65D",
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#F9C65D",
        color: "#0C0C0C",
        overflow: "hidden"
    }

});

export default ProductListScreen;