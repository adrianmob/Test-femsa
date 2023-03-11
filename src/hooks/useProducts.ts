import {useNavigation} from '@react-navigation/core';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {getProducts} from '../api/mockAPI';
import {Product} from '../interfaces/productInerface';

export const useProducts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<'all' | 'redemption' | 'notRedemption'>(
    'all',
  );
  const [totalPoinst, setTotalPoinst] = useState<number>(0);
  const navigation = useNavigation();

  const fetchProducts = async () => {
    try {
      const resp = await getProducts();
      const productsResponse = resp.data;
      setProducts(productsResponse);
      setFilterProducts(productsResponse);
      setPoints(productsResponse);
    } catch (error) {
      showAlert();
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
    return () => {
      setTotalPoinst(0);
    };
  }, []);

  const setPoints = (data: Product[]) => {
    setTotalPoinst(
      data.reduce((acc, current) => {
        if (current.is_redemption) {
          return acc - current.points;
        } else {
          return acc + current.points;
        }
      }, 0),
    );
  };

  useEffect(() => {
    let filterData = products;
    if (filter !== 'all') {
      filterData = products.filter(product => {
        if (filter === 'redemption' && product.is_redemption) {
          return true;
        }
        if (filter === 'notRedemption' && !product.is_redemption) {
          return true;
        }
        return false;
      });
      setTotalPoinst(
        filterData.reduce((acc, current) => acc + current.points, 0),
      );
    } else {
      setPoints(filterData);
    }
    setFilterProducts(filterData);
  }, [filter]);

  const navigateToDetail = (product: Product) => {
    navigation.navigate('DetailScreen', product);
  };

  const showAlert = () => {
    Alert.alert('Error', 'Ocurrio un error al recuperar los datos.', [
      {text: 'OK', style: 'destructive'},
    ]);
  };

  return {
    filterProducts,
    totalPoinst,
    setFilter,
    filter,
    isLoading,
    navigateToDetail,
  };
};
