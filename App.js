import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { Animated, TouchableOpacity, Text } from "react-native";
import { Easing } from "react-native-reanimated";
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
  const [up, setUp] = useState(true);
  const toggleUp = () => {
    setUp((prev) => !prev);
  };
  // useRef : 다시 렌더링 일어나도 value를 유지할게 하는 HOOK
  const y = useRef(new Animated.Value(0)).current; // 1

  const moveUp = () => {
    Animated.timing(y, {
      toValue: up ? 200 : -200,
      useNativeDriver: true,
      easing: Easing.cubic,
    }).start(toggleUp); // start function is callback function. that is the event arise when animation ends
  };

  // [y의 값을 얻고 싶을 때]
  y.addListener(() => console.log("Animated State : ", y));
  console.log("Component State:", y);
  return (
    <Container>
      <TouchableOpacity onPress={moveUp}>
        <AnimatedBox style={{ transform: [{ translateY: y }] }} />
      </TouchableOpacity>
    </Container>
  );
}
