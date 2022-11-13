import React from 'react';
import {FlatList, Text, View} from 'react-native';

const data = [
  {
    id: '61c9b387591f62638eec3f92',
    appointmentId: '61c9a7b2591f62638eec3e88',
    name: 'Condition',
    resource: 'Condition',
    date: '2021-12-27T12:37:27.998000+00:00',
  },
  {
    id: '62558a85f8354e3ceeeaf039',
    appointmentId: '6239ce03bf646fd0dde4e9d2',
    name: 'Diagnosis',
    resource: 'Condition',
    date: '2022-04-12T14:19:49.095000+00:00',
  },
  {
    id: '61f40bff82ce73530ec0121c',
    appointmentId: '61f3885e8f542e01dd420377',
    name: 'MedicationStatement',
    resource: 'MedicationStatement',
    date: '2022-01-28T15:30:07.529000+00:00',
  },
  {
    id: '622b0bf2a8fcd4c45f836994',
    appointmentId: '622b0afea8fcd4c45f83695b',
    name: 'CarePlan',
    resource: 'CarePlan',
    date: '2022-03-11T08:44:34.709000+00:00',
  },
  {
    id: '61f2e8d58f542e01dd420362',
    appointmentId: '61f228da44499147c98f7b96',
    name: 'Condition',
    resource: 'Condition',
    date: '2022-01-27T18:47:49.002000+00:00',
  },
  {
    id: '61f63c15fc9672e4e31223b7',
    name: 'Observation',
    resource: 'Observation',
    date: '2022-01-30T07:19:49.924000+00:00',
  },
  {
    id: '61f15ee250b40e8fddda00e3',
    appointmentId: '61f13bdc50b40e8fddda00d0',
    name: 'Condition',
    resource: 'Condition',
    date: '2022-01-26T14:46:58.122000+00:00',
  },
  {
    id: '61f137ca50b40e8fddda005b',
    appointmentId: '61f137aa50b40e8fddda003e',
    name: 'AllergyIntolerance',
    resource: 'AllergyIntolerance',
    date: '2022-01-26T12:00:10.224000+00:00',
  },
  {
    id: '621733f31856438cf241e8d4',
    name: 'Appointment',
    resource: 'Appointment',
    date: '2022-02-24T07:37:01.336000+00:00',
  },
  {
    id: '61c9b388591f62638eec3f9a',
    appointmentId: '61c9a7b2591f62638eec3e88',
    name: 'AllergyIntolerance',
    resource: 'AllergyIntolerance',
    date: '2021-12-27T12:37:28.008000+00:00',
  },
  {
    id: '621733f31856438cf241e8d8',
    appointmentId: '621733f31856438cf241e8d4',
    name: 'Observation',
    resource: 'Observation',
    date: '2022-02-24T07:29:55.453000+00:00',
  },
  {
    id: '61f40bff82ce73530ec0120a',
    appointmentId: '61f3885e8f542e01dd420377',
    name: 'Observation',
    resource: 'Observation',
    date: '2022-01-18T00:00:00+00:00',
  },
  {
    id: '61f40bff82ce73530ec01200',
    appointmentId: '61f3885e8f542e01dd420377',
    name: 'Observation',
    resource: 'Observation',
    date: '2022-01-28T15:30:07.494000+00:00',
  },
  {
    id: '61f40bff82ce73530ec01208',
    appointmentId: '61f3885e8f542e01dd420377',
    name: 'Observation',
    resource: 'Observation',
    date: '2022-01-28T15:30:07.505000+00:00',
  },
];

export const HistoryScreen = () => {
  const renderItem = ({item}) => (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text>{item.name}</Text>
      <Text>{new Date(item.date).toDateString().substring(4)}</Text>
    </View>
  );

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
