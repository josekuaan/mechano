import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  Presable,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
// import { AppLoading } from "expo-app-loading";
import {
  useFonts,
  Satisfy_400Regular,
  Poppins_400Regular,
} from "@expo-google-fonts/dev";
import key_words from "../../assets/key_words";

export default function Home({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Satisfy_400Regular,
  });

  const [value, setVal] = useState([]);

  const onChangeHandler = (text) => {
    const _keyWord = key_words.filter((item, key) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    console.log(_keyWord);
    setVal(_keyWord);
  };

  return (
    <KeyboardAvoidingView style={styles.header}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          <View style={styles.logo}>
            <Text style={styles.logo}>MECHANO</Text>
            {/* <Image
                style={{ width: 140, height: 25 }}
                source={require("../images/mechano.png")}
              /> */}
          </View>
          <View style={{ padding: 30 }}>
            <View>
              <Image
                //   style={{ width: 140, height: 30 }}
                source={require("../images/sample.png")}
              />
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  color: "#3957ED",
                  fontSize: 24,
                  fontWeight: "bold",
                  paddingVertical: 10,
                }}
              >
                HOW CAN WE HELP YOU?
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
              <EvilIcons
                name="search"
                style={styles.search}
                size={30}
                color="black"
              />

              <TextInput
                placeholder=" Search"
                value={value}
                onChangeText={onChangeHandler}
              />
            </View>
            <TouchableOpacity onPress={() => setVal([])}>
              <Ionicons
                name="close"
                size={24}
                color="black"
                style={styles.searchRight}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <View style={{ height: 300 }}>
              <FlatList
                data={value}
                renderItem={({ item, index }) => {
                  return (
                    <View
                      key={index}
                      style={{ paddingVertical: 8, flexDirection: "row" }}
                    >
                      <EvilIcons
                        name="search"
                        // style={styles.search}
                        size={24}
                        color="black"
                      />
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("question", { id: item.id })
                        }
                      >
                        <Text style={{ paddingLeft: 8 }}>{item.title}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                }}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ffff",
    height: 900,
  },
  logo: {
    marginTop: 20,
    marginHorizontal: 20,

    fontFamily: "Satisfy_400Regular",
    fontSize: 30,
    color: "white",
    textShadowColor: "#3957ED",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 15,
    // fontWeight: "800",
  },
  container: {
    backgroundColor: "white",
    marginHorizontal: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "transparent",

    flexDirection: "row",
    justifyContent: "space-between",
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  search: {
    padding: 5,
    paddingTop: 12,
    paddingLeft: 5,
    marginRight: 10,
    // fontWeight: 50,
    backgroundColor: "#3957ED36",
  },
  searchRight: {
    // marginTop: 5,
    paddingTop: 10,
    padding: 8,
  },
  card: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: "#dbdbdb",
    flexDirection: "row",
    // padding: 10,
  },

  text: {
    color: "#3957ED",
    fontSize: 24,
    fontWeight: "bold",
    // paddingBottom: 40,
  },
});
