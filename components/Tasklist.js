import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Tasklist({ navigation }) {
  const [todoItems, setTodoItems] = useState([]);
  const [todosValue, setTodosValue] = useState([]);
  const flatListRef = useRef(null);
  const navigateonboarding = () => {
    navigation.navigate("Addtask", { handleAddTodoItem });
  };
  const navigateonboarding2 = () => {
    navigation.navigate("Home");
  };

  const handleAddTodoItem = async (title, description, formattedTime) => {
    setTodoItems([...todoItems, { title, description, formattedTime }]);
    storeData();
    flatListRef.current.scrollToEnd();
  };

  const storeData = async () => {
    const todos = JSON.stringify(todoItems);
    try {
      await AsyncStorage.setItem("TODO_ITEMS", JSON.stringify(todos));
      console.log(todos,"todostodostodos");
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("TODO_ITEMS");
      setTodosValue(JSON.parse(value));
      setTodoItems(todosValue);
      return todosValue;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, [handleAddTodoItem]);

  const handleDeleteTodo = (id) => {
    const updatedTodos = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(updatedTodos);
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

      <FlatList
        data={todosValue}
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        style={styles.alltask}
        renderItem={(itemData) => {
          <View style={styles.alltask1}>
            <View style={styles.sessiontoday}>
              <View style={styles.tasktimeandnum}>
                <Text style={styles.tasknum}>Task {itemData.index + 1}</Text>
                <Text style={styles.sessiontodayTimetext2}>
                  {itemData.item.formattedTime}
                </Text>
              </View>
              <View style={styles.sessiontodayTime}>
                <Text style={styles.sessiontodayTimetext}>
                  {itemData.item.title}
                </Text>
              </View>
              <View style={styles.discuss}>
                <Text style={styles.discusstext}>
                  {itemData.item.description}
                </Text>
                <Pressable
                  style={styles.delete}
                  onPress={() => handleDeleteTodo(itemData.index)}
                >
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
          </View>;
        }}
      />
    </View>
  );
}

export default Tasklist;

const styles = StyleSheet.create({
  tasklist: {
    padding: 20,
    height: "100%",
  },
  tasktimeandnum: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
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
    height: 42,
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
    marginRight: 7,
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
