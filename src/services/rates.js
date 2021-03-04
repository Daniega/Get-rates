import axios from 'axios';
import { saveToLocalStorage, getFromLocalStorage } from './storage';

const STORAGE_KEY = 'ratesData';
const API_URL = 'https://www.live-rates.com/rates';
export const TIME_TO_WAIT = 1000 * 60 * 20; // =20 minutes

const shouldUpdateDataFromAPI = (data) => {
	//if data exists in LocalStorage, check if 20 minutes passed since last update, if yes - return true, if not - return false
	//if data doesn't exist in LocalStorage - return true
	return !(data && data.lastTimeModified + TIME_TO_WAIT > Date.now());
};

export const getData = async () => {
	const dataFromStorage = getFromLocalStorage(STORAGE_KEY); //get data from storage if exists
	//if we should fetch data from API?
	if (shouldUpdateDataFromAPI(dataFromStorage)) {
		return await axios //fetch data from API
			.get(API_URL)
			.then((res) => {
				const data = res.data;
				if (data.length > 1) {
					//if we receive actual data and not error message
					saveToLocalStorage(STORAGE_KEY, data); //save the data to localStorage
				}
				return data;
			})
			.catch((error) => console.log(error));
	}
	return dataFromStorage.data; //if we didn't fetch new data from API, return the data from LocalStorage
};
