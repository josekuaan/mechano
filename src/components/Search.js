import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <EvilIcons
          name="search"
          style={styles.search}
          size={30}
          color="black"
        />
        <TextInput placeholder="search" />
      </View>
      <Ionicons
        name="close"
        size={24}
        color="black"
        style={styles.searchRight}
      />
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    width: "95%",
    backgroundColor: "white",
    margin: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#dbdbdb",
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  search: {
    padding: 5,
    fontWeight: 50,
  },
  searchRight: {
    marginTop: 5,
  },
});
