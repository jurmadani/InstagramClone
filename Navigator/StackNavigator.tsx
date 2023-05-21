import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/LoginScreen";
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen";
import HomeScreen from "../Screens/HomeScreen";
import HomeScreenHeader from "../Components/HomeScreenComponents/HomeScreenHeader";
import BottomTabNavigator from "./BottomTabNavigator";
import MessagesScreen from "../Screens/MessagesScreen";
import MessagesScreenHeader from "../Components/MessagesScreenComponents/MessagesScreenHeader";
import SignupScreen from "../Screens/SignupScreen";
import UserProfilePostsScreen from "../Screens/UserProfilePostsScreen";
import UserProfilePostsScreenHeader from "../Components/UserProfilePostsScreenComponents/UserProfilePostsScreenHeader";
import EditAccountScreen from "../Screens/EditAccountScreen";
import EditAccountScreenHeader from "../Components/EditAccountScreenComponents/EditAccountScreenHeader";

export type StackParams = {
  Login: any;
  ForgotPassword: any;
  Signup: any;
  BottomTabNav: any;
  Messages: any;
  UserProfilePosts: any;
  EditAccount: any;
};

const Stack = createNativeStackNavigator<StackParams>();

/* DEACTIVATED SCREEN 
  <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
         <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />

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

        const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
*/

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BottomTabNav"
        component={BottomTabNavigator}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="UserProfilePosts"
        component={UserProfilePostsScreen}
        options={{ header: () => <UserProfilePostsScreenHeader /> }}
      />
      <Stack.Screen
        name="EditAccount"
        component={EditAccountScreen}
        options={{
          header: () => <EditAccountScreenHeader />,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
