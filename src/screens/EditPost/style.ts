import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    input: {
      fontSize: 16,
      padding: 12,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 4,
      marginBottom: 16,
    },
  });

  return styles;
};
