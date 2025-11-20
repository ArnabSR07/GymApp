import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalLine = () => {
  return (
    <View style={styles.line} />
  );
};

const styles = StyleSheet.create({
  line: {
    borderBottomColor: '#ccc', // Choose your desired color
    borderBottomWidth: 2,      // Choose your desired thickness
    marginVertical: 10,       // Optional: Add vertical spacing
    width: '100%',             // Optional: Set the width
  },
});

export default HorizontalLine;