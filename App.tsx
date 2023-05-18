import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./Navigator/StackNavigator";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";

export default function App() {
  return (
    <Provider store={Store}>
      <PaperProvider>
        <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </ApplicationProvider>
      </PaperProvider>
    </Provider>
  );
}
