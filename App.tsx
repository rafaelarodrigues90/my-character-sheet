import { StatusBar } from "expo-status-bar";
import { ImageBackground } from "react-native";
import Menu from "./src/pages/menu";
import image from "./src/assets/background.jpg";

export default function App(): JSX.Element {
  return (
    <>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <StatusBar hidden />
        <Menu />
      </ImageBackground>
    </>
  );
}
