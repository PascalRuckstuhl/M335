import { Entypo } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

export default function AddSummaryButton({ icon, size, color, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Entypo name={icon} size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 4,
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});
