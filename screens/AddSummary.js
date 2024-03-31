import SummaryForm from '../components/SummaryForm';

import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import AddSummaryButton from '../components/UI/AddSummaryButton';
import { Color } from '../constants/Color';
import { SummaryContext } from '../context/summary-context';
import { deleteSummary, postSummary, updateSummary } from '../util/http';

export default function AddSummary({ route, navigation }) {
	const summaryCtx = useContext(SummaryContext);

	const editedSummaryId = route.params?.summaryId;
	const isEditing = !!editedSummaryId;

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditing ? 'Edit Summary' : 'Add Summary',
		});
	}, [navigation, isEditing]);

	async function deleteSummaryHandler() {
		await deleteSummary(editedSummaryId);
		summaryCtx.deleteSummary(editedSummaryId);
		navigation.goBack();
	}

	function cancelHandler() {
		navigation.goBack();
	}

	async function confirmHandler(summaryData) {
		if (isEditing) {
			summaryCtx.updateSummary(editedSummaryId, summaryData);
			await updateSummary(editedSummaryId, summaryData);
		} else {
			const id = await postSummary(summaryData);
			console.log(summaryData);
			console.log(id);
			summaryCtx.addSummary({ ...summaryData, id: id });
		}
		navigation.goBack();
	}

	return (
		<View style={styles.container}>
			<SummaryForm
				submitButtonLabel={isEditing ? 'Update' : 'Add'}
				onSubmit={confirmHandler}
				onCancel={cancelHandler}
			/>
			{isEditing && (
				<View style={styles.deleteContainer}>
					<AddSummaryButton
						icon="trash"
						color={Color.lime}
						size={36}
						onPress={deleteSummaryHandler}
					/>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: Color.dark_shadow,
	},
	deleteContainer: {
		marginTop: 16,
		paddingTop: 8,
		borderTopWidth: 2,
		borderTopColor: Color.light_shadow,
		alignItems: 'center',
	},
});
