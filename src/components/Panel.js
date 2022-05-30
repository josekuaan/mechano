import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

class Panel extends Component {
  constructor(props) {
    super(props);
    this.showDetails = this.showDetails.bind(this);

    this.icons = {
      up: require("../images/up-ward-arrow.jpg"),
      down: require("../images/down-ward-arrow.jpg"),
    };

    this.state = {
      title: props.title,
      expanded: false,
      animation: new Animated.Value(0),
      minHeight: 0,
      maxHeight: 0,
      maxValueSet: false,
      minValueSet: false,
      cardHeight: "auto",
    };
  }

  toggle() {
    let initialValue = this.state.expanded
        ? this.state.maxHeight + this.state.minHeight
        : this.state.minHeight,
      finalValue = this.state.expanded
        ? this.state.minHeight
        : this.state.maxHeight + this.state.minHeight;

    this.setState((prevState) => ({
      expanded: !prevState.expanded,
    }));
    this.state.animation.setValue(initialValue);

    Animated.spring(this.state.animation, {
      toValue: finalValue,
      useNativeDriver: true,
    }).start();
  }

  _setMaxHeight(event) {
    if (!this.state.maxValueSet) {
      this.setState({
        maxHeight: event.nativeEvent.layout.height,
        maxValueSet: true,
      });
    }
  }

  _setMinHeight(event) {
    console.log(event.nativeEvent.layout.height);
    if (!this.state.minValueSet) {
      this.state.animation.setValue(event.nativeEvent.layout.height);

      this.setState({
        minHeight: event.nativeEvent.layout.height,
        minValueSet: true,
      });
    }
  }

  componentDidMount() {
    this.animationId = this.state.animation.addListener(({ value }) => {
      this.setState({
        cardHeight: value,
      });
    });
  }

  componentWillUnmount() {
    this.state.animation.removeListener(this.animationId);
  }

  showDetails = (_id) => {
    console.log(_id);
    console.log(this.props.navigation);
    console.log("================================");
    this.props.navigation.navigate("Know More", {
      id: this.props.id,
    });
  };
  render() {
    let icon = this.icons["down"];

    if (this.state.expanded) {
      icon = this.icons["up"];
    }

    return (
      <Animated.View
        style={[styles.container, { height: this.state.cardHeight }]}
      >
        <View onLayout={this._setMinHeight.bind(this)}>
          <View style={styles.titleContainer}>
            <TouchableHighlight
              underlayColor={"transparent"}
              onPress={() => this.showDetails(this.props.id)}
            >
              <Text style={styles.title}>
                <FontAwesome name="circle" style={styles.circle} />
                <Text> </Text> <Text> </Text>
                {this.state.title}
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.toggle.bind(this)}
              underlayColor="white"
              style={styles.image}
            >
              {this.state.expanded ? (
                <FontAwesome
                  name="caret-up"
                  size={18}
                  style={styles.buttonImage}
                />
              ) : (
                <FontAwesome
                  name="caret-down"
                  size={18}
                  style={styles.buttonImage}
                />
              )}
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
          {this.props.children}
        </View>
      </Animated.View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 14,

    overflow: "hidden",
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },

  titleContainer: {
    flexDirection: "row",
    // alignSelf: "flex-start",
    // width: "100%",
    // display: "flex",

    justifyContent: "space-between",
  },
  title: {
    padding: 10,
    fontSize: 13,
    fontWeight: "bold",
  },

  buttonImage: {
    paddingTop: 12,
    paddingRight: 14,
    textAlign: "center",
  },
  body: {
    padding: 10,
    paddingTop: 0,
    // paddingBottom: 5,
  },
  circle: {
    marginRight: 14,
    color: "#3957ED",
  },
});

export default Panel;
