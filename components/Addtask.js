import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView
} from "react-native";
import { StatusBar } from "expo-status-bar";

function Tasklist({ navigation, route  }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const {handleAddTodoItem} = route.params;
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});


  const navigateonboarding = () => {
    navigation.navigate("Tasklist");
  };

  const handleAddTodo = () => {
    navigation.navigate("Tasklist");
    setTitle("");
    setDescription("");
    handleAddTodoItem(title,description,formattedTime);
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
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
     style={styles.addtaskpage}>
      <StatusBar style="dark" />
      <View style={styles.taskhead}>
        <Pressable onPress={navigateonboarding}>
          <Image source={require("../assets/Back.png")} />
        </Pressable>
        <View style={styles.addtasktext}>
          <Text style={styles.addtasktext1}>Add a task</Text>
          <Text style={styles.addtasktext2}>{getCurrentDate()}</Text>
        </View>
      </View>

      <View style={styles.taskdesc}>
        <Image
          style={styles.bookimg}
          source={require("../assets/bookandclock.png")}
        />
        <View style={styles.searchSection}>
          <Image
            style={styles.searchIcon}
            source={require("../assets/write.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Task Title"
            value={title}
            onChangeText={(text) => setTitle(text)}
            underlineColorAndroid="transparent"
          />
          <Image
            style={styles.searchIcon}
            source={require("../assets/Dot1.png")}
          />
        </View>
        <View style={styles.searchSection}>
          <Image
            style={styles.searchIcon}
            source={require("../assets/openbook.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Task Description"
            underlineColorAndroid="transparent"
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
          <Image
            style={styles.searchIcon}
            source={require("../assets/Dot1.png")}
          />
        </View>
      </View>

      <Pressable style={styles.taskbtn} onPress={handleAddTodo}>
        <Text style={styles.taskbtntext}>Save </Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

export default Tasklist;

const styles = StyleSheet.create({
  addtaskpage: {
    padding: 20,
    height: "100%",
    justifyContent: "space-between",
    flex:1
  },
  taskhead: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
  },
  addtasktext: {
    marginLeft: 20,
  },
  addtasktext1: {
    fontSize: 22,
    fontWeight: "500",
    color: "black",
  },
  addtasktext2: {
    fontSize: 15,
    fontWeight: "500",
    color: "#919191",
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    padding: 15,
    paddingLeft: 20,
    borderRadius: 12,
    borderWidth: 0.8,
    borderColor: "#807A7A",
    marginTop: 20,
  },
  searchIcon: {
    height: 28,
    width: 28,
  },
  input: {
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    backgroundColor: "#fff",
    color: "#424242",
    width: "80%",
    fontSize: 18,
  },
  taskdesc: {
    // marginTop: 40,
    alignItems: "center",
  },
  taskbtn: {
    backgroundColor: "#FABB18",
    borderRadius: 12,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  taskbtntext: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
  },
  bookimg: {
    marginTop: -40,
    marginBottom: 15,
  },
});
