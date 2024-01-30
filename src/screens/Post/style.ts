import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: '500',
      paddingHorizontal: 16,
    },
    body: {
      fontSize: 16,
      marginTop: 8,
      paddingHorizontal: 16,
    },
    separator: {
      height: 1,
      width: '100%',
      backgroundColor: 'black',
    },
    row: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    input: {
      flex: 1,
      fontSize: 16,
      padding: 12,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 4,
    },
  });

  return styles;
};
