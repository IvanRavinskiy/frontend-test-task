import {StyleSheet, ViewStyle} from 'react-native';

type HistoryScreenStyles = {
  renderItemContainer: ViewStyle;
  renderItemHeaderContainer: ViewStyle;
};

export const historyScreenStyles = StyleSheet.create<HistoryScreenStyles>({
  renderItemContainer: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    paddingHorizontal: '2%',
    paddingVertical: '5%',
  },
  renderItemHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
});
