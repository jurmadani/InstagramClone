import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import SkeletonSearch from "./SkeletonSearch";
import UserProfile from "./UserProfile";
import { firebase } from "../../firebase";

interface SearchFilterProps {
  searchInput: string;
}

const NumberOfSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SearchFilter = ({ searchInput }: SearchFilterProps) => {
  const [searchResults, setSearchResults] = useState([]);
  const [skeletonLoading, setSkeletonLoading] = useState(false);
  const [searchResultMessage, setSearchResultMessage] = useState("");

  useEffect(() => {
    let debounceTimer: NodeJS.Timeout;

    const fetchData = async () => {
      setSkeletonLoading(true);
      clearTimeout(debounceTimer); // Clear any existing debounce timer

      debounceTimer = setTimeout(async () => {
        try {
          const querySnapshot = await firebase
            .firestore()
            .collection("Users")
            .where("username", ">=", searchInput)
            .where("username", "<=", searchInput + "\uf8ff")
            .get();
          const data = querySnapshot.docs.map((doc) => doc.data());
          if (data.length === 0) setSearchResultMessage("No users found");
          else setSearchResultMessage("");
          //@ts-ignore
          setSearchResults(data);
        } catch (error) {
          console.error(error);
        }
        setSkeletonLoading(false);
      }, 200);
    };

    if (searchInput !== "") {
      fetchData();
    } else {
      setSearchResults([]);
    }

    return () => {
      clearTimeout(debounceTimer); // Clear the debounce timer on component unmount or searchInput change
    };
  }, [searchInput]);

  if (searchInput === "") {
    // Don't show anything if the user hasn't typed anything
    return <View></View>;
  } else {
    return (
      <View>
        {skeletonLoading &&
          NumberOfSkeletons.map((index) => <SkeletonSearch index={index} />)}
        {searchResultMessage !== "" && (
          <Text style={{ marginLeft: 15, fontWeight: "500", fontSize: 16 }}>
            {searchResultMessage}
          </Text>
        )}
        <FlatList
          data={searchResults}
          renderItem={({ item, index }) => (
            <UserProfile item={item} key={index} />
          )}
        />
      </View>
    );
  }
};

export default SearchFilter;
