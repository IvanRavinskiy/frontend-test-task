import {StyleSheet, ViewStyle} from 'react-native';

type HistoryScreenStyles = {
  renderItemContainer: ViewStyle;
};

export const historyScreenStyles = StyleSheet.create<HistoryScreenStyles>({
  renderItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    paddingVertical: '5%',
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
  },
});
