import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  MedievalSharp_400Regular,
} from "@expo-google-fonts/medievalsharp";
import theme from "./src/assets/styles";
import Menu from "./src/pages/menu";

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({ MedievalSharp_400Regular });

  return (
    <>
      <ThemeProvider theme={theme}>
        {fontsLoaded && <Menu />}
        <StatusBar hidden />
      </ThemeProvider>
    </>
  );
}
