    import React from 'react';
    import { View, StyleSheet,Text } from 'react-native';

    const ProgressBar = ({ completed, total }: { completed: number; total: number }) => {
      const progress = (completed / total) * 100;
      return (
        <View style={styles.progressBarContainer}>
         
          <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
        </View>
      );
    };

    const styles = StyleSheet.create({
      progressBarContainer: {
        width: '80%',
        height: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',
      },
      progressBarFill: {
        height: '100%',
        backgroundColor: '#4CAF50', // Green fill color
        borderRadius: 5, // Match container's border radius
      },
    });

    export default ProgressBar;