// import React from 'react';
// import {View, Text} from 'react-native';
// import ProgressBar from 'react-native-animated-progress';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const App = () => {
//   return (
//     <View
//       style={{flex: 1, justifyContent: 'space-evenly', paddingHorizontal: 16}}>
//       <View>
//         <ProgressBar height={5} indeterminate backgroundColor="green" />
//       </View>
//     </View>
//   );
// };
// export default App;

// import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// create a component
const App = () => {
  const position = new Animated.ValueXY({x: -1000, y: 0});
  Animated.loop(
    Animated.sequence([
      Animated.timing(position, {
        toValue: {x: 10, y: 50},
        useNativeDriver: true,
        duration: 1100,
        easing: Easing.bezier(0.2, 0.1, 1, 30),
      }),
    ]),
  ).start();

  const roller = position.x.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });
  return (
    <View style={styles.container}>
      <View style={styles.barOne}>
        <Animated.View
          style={{transform: [{translateX: position.x}, {roller: roller}]}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
            <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
            <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
            <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
            <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
            <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
            <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
            <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
            <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
            <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
            <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
            <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
            <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
            <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
            <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
            <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
            <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
            <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
          </View>
        </Animated.View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  barOne: {
    width: '50%',
    height: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#8999b3',
  },
  arrows: {},
});

//make this component available to the app
export default App;
