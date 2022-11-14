import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {historyScreenStyles} from './styles';
import {useAppDispatch, useAppSelector} from '../../state';
import {GET_EVENTS} from '../../state/reducers/history';

export const HistoryScreen = () => {
  const data = useAppSelector(state => state.history.events);
  const dispatch = useAppDispatch();

  // const getResource = (resource: string, id: string) => {
  //   historyAPI.resources(resource, id);
  // };

  const renderItem = ({item}) => (
    <View style={historyScreenStyles.renderItemContainer}>
      <View style={historyScreenStyles.renderItemHeaderContainer}>
        <Text>{item.name}</Text>
        <Text>{new Date(item.date).toDateString().substring(4)}</Text>
      </View>
      <Text>{item.id}</Text>
    </View>
  );

  // const viewabilityConfig = {
  //   waitForInteraction: true,
  //   viewAreaCoveragePercentThreshold: 0.5,
  // };
  //
  // const handleViewableItemsChanged = useCallback(info => {
  //   console.log('info', info.viewableItems);
  // }, []);

  useEffect(() => {
    dispatch(GET_EVENTS());
  }, [dispatch]);

  return (
    <View>
      <FlatList
        // viewabilityConfig={viewabilityConfig}
        // onViewableItemsChanged={handleViewableItemsChanged}
        ListHeaderComponent={<Text>123</Text>}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
