import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CreateCharacterBackground from "@components/CharacterBackground";
import * as styles from "./styles";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MenuPageProp } from "@routes/RootStack";

type CharacterItems = {
  name: string;
  quantity: string | null;
};

const CharacterItems: React.FC = () => {
  const [items, setItems] = useState<CharacterItems[]>([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const navigation = useNavigation<MenuPageProp>();

  const handleAddItem = () => {
    setItems((prevState) => [...prevState, { name, quantity }]);

    setName("");
    setQuantity("");
  };

  const handleReset = (name: string) => {
    setItems((prevState) => prevState.filter((item) => item.name !== name));
  };

  const handleSubmit = () => {
    return;
  };

  return (
    <CreateCharacterBackground>
      <></>
      <styles.MainContainer>
        <styles.TitleContainer>
          <styles.Title>Items</styles.Title>
        </styles.TitleContainer>

        <styles.FormContainer>
          <styles.ItemInput
            placeholder="sword of destiny"
            onChangeText={setName}
            value={name}
          />
          <styles.QuantityInput
            placeholder="1"
            onChangeText={setQuantity}
            value={quantity}
          />
          <styles.InputButtonContainer onPress={handleAddItem}>
            <styles.InputButtonText>Add</styles.InputButtonText>
          </styles.InputButtonContainer>
        </styles.FormContainer>
        <ScrollView>
          {items.map((item) => (
            <>
              <styles.ListContainer key={item.name}>
                <styles.ListContainerText>
                  <styles.FormText>{item.name}</styles.FormText>
                  <styles.FormText>{item.quantity}</styles.FormText>
                  <styles.RemoveItemButton
                    onPress={() => handleReset(item.name)}
                  >
                    <styles.InputButtonText>x</styles.InputButtonText>
                  </styles.RemoveItemButton>
                </styles.ListContainerText>
              </styles.ListContainer>
            </>
          ))}
        </ScrollView>
        <styles.FooterContainer>
          <styles.InputButtonContainer
            style={{ width: 100, height: 34 }}
            onPress={() => handleSubmit()}
            onPressOut={() => navigation.navigate("MenuPage")}
          >
            <styles.InputButtonText>save</styles.InputButtonText>
          </styles.InputButtonContainer>
        </styles.FooterContainer>
      </styles.MainContainer>
    </CreateCharacterBackground>
  );
};

export default CharacterItems;
