import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { StyleSheet, View } from 'react-native';

const BackgroundWave = () => {
  return (
    <View style={styles.container}>
      <Svg
        height="100%"
        width="100%"
        viewBox="0 0 1440 320"
        style={styles.svg}
      >
        <Path
          fill="#0099ff"
          d="M0,64L48,106.7C96,149,192,235,288,240C384,245,480,171,576,149.3C672,128,768,160,864,154.7C960,149,1056,107,1152,90.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // need this at bottom of screen
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '22%',
  },
  svg: {
    position: 'absolute',
    bottom: 0,
  },
});

export default BackgroundWave;