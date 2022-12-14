import React from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import charBackground from "@assets/images/characterBorder.png";
import * as styles from "./styles";

export type Props = {
  children: React.ReactElement[];
  onBackButtonPress?: () => void;
};

const CreateCharacterBackground: React.FC<Props> = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={charBackground}
        resizeMode="stretch"
        style={{
          flex: 1,
          justifyContent: "center",
          marginVertical: -40,
          marginHorizontal: -110,
          backgroundColor: "#f2f2f2",
        }}
      >
        <styles.Container>{children}</styles.Container>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CreateCharacterBackground;
