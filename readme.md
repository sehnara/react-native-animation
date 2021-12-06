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
- #### 3. easing : Easing.elastic(5) : 여러가지 애니메이션을 첨가할 수 있다.

### 3) spring

- 1. tension & friction(마찰)
- 2. bouciness & speed

### 4) start 🚀

- Animated.timing(y, toValue : x, useNativeDriver : x).start()

: start fuction is 'CALLBACK'! 그래서 애니메이션이 끝난 후 메소드를 구현한다.

## 3. [UseRef] 🚀

: React에서 useState로 인해 state값이 변할 때, 전체적으로 '재렌더링'이 일어남
: 하지만 값을 유지하고 싶을 때! useRef를 이용

- const y = useRef(new Animated.Value(0)).current; // 1
