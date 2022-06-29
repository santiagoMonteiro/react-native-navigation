import React from "react";
import { View, Text, Button } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

type ParamsProps = {
  name: string;
};

export function ScreenB() {
  const navigation = useNavigation();
  const route = useRoute();
  const { name } = route.params as ParamsProps;

  return (
    <View style={{ flex: 1, backgroundColor: "blue" }}>
      <Text style={{ fontSize: 24 }}>{name}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
