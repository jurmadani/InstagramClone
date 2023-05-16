import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/LoginScreen";
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen";
import HomeScreen from "../Screens/HomeScreen";
import HomeScreenHeader from "../Components/HomeScreenComponents/HomeScreenHeader";

export type StackParams = {
  Login: any;
  ForgotPassword: any;
  Home: any;
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
        name="Home"
        component={HomeScreen}
        options={{ header: (navigation) => <HomeScreenHeader /> }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
