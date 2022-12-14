import { Formik } from "formik";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { MenuPageProp } from "@routes/RootStack";
import CreateCharacterBackground from "@components/CharacterBackground";

const CharacterAttributes: React.FC = () => {
  const navigation = useNavigation<MenuPageProp>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CreateCharacterBackground>
        <styles.TitleContainer>
          <styles.Title>character</styles.Title>
        </styles.TitleContainer>
        <Formik
          initialValues={{
            name: "",
            class: "",
            level: "",
            strength: "",
            intelligence: "",
            wisdom: "",
            dexterity: "",
            constitution: "",
            charism: "",
            armor_class: "",
            hit_points: "",
            attack_bonus: "",
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            handleReset,
          }) => (
            <>
              <styles.MainContainer>
                <styles.FormContainer>
                  <styles.FormText>Name:</styles.FormText>
                  <styles.FormInput
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                    placeholder={"Demogorgon"}
                  />
                </styles.FormContainer>
                <styles.FormContainer>
                  <styles.FormText>Classe:</styles.FormText>
                  <styles.FormInput
                    onChangeText={handleChange("class")}
                    onBlur={handleBlur("class")}
                    value={values.class}
                    placeholder={"Demon"}
                  />
                  <styles.FormText>Level:</styles.FormText>
                  <styles.FormInput
                    onChangeText={handleChange("level")}
                    onBlur={handleBlur("level")}
                    value={values.level}
                    placeholder={"∞"}
                  />
                </styles.FormContainer>

                <styles.Separator />

                <styles.FormContainer>
                  <styles.FormText>STR:</styles.FormText>
                  <styles.FormInput
                    onChangeText={handleChange("strength")}
                    onBlur={handleBlur("strength")}
                    value={values.strength}
                    placeholder={"16"}
                  />
                  <styles.FormText>INT:</styles.FormText>
                  <styles.FormInput
                    onChangeText={handleChange("intelligence")}
                    onBlur={handleBlur("intelligence")}
                    value={values.intelligence}
                    placeholder={"9"}
                  />
                  <styles.FormText style={{ marginLeft: 15 }}>
                    WIS:
                  </styles.FormText>
                  <styles.FormInput
                    onChangeText={handleChange("wisdom")}
                    onBlur={handleBlur("wisdom")}
                    value={values.wisdom}
                    placeholder={"8"}
                  />
                </styles.FormContainer>
                <styles.FormContainer>
                  <styles.FormText>DEX:</styles.FormText>
                  <styles.FormInput
                    onChangeText={handleChange("dexterity")}
                    onBlur={handleBlur("dexterity")}
                    value={values.dexterity}
                    placeholder={"13"}
                  />
                  <styles.FormText>CON:</styles.FormText>
                  <styles.FormInput
                    onChangeText={handleChange("constitution")}
                    onBlur={handleBlur("constitution")}
                    value={values.constitution}
                    placeholder={"13"}
                  />
                  <styles.FormText>CHA:</styles.FormText>
                  <styles.FormInput
                    onChangeText={handleChange("charism")}
                    onBlur={handleBlur("charism")}
                    value={values.charism}
                    placeholder={"11"}
                  />
                </styles.FormContainer>

                <styles.Separator />

                <styles.FormContainer style={{ alignSelf: "center" }}>
                  <styles.FormText>Armor class:</styles.FormText>
                  <styles.FormInput
                    onChangeText={handleChange("armor_class")}
                    onBlur={handleBlur("armor_class")}
                    value={values.armor_class}
                    placeholder={"13"}
                  />
                </styles.FormContainer>
                <styles.FormContainer style={{ alignSelf: "center" }}>
                  <styles.FormText>Hit points:</styles.FormText>
                  <styles.FormInput
                    onChangeText={handleChange("hit_points")}
                    onBlur={handleBlur("hit_points")}
                    value={values.hit_points}
                    placeholder={"11"}
                  />
                </styles.FormContainer>
                <styles.FormContainer style={{ alignSelf: "center" }}>
                  <styles.FormText>Attack Bonus:</styles.FormText>
                  <styles.FormInput
                    onChangeText={handleChange("attack_bonus")}
                    onBlur={handleBlur("attack_bonus")}
                    value={values.attack_bonus}
                    placeholder={"13"}
                  />
                </styles.FormContainer>
              </styles.MainContainer>
              <styles.FooterContainer>
                <styles.ButtonContainer
                  onPress={() => handleSubmit()}
                  onPressOut={() => navigation.navigate("CharacterItemsPage")}
                >
                  <styles.ButtonText>Items</styles.ButtonText>
                </styles.ButtonContainer>
                <styles.ButtonContainer
                  style={{ backgroundColor: "#DCDCDC" }}
                  onPress={() => handleReset()}
                >
                  <styles.ButtonText>Reset</styles.ButtonText>
                </styles.ButtonContainer>
              </styles.FooterContainer>
            </>
          )}
        </Formik>
      </CreateCharacterBackground>
    </SafeAreaView>
  );
};

export default CharacterAttributes;
