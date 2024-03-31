import { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import SummaryList from '../components/SummaryList';
import { SummaryContext } from '../context/summary-context';
import { fetchSummarys } from '../util/http';

export default function AllSummarys() {
	const summaryContext = useContext(SummaryContext);

	// wird immer beim erstmaligen Laden des JS gestartet
	useEffect(() => {
		async function getSummarys() {
			const summarys = await fetchSummarys();
			summaryContext.setSummarys(summarys);
		}
		getSummarys();
	}, []);

	return <SummaryList summarys={summaryContext.summarys} />;
}
