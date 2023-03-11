/**
 * @format
 */

import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';
import HomeScreen from '../src/screens/HomeScreen';
import axios from "axios";
import {getProducts, BASE_URL} from '../src/api/mockAPI';
import DetailScreen from '../src/screens/DetailScreen';
import HeaderHome from '../src/components/HeaderHome';
import FooterHome from '../src/components/FooterHome';
import ListProduct from '../src/components/ListProduct';
import { act } from 'react-test-renderer';
jest.mock("axios");

let component;

jest.mock('react-native-gesture-handler', () => {});
jest.mock(
  '@react-navigation/stack',
  () => {
    return {createStackNavigator<RootStackParams> : () => 'whatever'}
  },
);
jest.mock('@react-navigation/core', () => {return {useNavigation: () => 'whatever'}});


describe('<App />', () => {
  beforeEach(() => {
    component = render(<App />);
  });
  it('Renderiza correctamente', () => {
    expect(component).toBeDefined();
  });
});

describe('<HomeScreen />', () => {
  beforeEach(() => {

    component = render(<HomeScreen />);

  });

  it('Renderiza correctamente', () => {

    expect(component).toBeDefined();
    expect(component.queryAllByTestId('productItem').length).toEqual(0)
  });

  it('llamada a la API',  async ()=>{
 const products = [{"createdAt":"2022-12-09T06:34:25.607Z","product":"Handmade Metal Shoes","points":16434,"image":"https://loremflickr.com/640/480/transport","is_redemption":false,"id":"1"},{"createdAt":"2022-12-09T17:02:51.904Z","product":"Recycled Plastic Tuna","points":92984,"image":"https://loremflickr.com/640/480/technics","is_redemption":false,"id":"2"},{"createdAt":"2022-12-09T10:20:00.909Z","product":"Fantastic Granite Bacon","points":42416,"image":"https://loremflickr.com/640/480/technics","is_redemption":false,"id":"3"},{"createdAt":"2022-12-09T00:30:23.966Z","product":"Fantastic Fresh Gloves","points":23913,"image":"https://loremflickr.com/640/480/city","is_redemption":true,"id":"4"},{"createdAt":"2022-12-08T18:54:56.243Z","product":"Rustic Rubber Bacon","points":69814,"image":"https://loremflickr.com/640/480/people","is_redemption":true,"id":"5"},{"createdAt":"2022-12-09T14:12:11.097Z","product":"Tasty Concrete Cheese","points":81585,"image":"https://loremflickr.com/640/480/business","is_redemption":false,"id":"6"},{"createdAt":"2022-12-09T12:50:53.209Z","product":"Oriental Cotton Keyboard","points":88323,"image":"https://loremflickr.com/640/480/nightlife","is_redemption":false,"id":"7"},{"createdAt":"2022-12-08T20:32:14.169Z","product":"Oriental Soft Pants","points":87794,"image":"https://loremflickr.com/640/480/animals","is_redemption":true,"id":"8"},{"createdAt":"2022-12-09T05:46:47.645Z","product":"Luxurious Rubber Bacon","points":13063,"image":"https://loremflickr.com/640/480/food","is_redemption":true,"id":"9"},{"createdAt":"2022-12-09T10:56:34.206Z","product":"Elegant Rubber Fish","points":91311,"image":"https://loremflickr.com/640/480/transport","is_redemption":false,"id":"10"},{"createdAt":"2022-12-09T12:36:43.169Z","product":"Recycled Wooden Salad","points":44871,"image":"https://loremflickr.com/640/480/city","is_redemption":false,"id":"11"},{"createdAt":"2023-02-04T07:48:16.249Z","product":"Licensed Metal Salad","points":93367,"image":"https://loremflickr.com/640/480/food","is_redemption":false,"id":"12","from_account_id":781,"to_account_id":369,"amount":16,"verification_code":"8319","reason":"test16"},{"createdAt":"2023-02-04T08:45:26.468Z","product":"Ergonomic Plastic Bacon","points":33432,"image":"https://loremflickr.com/640/480/food","is_redemption":false,"id":"13","from_account_id":781,"to_account_id":369,"amount":16,"verification_code":"8319","reason":"test16"}]
    axios.get.mockResolvedValueOnce(products);

    const response =  await getProducts();

    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/products`);
    expect(response).toEqual(products);
  });

  describe('<DetailScreen />', () => {
  beforeEach(() => {
    const route = {
      params: {
        createdAt :"2023-02-04T08:45:26.468Z",product:"Ergonomic Plastic Bacon",
        points:33432,
        image:"https://loremflickr.com/640/480/food",is_redemption:false,
        id:"13"}
      }

      const navigation = {
        goBack: jest.fn()
      }
    component = render(<DetailScreen route={route} navigation={navigation}  />);

  });

  it('Renderiza correctamente', () => {
    expect(component).toBeDefined();

  });
});

describe('<HeaderHome />', () => {
  beforeEach(() => {
    component = render(<HeaderHome totalPoinst={0} />);

  });

  it('Renderiza correctamente', () => {
    expect(component).toBeDefined();

  });
});

describe('<FooterHome />', () => {
 beforeEach(() => {
 const setFilter = jest.fn()
    const filter = 'all'
    component = render(<FooterHome filter={filter} setFilter={setFilter} />)
  });
  it('Renderiza correctamente', () => {

    expect(component).toBeDefined();

  });
});

describe('<ListProduct />', () => {
beforeEach(() => {
 const navigateToDetail = jest.fn()
    const product = {
        createdAt :"2023-02-04T08:45:26.468Z",product:"Ergonomic Plastic Bacon",
        points:33432,
        image:"https://loremflickr.com/640/480/food",is_redemption:false,
        id:"13"
    }
    component = render(<ListProduct product={product} navigateToDetail={navigateToDetail} />)});
  it('Renderiza correctamente', () => {
    expect(component).toBeDefined();

  });
});


});
