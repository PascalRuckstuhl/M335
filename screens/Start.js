import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Pressable,
  Image,
  ImageBackground,
} from 'react-native';
import { Color } from '../constants/Color';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2200,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default StartScreen = ({ navigation }) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('All summarys')}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Readingbuddy</Text>
      </View>
      <FadeInView style={styles.headlineContainer}>
        <Text style={styles.headline}>summerise a book efficiently</Text>
      </FadeInView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.black,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    flex: 4,
    justifyContent: 'flex-end',
  },
  title: {
    color: Color.orange,
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  headlineContainer: {
    flex: 5,
  },
  headline: {
    color: Color.orange,
    fontSize: 17,
    fontWeight: '700',
  },
});
