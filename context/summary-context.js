import { createContext, useReducer } from 'react';

const DUMMY_SUMMARYS = [
	{
		quote: 'this is simply a dummy quote',
		author: 'dummy',
		date: new Date(),
		imageUri: '',
	},
];

export const SummaryContext = createContext({
	quotes: [],
	addSummary: ({ book, from, to, summary, imageUri }) => {},
	setSummarys: (summarys) => {},
	deleteSummary: (id) => {},
	updateSummary: (id, { description, amount, date }) => {},
});

function summarysReducer(state, action) {
	switch (action.type) {
		case 'ADD':
			const id = new Date().toString() + Math.random().toString();
			return [{ ...action.payload, id: id }, ...state];
		case 'SET':
			return action.payload.reverse();
		case 'DELETE':
			return state.filter((summary) => summary.id !== action.payload);
		case 'UPDATE':
			const updatableSummaryIndex = state.findIndex(
				(quote) => quote.id === action.payload.id
			);
			const updatableSummary = state[updatableSummaryIndex];
			const updatedItem = { ...updatableSummary, ...action.payload.data };
			const updatedSummarys = [...state];
			updatedSummarys[updatableSummaryIndex] = updatedItem;
			return updatedSummarys;
		default:
			return state;
	}
}

export default function SummaryContextProvider({ children }) {
	const [SummarysState, dispatch] = useReducer(summarysReducer, DUMMY_SUMMARYS);

	function addSummary(SummaryData) {
		dispatch({ type: 'ADD', payload: SummaryData });
	}

	function setSummarys(summarys) {
		dispatch({ type: 'SET', payload: summarys });
	}

	function deleteSummary(id) {
		dispatch({ type: 'DELETE', payload: id });
	}

	function updateSummary(id, summaryData) {
		dispatch({ type: 'UPDATE', payload: { id: id, data: summaryData } });
	}

	const value = {
		summarys: SummarysState,
		setSummarys: setSummarys,
		addSummary: addSummary,
		deleteSummary: deleteSummary,
		updateSummary: updateSummary,
	};

	return (
		<SummaryContext.Provider value={value}>{children}</SummaryContext.Provider>
	);
}
