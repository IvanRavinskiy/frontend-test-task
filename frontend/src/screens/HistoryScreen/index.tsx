import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {createAPI} from '../../utils/creatApi';
import {configureData, EventType} from '../../utils/configureData';
import {historyScreenStyles} from './styles';

export const HistoryScreen = () => {
  const [data, setData] = useState<null | EventType[]>([]);

  const renderItem = ({item}) => (
    <View style={historyScreenStyles.renderItemContainer}>
      <Text>{item.name}</Text>
      <Text>{new Date(item.date).toDateString().substring(4)}</Text>
    </View>
  );
  useEffect(async () => {
    const res1 = await createAPI().then(res => res.items);
    const configureRes = configureData(res1);
    setData(configureRes);
    return () => setData([]);
  }, []);

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
