import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    separator: {
      height: 1,
      width: '100%',
      backgroundColor: 'black',
    },
  });

  return styles;
};
