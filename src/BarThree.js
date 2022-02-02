//import liraries
import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const windowWidth = Dimensions.get('window').width;

// create a component
const BarThree = () => {
  // const anim = useRef(new Animated.ValueXY(0));
  const positionOne = new Animated.Value(27);
  const positionTwo = new Animated.Value(-85);
  const positionThree = new Animated.Value(-30);

  Animated.loop(
    Animated.parallel([
      Animated.timing(positionOne, {
        toValue: 50,
        useNativeDriver: true,
        duration: 2000,
        //easing: Easing.bezier(0.2, 0.1, 1, 5.5),
      }),
      Animated.timing(positionTwo, {
        toValue: -62,
        useNativeDriver: true,
        duration: 2000,
        //easing: Easing.bezier(0.2, 0.1, 1, 30),
      }),
      Animated.timing(positionThree, {
        toValue: 0,
        useNativeDriver: true,
        duration: 2000,
        //easing: Easing.bezier(0.2, 0.1, 1, 30),
      }),
    ]),
  ).start();

  return (
    <View style={styles.container}>
      <View style={styles.barOne}>
        <View style={{flexDirection: 'row'}}>
          <Animated.View style={{transform: [{translateX: positionOne}]}}>
            <View style={{flexDirection: 'row'}}>
              <MaterialIcons name="arrow-forward-ios" size={8} color="black" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="black" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="black" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="black" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="black" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="black" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="black" />
            </View>
          </Animated.View>
          <Animated.View style={{transform: [{translateX: positionTwo}]}}>
            <View style={{flexDirection: 'row'}}>
              {/* <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="red" /> */}
              <MaterialIcons name="arrow-forward-ios" size={8} color="red" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="black" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="black" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="black" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="black" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="black" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="black" />
            </View>
          </Animated.View>
          <Animated.View style={{transform: [{translateX: positionThree}]}}>
            <View style={{flexDirection: 'row'}}>
              <MaterialIcons name="arrow-forward-ios" size={8} color="black" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="black" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="black" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="black" />
            </View>
          </Animated.View>
        </View>
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
    width: 90,
    height: 10,
    // borderBottomLeftRadius: 10,
    // borderBottomStartRadius: 10,
    // borderBottomRightRadius: 10,
    borderTopEndRadius: 5,
    // borderTopStartRadius: 5,
    borderBottomRightRadius: 5,

    borderWidth: 1,

    borderColor: 'black',
    backgroundColor: '#d3e6d8',
  },
  arrows: {},
});

//make this component available to the app
export default BarThree;
