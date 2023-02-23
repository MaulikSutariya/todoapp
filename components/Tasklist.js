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

function Tasklist({ navigation }) {
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
      <View style={styles.taskflex}>
        <View style={styles.datesection}>
          <Text style={styles.datesectiondate}>{getCurrentDate()}</Text>
          <Text style={styles.datesectiontoday}>Today</Text>
        </View>
        <Pressable style={styles.edittask}>
          <Text style={styles.edittask1}>+ Add Task</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Tasklist;

const styles = StyleSheet.create({
  tasklist: {
    padding: 20,
    height: "100%",
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
  taskflex:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:30
  },
  datesectiondate:{
    color:"#919191",
    fontSize:18,
    fontWeight:"500"
  },
  datesectiontoday:{
    color:"#111111",
    fontSize:25,
    fontWeight:"600",
    marginTop:2
  }
});
