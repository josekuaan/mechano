import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import Panels from "./Panels";
import Search from "./Search";

export default function Content() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Search />
        <Panels />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingTop: 10,
    // marginHorizontal: 6,
  },
});
