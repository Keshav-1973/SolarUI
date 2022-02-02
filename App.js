//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import LottieView from 'lottie-react-native';
import BarOne from './src/BarOne';
import BarTwo from './src/BarTwo';
import BarThree from './src/BarThree';
// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          //backgroundColor: '#1f8fab',
          alignItems: 'flex-end',
          width: '100%',
          height: '40%',
          //zIndex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: '#4f4e40',
            width: '50%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'flex-end',
            zIndex: 1,
          }}>
          <View style={styles.circleOne}>
            <FontAwesome5 name="solar-panel" size={20} color="black" />
          </View>

          <View
            style={{
              alignItems: 'center',
              //justifyContent: 'center',
              //backgroundColor: 'green',
              flexDirection: 'row',
              width: '30%',
              zIndex: -1,
            }}>
            <BarOne />
          </View>

          <View style={styles.circleTwo}>
            <MaterialCommunityIcons
              name="inbox-outline"
              size={25}
              color="black"
            />
          </View>
        </View>

        <View
          style={{
            width: '50%',
            height: '100%',
            //backgroundColor: '#dbd358',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            zIndex: -2,
          }}>
          <View
            style={{
              //backgroundColor: 'green',
              height: 60,
              transform: [{rotate: '65deg'}],
              position: 'absolute',
              left: 18,
              top: 88,
            }}>
            <BarThree />
          </View>
          <View
            style={{
              // backgroundColor: 'green',
              flexDirection: 'row',
              // height: 30,
              width: '70%',
            }}>
            <BarTwo />
            <View style={styles.hidingBar}></View>
          </View>

          <View
            style={{
              backgroundColor: 'white', // HIDING View HERE
              width: 20,
              height: 20,
              position: 'absolute',
              //  zIndex: 2,
              top: 39.4,
              left: 52,
            }}></View>

          <View style={styles.circleThree}>
            <MaterialCommunityIcons
              name="transmission-tower"
              size={25}
              color="black"
            />
          </View>
        </View>
      </View>

      <View
        style={{
          left: 258,
          top: 19,
          alignSelf: 'baseline',
          //backgroundColor: 'blue',
        }}>
        <View style={styles.circleFour}>
          <AntDesign name="home" size={25} color="black" />
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    //backgroundColor: 'red',
  },
  circleOne: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d5e3eb',
    borderColor: '#bfb55c',
    borderWidth: 5,
    // zIndex: 2,
  },
  circleTwo: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d5e3eb',
    borderColor: '#6c8a42',
    borderWidth: 5,
    zIndex: 2,
    // position: 'absolute',
    // right: 0,
  },
  circleThree: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d5e3eb',
    borderColor: '#9c4c36',
    borderWidth: 5,
    // position: 'absolute',
    //right: 0,
  },
  circleFour: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d5e3eb',
    borderColor: '#6269cc',
    borderWidth: 5,
  },
  hidingBar: {
    width: '50%',
    height: 10,
    borderBottomEndRadius: 10,
    borderTopEndRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderTopWidth: 1,
    borderEndWidth: 1,
    backgroundColor: '#d3e6d8',
    borderColor: 'black',
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

//make this component available to the app
export default App;
