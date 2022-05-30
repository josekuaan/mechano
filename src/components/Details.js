import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useEffect } from "react";
import Question from "../../assets/custome_questions";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
export default function Details({ route }) {
  const [quest, setQuest] = useState([]);
  useEffect(() => {
    console.log("route.params.id", route.params.id);
    setQuest(
      Question.filter((quest, index) => {
        if (quest.id == route.params.id) {
          return quest.steps;
        }
      })
    );
  }, []);
  if (quest == []) {
    return (
      <View>
        <Text>No Steps for this question</Text>
      </View>
    );
  } else {
    return (
      <ScrollView style={styles.container}>
        <View>
          {quest.map((el, index) => (
            <Text key={index} style={styles.title}>
              {el.steps.title}
            </Text>
          ))}
          {quest.map((el) =>
            el.steps.body.map((step, index) => (
              <View key={index} style={styles.body}>
                <Text>{index + 1}. </Text>
                <Text style={styles.step}>{step}</Text>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  step: {
    paddingRight: 8,
  },

  title: {
    textAlign: "center",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    flexDirection: "row",
    padding: 10,
  },
});
