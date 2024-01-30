import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
    },
    wrap: {
      flex: 1,
    },
    text: {
      fontSize: 16,
    },
    button: {
      padding: 8,
    },
  });

  return styles;
};
