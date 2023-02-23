import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StarPage from "./components/Start";
import Onboarding1 from "./components/Onboarding1";
import Onboarding2 from "./components/Onboarding2";
import Onboarding3 from "./components/Onboarding3";
import Signinpage from "./components/Signinpage";
import Signuppage from "./components/Signuppage";
import Home from "./components/Home";
import Tasklist from "./components/Tasklist";
import Addtask from "./components/Addtask";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Start"
      >
        <Stack.Screen name="Start" component={StarPage} />
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="Signinpage" component={Signinpage} />
        <Stack.Screen name="Signuppage" component={Signuppage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tasklist" component={Tasklist} />
        <Stack.Screen name="Addtask" component={Addtask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
