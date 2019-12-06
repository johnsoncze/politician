export default {
	search: async (query) => {
		const response = await fetch(new Request(`https://localhost:5001/person/search/${query}`, {
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
		const response = await fetch(new Request(`https://localhost:5001/person/detail/${id}`, {
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
