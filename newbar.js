import React, {useEffect, useState, useRef} from 'react';
import {Text, View, StyleSheet, Animated, Button} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  const counter = useRef(new Animated.Value(0)).current;
  const countInterval = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    countInterval.current = setInterval(() => setCount(old => old + 5), 1000);
    return () => {
      clearInterval(countInterval);
    };
  }, []);

  useEffect(() => {
    load(count);
    if (count >= 100) {
      setCount(100);
      clearInterval(countInterval);
    }
  }, [count]);

  const load = count => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(counter, {
          toValue: count,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  const width = counter.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Text>Loading....</Text>
      <View style={styles.progressBar}>
        <Animated.View
          style={
            ([StyleSheet.absoluteFill], {backgroundColor: '#8BED4F', width})
          }></Animated.View>
      </View>

      <Text>{count}%</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'Column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  progressBar: {
    height: 20,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
  },
});
