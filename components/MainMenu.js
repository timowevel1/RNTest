import {ScrollView, StyleSheet, View, Text} from "react-native";
import CardTest from "./CardTest";

export default function MainMenu() {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.ispotStatus}>
                    asd!
                </Text>
            </View>
            <ScrollView horizontal={true} style={styles.cardContainer}>
                <View style={styles.card}>
                    <CardTest />
                </View>
                <View style={styles.card}>
                    <CardTest />
                </View>
                <View style={styles.card}>
                    <CardTest />
                </View>
                <View style={styles.card}>
                    <CardTest />
                </View>
            </ScrollView>
            <View style={styles.routesContainer}>
                <View style={styles.routes1}>
                </View>
                <View style={styles.routes2}>
                </View>
            </View>
            <View style={styles.routesContainer2}>
                <Text>asd</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContainer: {
        flexGrow: 0,
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10
    },
    card: {
        width: 200,
        marginRight: 10
    },
    routesContainer: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "lightgrey",
        borderRadius: 10,
        margin: 3
    },
    routesContainer2: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    routes1: {
        flex: 1,
        padding: 5,
        backgroundColor: "red",
    },
    routes2: {
        flex: 1,
        padding: 5,
        backgroundColor: "yellow",
    },
    ispotStatus: {
        paddingLeft: 10,
        paddingTop: 5
    }
});
