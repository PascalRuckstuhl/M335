import { StyleSheet, Image, Pressable, Text, View } from 'react-native';
import { Color } from '../constants/Color';
export default function SummaryItem({ summary, onSelect }) {
	return (
		<Pressable onPress={onSelect}>
			<View style={styles.container}>
				<Text style={styles.text}>
          {summary.book}
          </Text>
				<Text style={styles.text}>
					Pages: {summary.from} - {summary.to}
				</Text>
				<Text style={styles.text}>
          {summary.summary}
          </Text>
				<Image style={styles.image} source={{ imageUri: summary.imageUri }} />
			</View>
		</Pressable>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
		paddingTop: 7,
		paddingBottom: 7,
    margin:3,
		backgroundColor: Color.dark_shadow,
    borderRadius: 10,
	},
  text: {
    color: Color.orange,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
