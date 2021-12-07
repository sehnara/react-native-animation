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
  const POSITION = useRef(new Animated.ValueXY({ x: 0, y: 300 })).current; // 1

  const moveUp = () => {
    Animated.timing(POSITION.y, {
      toValue: up ? 300 : -300,
      duration: 1000,
      useNativeDriver: false, // backgroundColor를 interpolate할 때는 'false'로 두어야 한다.
    }).start(toggleUp); // start function is callback function. that is the event arise when animation ends
  };

  const backgroundColor = POSITION.y.interpolate({
    inputRange: [-300, 300],
    outputRange: ["rgb(255, 99, 71)", "rgb(135, 206, 235)"],
  });

  const rotation = POSITION.y.interpolate({
    inputRange: [-300, 300],
    outputRange: ["-360deg", "360deg"],
  });
  const borderRadius = POSITION.y.interpolate({
    inputRange: [-300, 300],
    outputRange: [0, 200],
  });
  return (
    <Container>
      <Pressable onPress={moveUp}>
        <AnimatedBox
          style={{
            backgroundColor,
            borderRadius,
            transform: [{ translateY: POSITION.y }, { rotateY: rotation }],
          }}
        />
      </Pressable>
    </Container>
  );
}
