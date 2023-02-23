import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

function Tasklist({ navigation }) {
  const task = [
    {
      title: "Gym",
      description: "Today Is Leg Day",
    },
    {
      title: "Meeting",
      description: "Today Important Meeting in Mumbai",
    },
  ];

  const navigateonboarding = () => {
    navigation.navigate("Addtask");
  };
  const navigateonboarding2 = () => {
    navigation.navigate("Home");
  };

  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var options = { month: "long" };
    var monthName = new Intl.DateTimeFormat("en-US", options).format(
      new Date(2023, month - 1)
    );
    var year = new Date().getFullYear();
    return monthName + " " + date + " ," + year;
  };
  return (
    <View style={styles.tasklist}>
      <StatusBar style="dark" />
      <Pressable onPress={navigateonboarding2}>
        <Image style={styles.back} source={require("../assets/Back.png")} />
      </Pressable>
      <View style={styles.taskflex}>
        <View style={styles.datesection}>
          <Text style={styles.datesectiondate}>{getCurrentDate()}</Text>
          <Text style={styles.datesectiontoday}>Today</Text>
        </View>
        <Pressable style={styles.edittask} onPress={navigateonboarding}>
          <Text style={styles.edittask1}>+ Add Task</Text>
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.alltask}
      >
        {task.map((tasks, i) => {
          return (
            <View key={i} style={styles.alltask1}>
              <View style={styles.sessiontoday}>
                <Text style={styles.tasknum}>Task {i + 1}</Text>
                <View style={styles.sessiontodayTime}>
                  <Text style={styles.sessiontodayTimetext}>{tasks.title}</Text>
                  <Text style={styles.sessiontodayTimetext2}>9:00 AM</Text>
                </View>
                <View style={styles.discuss}>
                  <Text style={styles.discusstext}>{tasks.description}</Text>
                  <Pressable style={styles.delete}>
                    <Text style={styles.deletetext}>Delete</Text>
                  </Pressable>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  marginTop: 20,
                }}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Tasklist;

const styles = StyleSheet.create({
  tasklist: {
    padding: 20,
    height: "100%",
  },
  back: {
    marginTop: 20,
  },
  tasknum: {
    color: "white",
    fontSize: 13,
    fontWeight: "500",
    backgroundColor: "black",
    width: 60,
    textAlign: "center",
    height: 30,
    paddingTop: 6,
    borderRadius: 10,
    marginBottom: 10,
  },
  edittask: {
    backgroundColor: "black",
    height: 40,
    width: 100,
    borderRadius: 7,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  edittask1: {
    color: "white",
    fontSize: 15,
  },
  taskflex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  datesectiondate: {
    color: "#919191",
    fontSize: 18,
    fontWeight: "500",
  },
  datesectiontoday: {
    color: "#111111",
    fontSize: 25,
    fontWeight: "600",
    marginTop: 2,
  },
  sessiontoday: {
    backgroundColor: "#FABB18",
    borderRadius: 13,
    padding: 20,
    justifyContent: "center",
    marginTop: 17,
  },
  sessiontodayTime: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sessiontodayTimetext: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
  },
  sessiontodayTimetext2: {
    color: "#4B4B4B",
    fontSize: 14,
    fontWeight: "500",
  },
  discuss: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  discusstext: {
    color: "#4B4B4B",
    fontSize: 14,
    fontWeight: "500",
    width: "55%",
  },
  deletetext: {
    color: "white",
    fontSize: 15,
  },
  delete: {
    backgroundColor: "red",
    height: 40,
    width: 80,
    borderRadius: 7,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  alltask: {
    marginTop: 10,
  },
  alltask1: {},
});
