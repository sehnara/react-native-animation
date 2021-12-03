# ANIMATION & INTERACTION

## 1. [SET UP]

1. npx create-react-native-app
2. npm i styled-components

## 2. [Animated]

### 1) 방법

- 1. const y = new Animated.Value(0);
- 2. const AnimatedBox = Animated.createAnimatedComponent(Box);
- 3. Animated 종류 : Animated.decay | Animated.spring | Animated.timing

### 2) timing

- 1. toValue
- 2. useNativeDriver

### 3) spring

- 1. tension & friction(마찰)
- 2. bouciness & speed
