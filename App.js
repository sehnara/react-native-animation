import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { Pressable } from "react-native";
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
  const Y_POSITION = useRef(new Animated.Value(300)).current; // 1

  const moveUp = () => {
    Animated.timing(Y_POSITION, {
      toValue: up ? 300 : -300,
      duration: 2000,
      useNativeDriver: true,
    }).start(toggleUp); // start function is callback function. that is the event arise when animation ends
  };

  const opacity = Y_POSITION.interpolate({
    inputRange: [-300, -100, 100, 300],
    outputRange: [1, 0, 0, 1],
  });
  const borderRadius = Y_POSITION.interpolate({
    inputRange: [-300, 300],
    outputRange: [0, 200],
  });
  return (
    <Container>
      <Pressable onPress={moveUp}>
        <AnimatedBox
          style={{
            borderRadius,
            opacity,
            transform: [{ translateY: Y_POSITION }],
          }}
        />
      </Pressable>
    </Container>
  );
}
