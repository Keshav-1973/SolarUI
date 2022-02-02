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
const BarOne = () => {
  // const anim = useRef(new Animated.ValueXY(0));
  const positionOne = new Animated.Value(20);

  // console.log(anim.current);
  const positionTwo = new Animated.Value(-92);
  Animated.loop(
    Animated.parallel([
      Animated.timing(positionOne, {
        toValue: 50,
        useNativeDriver: true,
        duration: 2000,
        //easing: Easing.bezier(0.2, 0.1, 1, 5.5),
      }),
      Animated.timing(positionTwo, {
        toValue: -60,
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
              <MaterialIcons name="arrow-forward-ios" size={8} color="black" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="black" />
              <MaterialIcons name="arrow-forward-ios" size={8} color="black" />
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
    flexDirection: 'row',
    width: '100%',
    height: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#d3e6d8',
    zIndex: -1,
  },
  arrows: {},
});

//make this component available to the app
export default BarOne;
