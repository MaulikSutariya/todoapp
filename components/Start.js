import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import { StatusBar } from 'expo-status-bar';

function Start({ navigation }) {
  const navigateonboarding = () => {
    navigation.navigate("Onboarding1");
  };

  return (
    <View style={styles.startpagemain}>
      <StatusBar style="dark" />
      <Image
        style={styles.start2img}
        source={require("../assets/start2.png")}
      />
      <Image
        style={styles.start1img}
        source={require("../assets/start1.png")}
      />
      <Image style={styles.Line2img} source={require("../assets/Line2.png")} />

      <View style={styles.startcontent}>
        <Text style={styles.startcontenttext}>Convenient and</Text>
        <Text style={styles.startcontenttext}>Productive task</Text>
        <Text style={styles.startcontenttext}>Manager</Text>
      </View>

      <Pressable style={styles.getstartbtn} onPress={navigateonboarding}>
        <Text style={styles.startbtntext}>Get Started</Text>
      </Pressable>
    </View>
  );
}

export default Start;

const styles = StyleSheet.create({
  startpagemain: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FCD12A",
    paddingHorizontal: 20,
    alignItems: "center",
    position: "relative",
  },
  getstartbtn: {
    position: "absolute",
    bottom: 40,
    backgroundColor: "#111111",
    borderRadius: 20,
    textAlign: "center",
    width: "95%",
    padding: 20,
  },
  startbtntext: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
  startcontent: {
    position: "absolute",
    bottom: "24%",
    width: "100%",
    paddingLeft: 20,
  },
  startcontenttext: {
    color: "black",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "left",
    lineHeight: 45,
  },
  welcome: {
    color: "white",
    marginTop: 70,
    fontSize: 35,
    color: "black",
    fontWeight: "600",
  },
  start2img: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  start1img: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  Line2img: {
    position: "absolute",
    top: "15%",
  },
});
