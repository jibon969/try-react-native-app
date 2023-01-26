import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native'


import ProductList from '../components/ProductList/ProductList';
import {Feather} from '@expo/vector-icons';


const ProductListScreen = () => {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];


    // const Item = () => (
    //     <ProductList/>
    // );

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
                {/*<ScrollView>*/}
                {/*<ProductList/>*/}
                {/*</ScrollView>*/}

                <FlatList
                    data={DATA}
                    renderItem={() => <ProductList/>}
                    numColumns={3}
                />

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
    },

    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },

    productCard: {
        backgroundColor: "#FFF",
        borderRadius: 7,
        elevation: 4,
        shadowOffset: {
            width: 1, height: 1
        },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        flexDirection:"row",
        flex:3

    },
    productCardImage: {
        width: "100%",
        height: 140,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    productCardOfferTitle: {
        position: 'absolute',
        color: "#FFF",
        backgroundColor: "#E04F54",
        padding: 2,
        borderRadius: 5,
        alignSelf: 'flex-end',
        overflow: "hidden",
    },
    productCardContent: {
        margin: 5,
        borderRadius: 7
    },

    productCardTitle: {
        fontSize: 12,
        height: 45,
    },
    productPriceContent: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 10
    },

    bdtSymbol: {
        marginRight: 4,
        fontSize: 11,
    },
    productNewPrice: {
        fontSize: 11,
    },
    productOldPrice: {
        fontSize: 11,
        marginRight: 5,
        color: "red",
        textDecorationLine: 'line-through'
    },
    noProductFound: {
        flex: 1,
        flexWrap: "wrap",
        ...Platform.select({
            ios: {
                marginBottom: "0%"
            },
            android: {
                marginBottom: 0
            }
        }),
        marginVertical: 100,
        margin: 10
    },

    outOfStockMessage: {
        alignSelf: "center",
        textAlign: "center",
        backgroundColor: "black",
        color: "#FFF",
        borderRadius: 4,
        overflow: "hidden",
        paddingBottom: 1,
        fontSize: 12,
        width: 100,
        marginTop: 3
    },

    offerMessage: {
        alignSelf: "center",
        textAlign: "center",
        color: "#FFF",
        backgroundColor: "#E04F54",
        borderRadius: 10,
        overflow: "hidden",
        paddingBottom: 1,
        fontSize: 12,
        width: 50,
        marginTop: 4
    },

    available: {
        overflow: "hidden",
        paddingBottom: 0,
        marginTop: 0
    },
    profileImage: {
        width: "100%",
        height: 300,
        borderRadius: 20,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#ccccca",
        marginBottom: 10
    },

    backButton: {
        padding: 7,
        backgroundColor: "#183153",
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 8,
        fontWeight: "bold",
        borderColor: "#183153",
        color: "#FFF",
        overflow: "hidden"
    }

});

export default ProductListScreen;