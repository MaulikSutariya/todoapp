import React, { useRef, useState } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";

function Projecttimetracker({ navigation }) {
  const navigateonboarding = () => {
    navigation.navigate("Home");
  };

  // stop watch
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!running) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      setRunning(true);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setRunning(false);
  };

  const formatTime = (time) => {
    let centiseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(time / 3600000)).slice(-2);
    return `${hours}:${minutes}:${seconds}.${centiseconds}`;
  };

  return (
    <View style={styles.Projecttimetracker}>
      <StatusBar style="dark" />
      <Pressable onPress={navigateonboarding}>
        <Image style={styles.back} source={require("../assets/Back.png")} />
      </Pressable>

      <View style={styles.stopwatchmain}>
        <View style={styles.stopwatch}>
          <Text style={styles.stopwatchnum}>{formatTime(time)}</Text>
        </View>
      </View>
      {!running ? (
        <Pressable style={styles.startbtn} onPress={startTimer}>
          <Text style={styles.startbtntext}>Start</Text>
        </Pressable>
      ) : (
        <Pressable style={styles.startbtn} onPress={stopTimer}>
          <Text style={styles.startbtntext}>Stop</Text>
        </Pressable>
      )}

      <Pressable style={styles.resetbtn} onPress={resetTimer}>
        <Text style={styles.sresetbtntext}>Reset</Text>
      </Pressable>
    </View>
  );
}

export default Projecttimetracker;

const styles = StyleSheet.create({
  Projecttimetracker: {
    height: "100%",
    padding: 20,
  },
  back: {
    marginTop: 20,
  },
  stopwatch: {
    height: 270,
    width: 270,
    backgroundColor: "#FABB18",
    borderRadius: 150,
    borderWidth: 15,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  stopwatchmain: {
    alignItems: "center",
    marginTop: 60,
  },
  stopwatchnum: {
    fontSize: 30,
    width:180,
    fontWeight: "600",
    color: "white",
  },
  startbtn: {
    backgroundColor: "black",
    height: 60,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },
  startbtntext: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  stbtn: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  resetbtn: {
    backgroundColor: "black",
    height: 60,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  sresetbtntext: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
});
