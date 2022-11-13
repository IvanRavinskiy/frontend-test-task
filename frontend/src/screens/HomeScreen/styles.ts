import {StyleSheet, TextProps, ViewStyle} from 'react-native';

type HomeScreenStyles = {
  historyButtonContainer: ViewStyle;
  historyButton: ViewStyle;
  buttonText: TextProps;
};

export const homeScreenStyles = StyleSheet.create<HomeScreenStyles>({
  historyButtonContainer: {
    justifyContent: 'center',
    paddingHorizontal: '5%',
    height: '100%',
  },
  historyButton: {
    alignItems: 'center',
    borderRadius: 30,
    height: 44,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#B22222',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
  },
});
