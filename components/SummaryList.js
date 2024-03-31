import { FlatList, StyleSheet, Text, View } from 'react-native';
import SummaryItem from './SummaryItem';

export default function SummaryList({ summarys }) {
	if (summarys.length === 0) {
		return (
			<View style={styles.fallbackContainer}>
				<Text style={styles.fallbackText}>
					kinda empty in here...
					{'\n'}start by adding some summarys!
				</Text>
			</View>
		);
	}

	return (
		<FlatList
			data={summarys}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => <SummaryItem summary={item} />}
		/>
	);
}

const styles = StyleSheet.create({
	fallbackContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	fallbackText: {
		fontSize: 16,
		textAlign: 'center',
	},
});
