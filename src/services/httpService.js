import axios from 'axios';

export const httpService = async (url,method,data) => {
	const config = {
		baseURL: 'https://todo-server-guzman.herokuapp.com/',
		url,
		headers: { 
    	//'Content-Type': 'application/x-www-form-urlencoded'
  	},
	}

	if(method) {config.method = method};
	if(data) {config.data = data};
	
	try {
		const response = await axios(config);
		return response.data;
	} catch (error) {
		console.log('Request error: ',error);
	}
}

export default httpService;