import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const CustomButton = ({ title, onPress, disabled }: {title: string, onPress: ()=>void, disabled: boolean}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
      marginTop: 5,
      backgroundColor: '#007BFF', 
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    disabledButton: {
      backgroundColor: '#B0BEC5',
    },
  });