import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";

function Layout() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>This is the layout</Text>
        </View>
    );
}

export default Layout;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
    },
});