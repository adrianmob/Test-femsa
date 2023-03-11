import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Product} from '../interfaces/productInerface';
import {convertDate} from '../utils/helpers';

interface Props {
  product: Product;
  navigateToDetail: (product: Product) => void;
}
const ListProduct = ({product, navigateToDetail}: Props) => {
  return (
    <TouchableOpacity
      testID="productItem"
      onPress={() => navigateToDetail(product)}
      style={styles.containerItem}>
      <View style={styles.containerInfoItem}>
        <Image style={styles.img} source={{uri: product.image}} />
        <View style={styles.infoItem}>
          <Text style={styles.nameItem}>{product.product}</Text>
          <Text style={styles.dateItem}>{convertDate(product.createdAt)}</Text>
        </View>
      </View>
      <View style={styles.containerPoints}>
        <Text style={styles.points}>
          {product.is_redemption ? (
            <Text style={styles.redemption}>- </Text>
          ) : (
            <Text style={styles.notRedemption}>+ </Text>
          )}
          {product.points.toLocaleString('mx')} {'>'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    marginBottom: 8,
    justifyContent: 'space-between',
  },
  img: {
    width: 55,
    height: 55,
    marginRight: 11,
  },
  containerInfoItem: {
    flexDirection: 'row',
  },
  infoItem: {
    justifyContent: 'center',
  },
  nameItem: {
    color: '#000000',
    fontWeight: '800',
    fontSize: 14,
  },
  dateItem: {
    color: '#000000',
    fontWeight: '400',
    fontSize: 12,
  },
  containerPoints: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  points: {
    color: '#000000',
    fontWeight: '800',
    fontSize: 16,
  },
  redemption: {
    color: '#FF0000',
  },
  notRedemption: {
    color: '#00B833',
  },
});

export default ListProduct;
