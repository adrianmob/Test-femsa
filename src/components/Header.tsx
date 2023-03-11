import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface Props {
  title: string;
  top: number;
}

export const MyHeader = ({title, top}: Props) => {
  const styles = StyleSheet.create({
    container: {
      paddingTop: top + 20,
      backgroundColor: '#CFD6FF',
    },
    title: {
      fontSize: 24,
      fontWeight: '800',
      paddingStart: 24,
      paddingBottom: 20,
      color: '#000000',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
