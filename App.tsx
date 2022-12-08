import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  MedievalSharp_400Regular,
} from "@expo-google-fonts/medievalsharp";
import theme from "@assets/styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "@routes/index";

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({ MedievalSharp_400Regular });

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {fontsLoaded && <RootNavigator />}
        <StatusBar hidden />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
