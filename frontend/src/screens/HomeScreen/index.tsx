import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, TouchableOpacity, View} from 'react-native';
import {MainNativeStackNavigatorParamList} from '../../navigation/types';
import {ROUTES} from '../../constants/routes';
import {homeScreenStyles} from './styles';

export type HomeScreenProps = NativeStackScreenProps<
  MainNativeStackNavigatorParamList,
  ROUTES.HOME_SCREEN
>;

export const HomeScreen: FC<HomeScreenProps> = props => {
  const {navigation} = props;

  const goToHistoryScreen = () => {
    navigation.push(ROUTES.HISTORY_SCREEN);
  };

  return (
    <View style={homeScreenStyles.historyButtonContainer}>
      <TouchableOpacity
        style={homeScreenStyles.historyButton}
        onPress={goToHistoryScreen}>
        <Text style={homeScreenStyles.buttonText}>History</Text>
      </TouchableOpacity>
    </View>
  );
};
