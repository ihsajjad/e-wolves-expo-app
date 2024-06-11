import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";

interface BtnProps {
  route: string;
  type: "purple" | "green";
  heightWidth: string;
  text: string;
}

const CustomBtn = ({ route, type, heightWidth, text }: BtnProps) => {
  const colors =
    type === "purple"
      ? ["#9C8EEF", "#6C57EC", "#5443BB"]
      : ["#8EE88E", "#80D180", "#6BAE6B"];

  return (
    <Link href={route}>
      <LinearGradient
        colors={colors}
        className={`${heightWidth} rounded-full flex items-center justify-center`}
      >
        <Pressable>
          <Text className="text-white">{text}</Text>
        </Pressable>
      </LinearGradient>
    </Link>
  );
};

export default CustomBtn;
