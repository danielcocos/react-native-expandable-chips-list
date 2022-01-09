import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  LayoutChangeEvent,
  View,
} from 'react-native';
import {TRANSPARENT} from '../constants/Colors';
import Triangle from './Triangle';

interface ChipProps {
  onPress: () => void;
  onLayout: (event: LayoutChangeEvent) => void;
  isSelected?: boolean;
  children: string;
  activeBackgroundColor: string;
  inactiveBackgroundColor: string;
  titleActiveColor: string;
  titleInactiveColor: string;
  transparent?: boolean;
  hideBorder?: boolean;
}

const Chip: React.FC<ChipProps> = ({
  onPress,
  onLayout,
  isSelected,
  children,
  activeBackgroundColor,
  inactiveBackgroundColor,
  titleActiveColor,
  titleInactiveColor,
  transparent,
  hideBorder,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.pill,
        backgroundColor: isSelected
          ? activeBackgroundColor
          : inactiveBackgroundColor,
        borderColor: hideBorder ? TRANSPARENT : activeBackgroundColor,
      }}
      onPress={onPress}
      onLayout={onLayout}>
      <Text
        style={{
          ...styles.title,
          color: isSelected ? titleActiveColor : titleInactiveColor,
        }}>
        {children}
      </Text>
      {isSelected && (
        <View style={styles.triangleContainer}>
          <Triangle
            color={transparent ? 'transparent' : activeBackgroundColor}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 3,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
    marginVertical: 6,
  },
  triangleContainer: {position: 'absolute', top: 30},
});

export default Chip;
