import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Color } from '../constants/Color';

export default function Input({ label, textInputConfig }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 16,
  },
  label: {
    fontSize: 12,
    color: Color.shadow,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  input: {
    backgroundColor: Color.light_shadow,
    color: Color.dark_shadow,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
});
