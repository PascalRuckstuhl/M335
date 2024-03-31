import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddSummaryButton from './components/UI/AddSummaryButton';
import { Color } from './constants/Color';
import SummaryContextProvider, {
	SummaryContext,
} from './context/summary-context';
import AddSummary from './screens/AddSummary';
import AllSummarys from './screens/AllSummarys';
import Start from './screens/Start';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style="dark" />
			<SummaryContextProvider>
				<NavigationContainer>
					<Stack.Navigator
						initialRouteName="Start"
						screenOptions={{
							headerStyle: {
								backgroundColor: Color.black,
							},
							headerTintColor: '#fff',
							headerTitleStyle: {
								fontWeight: 'bold',
							},
							headerTitleAlign: 'left',
						}}
					>
						<Stack.Screen
							name="Start"
							component={Start}
							options={{ headerShown: false }}
						></Stack.Screen>
						<Stack.Screen
							name="All summarys"
							component={AllSummarys}
							options={({ navigation }) => ({
								title: 'Readingbuddy',
								headerBackVisible: false,
								headerRight: ({ tintColor }) => (
									<AddSummaryButton
										icon="add-to-list"
										size={24}
										color={tintColor}
										onPress={() => navigation.navigate('Add a summary')}
									/>
								),
							})}
						/>
						<Stack.Screen
							name="Add a summary"
							component={AddSummary}
							options={{
								headerBackTitleVisible: false,
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</SummaryContextProvider>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
