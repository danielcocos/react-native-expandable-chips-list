import React from 'react';
import {View, StyleSheet} from 'react-native';

interface TriangleProps {
  color: string;
}

const Triangle: React.FC<TriangleProps> = ({color}) => {
  return <View style={styles(color).container} />;
};

const styles = (color: string) =>
  StyleSheet.create({
    container: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 8,
      borderRightWidth: 8,
      borderBottomWidth: 12,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: color,
    },
  });

export default Triangle;
