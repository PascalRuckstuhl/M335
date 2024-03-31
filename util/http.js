import axios from 'axios';
import SummaryItem from '../components/SummaryItem';

const BACKEND_URL = 'https://modul335-ae4d9-default-rtdb.firebaseio.com/';

export async function postSummary(summaryData) {
	const response = await axios.post(BACKEND_URL + 'summarys.json', summaryData);
	const id = response.data.name;
	return id;
}

export async function fetchSummarys() {
	const response = await axios.get(BACKEND_URL + 'summarys.json');

	const summarys = [];

	for (const key in response.data) {
		const summaryObj = {
			id: key,
			book: response.data[key].book,
			from: response.data[key].from,
			to: response.data[key].to,
			summary: response.data[key].summary,
			imageUri: response.data[key].imageURI,
		};
		summarys.push(summaryObj);
	}

	return summarys;
}

export function updateSummary(id, summaryData) {
	console.log(id, summaryData);
	return axios.put(BACKEND_URL + `/summarys/${id}.json`, summaryData);
}

export function deleteSummary(id) {
	console.log(id);
	return axios.delete(BACKEND_URL + `/summarys/${id}.json`);
}
