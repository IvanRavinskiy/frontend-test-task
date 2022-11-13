import {
  createNavigationContainerRef,
  NavigationHelpers,
} from '@react-navigation/native';
import {MainNativeStackNavigatorParamList} from './types';

export const navigationRef = createNavigationContainerRef();

export type Navigate = (
  ...args: Parameters<
    NavigationHelpers<MainNativeStackNavigatorParamList>['navigate']
  >
) => void;

export const navigate: Navigate = (...args) => {
  if (navigationRef.isReady()) {
    // @ts-ignore
    navigationRef.navigate(...args);
  }
};
