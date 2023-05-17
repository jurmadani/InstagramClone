import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/LoginScreen";
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen";
import HomeScreen from "../Screens/HomeScreen";
import HomeScreenHeader from "../Components/HomeScreenComponents/HomeScreenHeader";
import BottomTabNavigator from "./BottomTabNavigator";
import MessagesScreen from "../Screens/MessagesScreen";
import MessagesScreenHeader from "../Components/MessagesScreenComponents/MessagesScreenHeader";

export type StackParams = {
  Login: any;
  ForgotPassword: any;
  BottomTabNav: any;
  Messages: any;
};

const Stack = createNativeStackNavigator<StackParams>();

/* DEACTIVATED SCREEN 
  <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
*/

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabNav"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Messages"
        component={MessagesScreen}
        options={{ header: () => <MessagesScreenHeader /> }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
