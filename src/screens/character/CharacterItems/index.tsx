import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CreateCharacterBackground from "@components/CharacterBackground";
import * as styles from "./styles";
import Styles from "@assets/styles";

const CharacterItems: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CreateCharacterBackground>
        <styles.Title>Items</styles.Title>
        <styles.FormContainer>
          <styles.ItemInput placeholder="sword of destiny"></styles.ItemInput>
          <styles.QuantityInput placeholder="1"></styles.QuantityInput>
          <styles.InputButtonContainer>
            <styles.InputButtonText>Add</styles.InputButtonText>
          </styles.InputButtonContainer>
        </styles.FormContainer>
      </CreateCharacterBackground>
    </SafeAreaView>
  );
};

export default CharacterItems;
