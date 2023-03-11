import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  totalPoinst: number;
}

const HeaderHome = ({totalPoinst}: Props) => {
  return (
    <View>
      <Text style={styles.textWelcome}>Bienvenido de vuelta!</Text>
      <Text style={styles.textNameUser}>Ruben Rodriguez</Text>

      <View style={styles.containerPoints}>
        <Text style={styles.textTitle}>TUS PUNTOS</Text>
        <View style={styles.cardPoints}>
          <Text style={styles.textMonth}>Diciembre</Text>
          <Text style={styles.textPoints}>
            {totalPoinst.toLocaleString('mx')} pts
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#9B9898',
  },
  textWelcome: {
    fontSize: 20,
    fontWeight: '800',
    color: '#020202',
    marginBottom: 5,
  },
  textNameUser: {
    fontSize: 16,
    fontWeight: '400',
    color: '#020202',
  },
  containerPoints: {
    marginVertical: 20,
  },
  cardPoints: {
    paddingHorizontal: 18,
    paddingVertical: 21,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#334FFA',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    borderRadius: 20,
    elevation: 7,
    justifyContent: 'center',
    maxWidth: 286,
    width: '100%',
    height: 143,
  },
  textMonth: {
    position: 'relative',
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 7,
  },
  textPoints: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    alignSelf: 'center',
  }
});

export default HeaderHome;
