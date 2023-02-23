import React from "react";
import { Text, View, StyleSheet, Image, TextInput, Pressable } from "react-native";
import { StatusBar } from 'expo-status-bar';

function Signinpage({ navigation }) {
    const navigateonboarding = () => {
        navigation.navigate("Signuppage");
      };
      const navigateonboarding2 = () => {
        navigation.navigate("Home");
      };
  return (
    <View style={styles.signinpage}>
      <StatusBar style="dark" />
      <Text style={styles.signinpageHeading}>Sign in</Text>
      <View style={styles.searchSection}>
        <Image
          style={styles.searchIcon}
          source={require("../assets/Mailicon.png")}
        />
        <TextInput
          style={styles.input}
          placeholder="abc@email.com"
          onChangeText={(searchString) => {
            this.setState({ searchString });
          }}
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
          source={require("../assets/passwordicon.png")}
        />
        <TextInput
        password={true} 
          style={styles.input}
          placeholder="Your password"
          underlineColorAndroid="transparent"
        />
        <Image
          style={styles.searchIcon}
          source={require("../assets/password.png")}
        />
      </View>
      <Text style={styles.forgotpassword}>Forgot Password?</Text>

      <Pressable style={styles.signinbtn} onPress={navigateonboarding2}>
        <Text style={styles.signinbtntext}>Sign in</Text>
      </Pressable>

          <Text style={styles.or}>OR</Text>
        <Text style={styles.haveaccount}>Don’t have an account ?<Text style={styles.navigatesignup} onPress={navigateonboarding}> Sign up</Text></Text>
   
    </View>
  );
}

export default Signinpage;

const styles = StyleSheet.create({
  signinpage: {
    height: "100%",
    justifyContent: "center",
    padding: 25,
  },
  signinpageHeading: {
    color: "black",
    fontSize: 27,
    fontWeight: "500",
    marginLeft:10,
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    padding:15,
    paddingLeft:20,
    borderRadius:12,
    borderWidth:0.8,
    borderColor:"#807A7A",
    marginTop:20
  },
  searchIcon: {
    height:28,
    width:28
  },
  input: {
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    backgroundColor: "#fff",
    color: "#424242",
    width:"80%",
    fontSize:18,
  },
  forgotpassword:{
    color:"black",
    fontSize:15,
    textAlign:"right",
    fontWeight:"500",
    marginTop:15,
    paddingRight:10
  },
  signinbtn:{
    backgroundColor:"#FABB18",
    padding:20,
    borderRadius:"12",
    marginTop:25
  },
  signinbtntext:{
    color:"white",
    fontSize:20,
    fontWeight:"500",
    textAlign:"center"
  },
  haveaccount:{
    textAlign:"center",
    marginTop:30,
    color:"black",
    fontSize:18,
    fontWeight:"500"
  },
  navigatesignup:{
    color:"#FABB18",
    marginLeft:15
  },
  or:{
    color:"#9D9898",
    fontSize:17,
    fontWeight:"600",
    textAlign:"center",
    marginTop:30,
  }
});
