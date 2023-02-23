import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';

function Onboarding1({ navigation }) {
  const navigateonboarding = () => {
    navigation.navigate("Onboarding2");
  };
  const navigateonboarding2 = () => {
    navigation.navigate("Signinpage");
  };
  return (
    <View style={styles.onboarding1}>
      <StatusBar style="dark" />
      <Image
        style={styles.onboardingimg}
        source={require("../assets/onboarding1.png")}
      />

      <View style={styles.onboardingcontent} >
        <Text style={styles.onboardingcontent1}>Create task reminders</Text>
        <View style={styles.onboardingcontent2}>
          <Text style={styles.onboardingcontent2text1} onPress={navigateonboarding2}>Skip</Text>
          <Image
            source={require("../assets/Dot1.png")}
          />
          <Text style={styles.onboardingcontent2text2} onPress={navigateonboarding}>Next</Text>
        </View>
      </View>
    </View>
  );
}

export default Onboarding1;

const styles = StyleSheet.create({
  onboarding1: {
    height: "100%",
    alignItems: "center",
    position:"relative"
  },
  onboardingimg: {
   height:245,
   width:245,
   position:"absolute",
   top:"10%"
  },
  onboardingcontent:{
    position:"absolute",
    bottom:0,
    height:258,
    width:"100%",
    backgroundColor:"#FABB18",
    borderTopStartRadius:48,
    borderTopEndRadius:48,
    alignItems:"center",
    paddingTop:60
  },
  onboardingcontent1:{
    color:"white",
    fontSize:25,
    fontWeight:"500"
  },
  onboardingcontent2:{
    width:"100%",
    position:"absolute",
    bottom:40,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    paddingLeft:20,
    paddingRight:20
  },
  onboardingcontent2text1:{
    color:"white",
    fontSize:20,
    fontWeight:"600",
    
  },
  onboardingcontent2text2:{
    color:"black",
    fontSize:20,
    fontWeight:"600",
  }
});
