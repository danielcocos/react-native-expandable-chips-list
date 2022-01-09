
# React Native Expandable Chips List

A react native component that lets you build a dynamic expandable chips list.

<p align="center">
<img src="https://raw.githubusercontent.com/danielcocos/react-native-expandable-chips-list/main/demo.gif" width="600" height="1298">
</p>

## Installation
Run `npm install react-native-expandable-chips-list` in your project directory.

## Usage
```js
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import ChipsList from 'react-native-expandable-chips-list';

const App = () => {

  return (
    <ChipsList
      data={data}
      activeColor="#FFAC1C"
      inactiveColor="#FFFFFF"
      activeTextColor="#FFFFFF"
      inactiveTextColor="#FFAC1C"
      onItemPress={(item, index) => console.log(item, index)}
      renderContent={(item: string, index: number) => (
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item}</Text>
          <Text style={styles.subtitle}>{subtitles[index]}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default App;

```

## Available props

| Name                | Type                | Default                                                           | Description                                    |
|---------------------|---------------------|-------------------------------------------------------------------|------------------------------------------------|
| `data`              | `Array` of `string` | **REQUIRED**                                                      | Array of data that is displayed as chips list. |
| `renderContent`     | `func`              | **REQUIRED**  `(item:string, index:number) => React.ReactElement` | Render the content for every chip in the list. |
| `onItemPress`       | `func`              | **REQUIRED** `(item:string, index:number) => void`                | Called when the item is pressed.               |
| `transparent`       | `bool`              | `false`                                                           | Makes the content view background transparent. |
| `activeColor`       | `string`            | `#0096FF`                                                         | Color of the selected chip.                    |
| `inactiveColor`     | `string`            | `#FFFFFF`                                                         | Color of the unselected chips.                 |
| `activeTextColor`   | `string`            | `#FFFFFF`                                                         | Color of the selected chip title.              |
| `inactiveTextColor` | `string`            | `#0096FF`                                                         | Color of the unselected chips titles.          |
| `hideBorder`        | `bool`              | `false`                                                           | Hides the border of the chips.                 |
