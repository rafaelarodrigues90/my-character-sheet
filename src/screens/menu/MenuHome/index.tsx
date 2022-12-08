import React from "react";
import { ImageBackground } from "react-native";
import backgroundImg from "@assets/images/background.png";
import * as styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import RootStackNavigation, { MenuPageProp } from "@routes/RootStack";

const Menu: React.FC = () => {
  const navigation = useNavigation<MenuPageProp>();

  const handleNewCharacter = () => {
    navigation.navigate("CharacterFormPage");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            <styles.ButtonContainer onPress={handleNewCharacter}>
              <styles.ButtonText>new character</styles.ButtonText>
            </styles.ButtonContainer>
            <styles.ButtonContainer onPress={() => {}}>
              <styles.ButtonText>load character</styles.ButtonText>
            </styles.ButtonContainer>
          </styles.MainContainer>
        </ImageBackground>
      </styles.ImageContainer>
    </SafeAreaView>
  );
};

export default Menu;
