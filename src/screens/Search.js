import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { API_KEY } from "@env";
import axios from "axios";

export default function Search() {
  const [term, setTerm] = useState("");
  const [search, setSearch] = useState(false);
  const [results, setResults] = useState([]);

  const options = {
    method: "GET",
    url: "https://the-cocktail-db.p.rapidapi.com/search.php",
    params: { s: term },
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  };

  const makeRequest = useCallback(async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data.drinks[0]);
      setResults(response.data.drinks[0]);
    } catch (error) {
      console.log(error);
    }
  }, [options]);

  useEffect(() => {
    if (search) {
      makeRequest();
      setSearch(false);
    }
  }, [search, term, makeRequest]);

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
      <Button title='Search' onPress={() => setSearch(true)} />
    </View>
  );
}

const styles = StyleSheet.create({});
