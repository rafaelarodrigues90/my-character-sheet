import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import {
  MenuPage,
  CharacterAttributesPage,
  CharacterItemsPage,
} from "../screens/index";

export type PagesListParams = {
  MenuPage: undefined;
  CharacterAttributesPage: undefined;
  CharacterItemsPage: undefined;
};

export type MenuPageProp = NativeStackNavigationProp<PagesListParams>;

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
        name="CharacterAttributesPage"
        component={CharacterAttributesPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CharacterItemsPage"
        component={CharacterItemsPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigation;
