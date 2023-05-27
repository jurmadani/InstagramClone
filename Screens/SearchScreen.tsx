import { View, Text, Platform, SafeAreaView, Keyboard } from "react-native";
import React, { useState, useEffect } from "react";
import { SearchBar } from "@rneui/base";
import { Skeleton } from "@rneui/themed";
import SearchFilter from "../Components/SearchScreenComponents/SearchFilter";

const SearchScreen = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const unsubscribe = Keyboard.addListener("keyboardDidHide", () => {
      setSearch(""); // Reset the search input to an empty string
    });

    return () => {
      unsubscribe.remove(); // Clean up the event listener on component unmount
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <SearchBar
        placeholder="Search"
        //@ts-ignore
        platform={Platform.OS}
        value={search}
        //@ts-ignore
        onChangeText={(text) => setSearch(text)}
        cancelButtonProps={{
          color: "black",
        }}
        inputContainerStyle={{ backgroundColor: "#E1E1E1" }}
      />
      <SearchFilter searchInput={search} />
    </SafeAreaView>
  );
};

export default SearchScreen;
