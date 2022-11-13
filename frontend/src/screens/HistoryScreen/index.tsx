import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {historyScreenStyles} from './styles';
import {useAppDispatch, useAppSelector} from '../../state';
import {GET_EVENTS} from '../../state/reducers/history';

export const HistoryScreen = () => {
  const data = useAppSelector(state => state.history.events);
  const dispatch = useAppDispatch();

  const renderItem = ({item}) => (
    <View style={historyScreenStyles.renderItemContainer}>
      <Text>{item.name}</Text>
      <Text>{new Date(item.date).toDateString().substring(4)}</Text>
    </View>
  );

  useEffect(() => {
    dispatch(GET_EVENTS());
  }, [dispatch]);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
