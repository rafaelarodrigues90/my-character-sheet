import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import RootStackNavigation from "./RootStack";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  );
};

export default RootNavigator;
