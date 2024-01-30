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
    title: {
      fontSize: 20,
      fontWeight: '500',
    },
    body: {
      fontSize: 16,
      marginTop: 8,
    },
    button: {
      padding: 8,
    },
  });

  return styles;
};
