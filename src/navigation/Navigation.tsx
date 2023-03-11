import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Product} from '../interfaces/productInerface';
import {MyHeader} from '../components/Header';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Product;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  const {top} = useSafeAreaInsets();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: {
          backgroundColor: '#F8F8F8',
        },
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyle: {
            marginTop: top,
          },
          headerStyle: {
            backgroundColor: '#F8F8F8',
          },
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={() => ({
          headerMode: 'screen',
          header: ({route}) => (
            <MyHeader top={top} title={route.params.product} />
          ),
          headerStyle: {
            backgroundColor: '#CFD6FF',
          },
        })}
      />
    </Stack.Navigator>
  );
};
