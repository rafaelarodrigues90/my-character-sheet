import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { MenuPage, CharacterFormPage } from "../screens/index";

export type PagesListParams = {
  MenuPage: undefined;
  CharacterFormPage: undefined;
};

export type MenuPageProp = NativeStackNavigationProp<
  PagesListParams,
  "CharacterFormPage"
>;

const Stack = createNativeStackNavigator<PagesListParams>();

const RootStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MenuPage"
        component={MenuPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CharacterFormPage"
        component={CharacterFormPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigation;
