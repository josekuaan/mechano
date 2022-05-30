import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogoTitle from "./src/components/LogoTitle";
import Details from "./src/components/Details";
import Panels from "./src/components/Panels";
import Home from "./src/components/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          options={{ header: () => null }}
          component={Home}
        />
        <Stack.Screen
          name="question"
          options={{ header: () => null }}
          component={Panels}
        />
        <Stack.Screen name="Know More" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
