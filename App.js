import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Animated, TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Box = styled.View`
  background-color: tomato;
  width: 200;
  height: 200;
`;

const AnimatedBox = Animated.createAnimatedComponent(Box); // 2
export default function App() {
  const y = new Animated.Value(0); // 1

  const moveUp = () => {
    Animated.spring(y, {
      toValue: -200,
      bounciness: 50,
      speed: 50,
      useNativeDriver: true,
    }).start();
  };

  // [y의 값을 얻고 싶을 때]
  y.addListener(() => console.log(y));
  return (
    <Container>
      <TouchableOpacity onPress={moveUp}>
        <AnimatedBox style={{ transform: [{ translateY: y }] }} />
      </TouchableOpacity>
    </Container>
  );
}
