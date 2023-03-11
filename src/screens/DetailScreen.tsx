import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';
import {convertDate} from '../utils/helpers';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const DetailScreen = ({route, navigation}: Props) => {
  const product = route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardContainer}>
        <Image style={styles.img} source={{uri: product.image}} />
      </View>
      <Text style={styles.titleText}>Detalles del producto:</Text>
      <Text style={styles.detailText}>
        Comprado el {convertDate(product.createdAt)}
      </Text>
      <Text style={styles.titleText}>Con esta compra acumulaste:</Text>
      <Text style={styles.pointsText}>
        {product.points.toLocaleString('mx')} puntos
      </Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
        <Text style={styles.btnText}>Aceptar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  cardContainer: {
    marginTop: 20,
    paddingHorizontal: 75,
    paddingVertical: 77,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 32,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 6,
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
  },
  titleText: {
    color: '#9B9898',
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 20,
  },
  detailText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 20,
  },
  pointsText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 47,
  },
  btn: {
    paddingHorizontal: 17,
    paddingVertical: 17,
    backgroundColor: '#334FFA',
    borderRadius: 10,
    marginBottom: 20,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
    alignSelf: 'center',
  },
});

export default DetailScreen;
