export default {
	search: async (query) => {
		const response = await fetch(new Request(`${process.env.REACT_APP_BASE_API_URL}/person/search/${query}`, {
			method: 'GET',
			mode: 'cors',
			redirect: 'follow',
			headers: new Headers({
					"Accept": "application/json",
					"Access-Control-Allow-Origin": '*',
			})
		}))
		return response.json()
	},
	fetchDetail: async (id) => {
		const response = await fetch(new Request(`${process.env.REACT_APP_BASE_API_URL}/person/detail/${id}`, {
			method: 'GET',
			mode: 'cors',
			redirect: 'follow',
			headers: new Headers({
					"Accept": "application/json",
					"Access-Control-Allow-Origin": '*',
			})
		}))
		return response.json()
	}
}
