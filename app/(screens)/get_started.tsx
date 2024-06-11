import CustomBtn from "@/components/CustomBtn";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

const get_started = () => {
  const router = useRouter();

  return (
    <View className="bg-secondary h-screen flex-1 flex-col gap-5 items-center justify-center px-5 py-10">
      <Text className="w-full text-left">
        <MaterialIcons
          onPress={() => router.back()}
          name="arrow-back"
          size={24}
          color="black"
          className="self-start items-start"
        />
      </Text>

      <Image
        source={require("../../assets/images/image-2.png")}
        className="h-[437px]"
      />

      <Text className="text-center text-sm leading-5 text-description">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </Text>

      <View className="flex items-center flex-row space-x-8">
        <View>
          <CustomBtn
            route="get_started"
            text="User"
            type="green"
            heightWidth="w-32 h-10"
          />
        </View>
        <View>
          <CustomBtn
            route="get_started"
            text="Artist"
            type="purple"
            heightWidth="w-32 h-10"
          />
        </View>
      </View>
    </View>
  );
};

export default get_started;
