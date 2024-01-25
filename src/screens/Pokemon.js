import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getPokemonDetailsApi } from "../api/pokemon";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;
  return (
    <View>
      <Text>estamos en un pokemon</Text>
      <Text>{pokemon.name}</Text>
    </View>
  );
}
