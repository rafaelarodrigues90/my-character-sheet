import React from "react";
import { ImageBackground } from "react-native";
import backgroundImg from "@assets/images/background.png";
import * as styles from "./styles";

const Menu: React.FC = () => {
  return (
    <styles.ImageContainer>
      <ImageBackground
        source={backgroundImg}
        resizeMode="stretch"
        style={{
          flex: 1,
          margin: -30,
        }}
      >
        <styles.MainContainer>
          <styles.MenuTitle>RPG{"\n"}Character Sheet</styles.MenuTitle>
          <styles.ButtonContainer>
            <styles.ButtonText onPress={() => {}}>
              new character
            </styles.ButtonText>
          </styles.ButtonContainer>
          <styles.ButtonContainer>
            <styles.ButtonText onPress={() => {}}>
              load character
            </styles.ButtonText>
          </styles.ButtonContainer>
        </styles.MainContainer>
      </ImageBackground>
    </styles.ImageContainer>
  );
};

export default Menu;
