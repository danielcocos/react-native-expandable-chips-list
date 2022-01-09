import React, {useEffect, useState} from 'react';
import {View, StyleSheet, LayoutChangeEvent} from 'react-native';
import {ACTIVE_COLOR, INACTIVE_COLOR} from '../constants/Colors';
import {getLastIndexes} from '../utils/utils';
import Chip from './Chip';

interface ChipsListProps {
  data: Array<string>;
  transparent?: boolean;
  activeColor?: string;
  inactiveColor?: string;
  activeTextColor?: string;
  inactiveTextColor?: string;
  hideBorder?: boolean;
  renderContent: (item: string, index: number) => React.ReactElement;
  onItemPress: (item: string, index: number) => void;
}

const ChipsList: React.FC<ChipsListProps> = ({
  data,
  transparent,
  activeColor,
  inactiveColor,
  activeTextColor,
  inactiveTextColor,
  hideBorder,
  renderContent,
  onItemPress,
}) => {
  const [positions, updatePositions] = useState<Array<number>>([]);
  const [mappedItems, updateMappedItems] = useState<Array<number>>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const activeBackgroundColor = activeColor || ACTIVE_COLOR;
  const inactiveBackgroundColor = inactiveColor || INACTIVE_COLOR;
  const titleActiveColor = activeTextColor || INACTIVE_COLOR;
  const titleInactiveColor = inactiveTextColor || ACTIVE_COLOR;

  const onLayout = (event: LayoutChangeEvent) => {
    const {y} = event.nativeEvent.layout;
    updatePositions([...positions, y]);
  };

  useEffect(() => {
    if (data.length === positions.length) {
      updateMappedItems(getLastIndexes(positions.sort()));
    }
  }, [data.length, positions]);

  const onPress = (index: number) => {
    if (selectedIndex === index) {
      setSelectedIndex(-1);
      return;
    }
    setSelectedIndex(index);
  };

  return (
    <View style={styles.container}>
      {data.map((item: string, index: number) => (
        <React.Fragment key={item + index.toString()}>
          <Chip
            onLayout={onLayout}
            onPress={() => {
              onPress(index);
              onItemPress(item, index);
            }}
            isSelected={selectedIndex === index}
            activeBackgroundColor={activeBackgroundColor}
            inactiveBackgroundColor={inactiveBackgroundColor}
            titleActiveColor={titleActiveColor}
            titleInactiveColor={titleInactiveColor}
            transparent={transparent}
            hideBorder={hideBorder}>
            {item}
          </Chip>
          {selectedIndex >= 0 && index === mappedItems[selectedIndex] && (
            <View
              style={[
                {...styles.description, backgroundColor: activeBackgroundColor},
                transparent && styles.transparent,
              ]}>
              {renderContent(data[selectedIndex], selectedIndex)}
            </View>
          )}
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  description: {
    width: '100%',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 15,
  },
  transparent: {backgroundColor: 'transparent'},
});

export default ChipsList;
