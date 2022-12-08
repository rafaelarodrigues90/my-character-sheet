import React from "react";
import { ImageBackground } from "react-native";
import charBackground from "@assets/images/characterBorder.png";
import * as styles from "./styles";

export type Props = {
  children: React.ReactElement[];
  onBackButtonPress?: () => void;
};

const CreateCharacterBackground: React.FC<Props> = ({ children }) => {
  return (
    <styles.ImageContainer>
      <ImageBackground
        source={charBackground}
        resizeMode="stretch"
        style={{
          flex: 1,
        }}
      >
        <styles.Container>{children}</styles.Container>
      </ImageBackground>
    </styles.ImageContainer>
  );
};

export default CreateCharacterBackground;
