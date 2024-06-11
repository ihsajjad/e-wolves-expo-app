import CustomBtn from "@/components/CustomBtn";
import React from "react";
import { Image, Text, View } from "react-native";

const index = () => {
  return (
    <View className="bg-third h-screen w-screen flex-1 gap-y-5 flex-col items-center justify-center">
      <Text className="text-2xl font-medium text-title">
        Access Specialized Care
      </Text>
      <Image
        source={require("../assets/images/image-1.png")}
        className="mb-5"
      />

      <CustomBtn
        route="get_started"
        text="Get Started"
        type="purple"
        heightWidth="w-40 h-10"
      />
    </View>
  );
};

export default index;
