import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";

export default function App() {
  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" />
      <View
        style={{ height: "100%", width: "100%", backgroundColor: "black" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
