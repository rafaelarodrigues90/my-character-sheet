import React from "react";
import * as styles from "./styles";

const Menu: React.FC = () => {
  return (
    <styles.ScreenContainer>
      <styles.MainContainer>
        <styles.MenuTitle>RPG Character Sheet</styles.MenuTitle>
        <styles.ButtonContainer>
          <styles.ButtonText onPress={() => {}}>
            create character
          </styles.ButtonText>
        </styles.ButtonContainer>
        <styles.ButtonContainer>
          <styles.ButtonText onPress={() => {}}>
            load character
          </styles.ButtonText>
        </styles.ButtonContainer>
      </styles.MainContainer>
    </styles.ScreenContainer>
  );
};

export default Menu;
