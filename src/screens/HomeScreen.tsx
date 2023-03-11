import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
  View,
} from 'react-native';
import {useProducts} from '../hooks/useProducts';
import FooterHome from '../components/FooterHome';
import HeaderHome from '../components/HeaderHome';
import ListProduct from '../components/ListProduct';

const HomeScreen = () => {
  const {
    filterProducts,
    totalPoinst,
    setFilter,
    filter,
    navigateToDetail,
    isLoading,
  } = useProducts();

  if (isLoading) {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator color="#334FFA" size={100} />
      </View>
    );
  }

  return (
    <ScrollView nestedScrollEnabled style={styles.container}>
      <HeaderHome totalPoinst={totalPoinst} />
      <Text style={styles.textTitle}>TUS MOVIMIENTOS</Text>
      <ScrollView nestedScrollEnabled style={styles.listProducts}>
        {filterProducts.map(produc => (
          <ListProduct
            key={produc.id}
            navigateToDetail={navigateToDetail}
            product={produc}
          />
        ))}
      </ScrollView>
      <FooterHome setFilter={setFilter} filter={filter} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  listProducts: {
    marginTop: 20,
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    maxHeight: 330,
  },
  textTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#9B9898',
  },
});

export default HomeScreen;
