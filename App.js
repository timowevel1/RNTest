import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PaperProvider} from "react-native-paper";
import DrawerTest from "./components/DrawerTest";


export default function App() {
    return (
        <PaperProvider>
            <SafeAreaView style={styles.container}>
                <DrawerTest />
            </SafeAreaView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardContainer: {
        flex: 1,
        marginBottom: 30
    },
    card: {
        marginRight: 20,
        width: 250
    }
});
