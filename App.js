import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const BottomStack = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Home from "app/screens/Home";
import Notifications from "app/screens/WearNotifications";

import ScanCloth from "app/screens/ScanCloth";
import MyWardrobe from "app/screens/MyWardrobe";

const HomeStackScreen = () => {
  // problem occurs with the screens in this navigator
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen
        name="ScreenName"
        component={ComponentToDisplayOnClick}
      />
      <HomeStack.Screen
        name="ScreenName"
        component={ComponentToDisplayOnClick}
      />
    </HomeStack.Navigator>
  );
};

// This is Bottom Tab
const LoggedInNavigator = () => (
  <BottomStack.Navigator
    screenOptions={() => ({
      tabBarStyle: {
        backgroundColor: "#1B1464",
        height: 65,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingBottom: 10,
        paddingTop: 10,
      },
      headerShown: false,
      tabBarLabel: () => {
        return null;
      },
    })}>
    <BottomStack.Screen name="HomeStack" component={HomeStackScreen} />
    {/* ... other bottom tabs */}
  </BottomStack.Navigator>
);

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={LoggedInNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
