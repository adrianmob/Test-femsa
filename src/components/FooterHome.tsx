import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  filter: string;
  setFilter: React.Dispatch<
    React.SetStateAction<'redemption' | 'notRedemption' | 'all'>
  >;
}

const FooterHome = ({filter, setFilter}: Props) => {
  return (
    <View style={styles.containerButtons}>
      {filter === 'all' ? (
        <>
          <TouchableOpacity
            style={styles.btnFilter}
            onPress={() => {
              setFilter('notRedemption');
            }}>
            <Text style={styles.btnText}>Ganados</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnFilter}
            onPress={() => {
              setFilter('redemption');
            }}>
            <Text style={styles.btnText}>Canejados</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            style={[styles.btnFilter, styles.btnFilterAll]}
            onPress={() => {
              setFilter('all');
            }}>
            <Text style={styles.btnText}>Todos</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerButtons: {
    marginTop: 43,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  btnFilter: {
    width: '49%',
    paddingHorizontal: 17,
    paddingVertical: 17,
    backgroundColor: '#334FFA',
    borderRadius: 10,
  },
  btnFilterAll: {
    flex: 1,
  },
  btnText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default FooterHome;
