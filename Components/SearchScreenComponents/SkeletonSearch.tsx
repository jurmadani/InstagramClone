import { View, Text } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

interface SkeletonSearchProps {
  index: number;
}

const SkeletonSearch = ({ index }: SkeletonSearchProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        paddingBottom: 15,
        opacity: 0.4,
      }}
    >
      {/* User avatar */}
      <Skeleton
        circle
        height={50}
        width={50}
        animation="pulse"
        style={{ backgroundColor: "#E1E1E1" }}
      />
      <View style={{ paddingLeft: 10 }}>
        {/* Username */}
        <Skeleton
          width={150}
          height={13}
          animation="pulse"
          style={{ marginBottom: 5, backgroundColor: "#E1E1E1" }}
        />
        {/* Full name */}
        <Skeleton
          width={100}
          height={13}
          animation="pulse"
          style={{ backgroundColor: "#E1E1E1" }}
        />
      </View>
    </View>
  );
};

export default SkeletonSearch;
