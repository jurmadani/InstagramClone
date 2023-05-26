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
    const fetchData = async () => {
      setSkeletonLoading(true);
      setTimeout(async () => {
        try {
          const querySnapshot = await firebase
            .firestore()
            .collection("Users") // Replace 'users' with your collection name
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
      }, 100);
    };

    if (searchInput !== "") {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchInput]);

  if (searchInput === "")
    //don't show nothing if user didn't typed nothing
    return <View></View>;
  //fiter the database of user based on  search input and add skeleton ui for activity indicator
  else
    return (
      <View>
        {skeletonLoading &&
          NumberOfSkeletons.map((index) => <SkeletonSearch index={index} />)}
        {searchResultMessage != "" && (
          <Text style={{ marginLeft: 15, fontWeight: "500", fontSize: 16 }}>
            {searchResultMessage}
          </Text>
        )}
        <FlatList
          data={searchResults}
          //@ts-ignore
          renderItem={(item, index) => (
            <UserProfile item={item.item} key={index} />
          )}
        />
      </View>
    );
};

export default SearchFilter;
