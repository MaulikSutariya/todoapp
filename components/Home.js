import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";

function Home({ navigation }) {
  const navigateonboarding = () => {
    navigation.navigate("Tasklist");
  };

  return (
    <View style={styles.Home}>
      <StatusBar style="dark" />
      <View style={styles.addtask}>
        <View>
          <Text style={styles.username}>Hello, Maulik ! 👋</Text>
          <Text style={styles.task}>You’ve got</Text>
          <Text style={styles.task}>5 tasks today.</Text>
        </View>
        <Pressable style={styles.edittask} onPress={navigateonboarding}>
          <Text style={styles.edittask1}>All Tasks</Text>
        </Pressable>
      </View>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          placeholder="Search something"
          underlineColorAndroid="transparent"
        />
        <Image
          style={styles.searchIcon}
          source={require("../assets/Search.png")}
        />
      </View>
      <View style={styles.timetracker}>
        <View>
          <Text style={styles.timetrackertext1}>Project time tracker</Text>
          <Text style={styles.timetrackertext2}>You can start tracking</Text>
        </View>
        <Pressable style={styles.timetrackerbg}>
          <Image
            style={styles.timetrackerimg}
            source={require("../assets/track.png")}
          />
        </Pressable>
      </View>

      <Text style={styles.mytask}>My tasks</Text>

      <View style={styles.taskday}>
        <Text style={styles.taskcurrent}>Today</Text>
        <Text style={styles.tasktomorrow}>Tomorrow</Text>
        <Text style={styles.tasktomorrow}>Upcoming</Text>
      </View>

      <View style={styles.sessiontoday}>
        <View style={styles.sessiontodayTime}>
          <Text style={styles.sessiontodayTimetext}>Meeting</Text>
          <Text style={styles.sessiontodayTimetext2}>9:00 AM</Text>
        </View>
        <View style={styles.discuss}>
          <Text style={styles.discusstext}>
            Discuss team tasks {"\n"} for the day
          </Text>
          <Pressable style={styles.edittask}>
            <Text style={styles.edittask1}>Edit Task</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  Home: {
    height: "100%",
    padding: 25,
    paddingTop: 45,
  },
  addtask: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  username: {
    fontSize: 18,
    fontWeight: "600",
    color: "#919191",
    marginBottom: 10,
  },
  task: {
    fontSize: 26,
    fontWeight: "700",
    color: "black",
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#EEEEEE",
    padding: 15,
    paddingLeft: 20,
    borderRadius: 12,
    borderWidth: 0.8,
    borderColor: "gray",
    marginTop: 40,
  },
  searchIcon: {
    height: 28,
    width: 28,
  },
  input: {
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 0,
    backgroundColor: "#EEEEEE",
    color: "#424242",
    width: "80%",
    fontSize: 18,
  },
  timetracker: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 15,
    marginTop: 30,
  },
  timetrackertext1: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
  },
  timetrackertext2: {
    color: "#9D9D9D",
    fontSize: 17,
    fontWeight: "500",
  },
  timetrackerbg: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  mytask: {
    color: "#111111",
    fontWeight: "600",
    fontSize: 26,
    marginTop: 30,
    marginLeft: 8,
  },
  taskday: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 25,
  },
  taskcurrent: {
    color: "#FABB18",
    fontSize: 20,
    fontWeight: "600",
  },
  tasktomorrow: {
    color: "#9D9D9D",
    fontSize: 20,
    fontWeight: "600",
  },
  sessiontoday: {
    backgroundColor: "#FABB18",
    height: 146,
    borderRadius: 13,
    padding: 30,
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
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  discusstext: {
    color: "#4B4B4B",
    fontSize: 14,
    fontWeight: "500",
  },
  edittask: {
    backgroundColor: "black",
    height: 35,
    width: 90,
    borderRadius: 7,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  edittask1: {
    color: "white",
    fontSize: 14,
  },
});
