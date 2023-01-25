import {StyleSheet, SafeAreaView} from 'react-native'
import Home from '../../src/components/Home/Home'

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.contactArea}>
            <Home navigation={navigation}/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    contactArea: {
        flex: 1,
    }
});

export default HomeScreen;