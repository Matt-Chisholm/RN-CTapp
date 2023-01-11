import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { API_KEY } from "@env";
import axios from "axios";

export default function Search() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  console.log(term);

  const options = {
    method: "GET",
    url: "https://the-cocktail-db.p.rapidapi.com/search.php",
    params: { s: term },
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  };

  const search = async () => {
    const response = await axios.request(options);
    setResults(response.data.drinks[0]);
    console.log(results);
  };

  return (
    <View>
      <Text>Search</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: "gray", borderWidth: 1 }}
        autoCapitalize='none'
        autoCorrect={false}
        value={term}
        onChangeText={(newTerm) => setTerm(newTerm)}
      />
      <Button title='Search' onPress={search} />
    </View>
  );
}

const styles = StyleSheet.create({});
