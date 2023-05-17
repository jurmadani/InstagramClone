import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./Navigator/StackNavigator";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </PaperProvider>
  );
}
