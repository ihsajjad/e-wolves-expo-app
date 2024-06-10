import LottieView from "lottie-react-native";
import React from "react";
import { Image, View } from "react-native";

const InitialLoading = () => {
  return (
    <View className="bg-primary h-screen w-screen flex flex-col items-center justify-center">
      <Image
        source={require("../assets/images/logo.png")}
        alt="bla"
        className="w-64 h-16"
      />
      <LottieView
        source={require("../assets/animations/loading.json")}
        autoPlay
        loop
        style={{ width: 130, height: 130, bottom: 50, position: "absolute" }}
      />
    </View>
  );
};

export default InitialLoading;
