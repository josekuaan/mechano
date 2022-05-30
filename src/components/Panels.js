import React, { useEffect, useState } from "react";
import {
  AppRegistry,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import Panel from "./Panel";
import Question from "../../assets/custome_questions";
import Search from "./Search";

const Panels = ({ navigation, route }) => {
  const [quest, setQuest] = useState([]);
  useEffect(() => {
    const _keyWord = Question.filter((item, key) => item.id == route.params.id);
    setQuest(_keyWord);
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Search />
        {quest.map((quest) => (
          <Panel
            title={quest.title}
            key={quest.id}
            id={quest.id}
            navigation={navigation}
          >
            {/* <View style={styles.dot}></View> */}
            <Text>{quest.decription}</Text>
          </Panel>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
    paddingBottom: 10,
  },
});

AppRegistry.registerComponent("Panels", () => Panels);
export default Panels;
