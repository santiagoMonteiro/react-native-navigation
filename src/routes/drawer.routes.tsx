import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

import { ScreenA } from "../screens/ScreenA";
import { ScreenB } from "../screens/ScreenB";
const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator>
      <Screen
        name="ScreenA"
        component={ScreenA}
        options={{
          drawerLabel: "Home",
          drawerIcon: () => (
            <MaterialIcons name="home" size={22} />
          )
        }}
      />
      <Screen
        name="ScreenB"
        component={ScreenB}
        options={{
          drawerLabel: "Cadastrar",
          drawerIcon: () => (
            <MaterialIcons name="add" size={22} />
          )
        }}
      />
    </Navigator>
  );
}
