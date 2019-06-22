export const GET_IMAGES = "GET_IMAGES"
export const START_LOAD = "START_LOAD"
export const END_LOAD = "END_LOAD"
export const ERROR_LOAD = "ERROR_LOAD"


const token = "cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0"
const baseUrl = "https://api.unsplash.com"

export function startLoad() {
	return {
		type: START_LOAD
	}
}

export function endLoad() {
	return {
		type: END_LOAD
	}
}
export  function getImages() {
	return async function(dispatch) {
		dispatch({
			type: START_LOAD
		})
		const getList = await fetch(`${baseUrl}/photos/?client_id=${token}`)
			.then(list => list.json())
			console.log(getList, 'getList')
		const promiseList = getList.map(item => {
			const url = `${baseUrl}/users/${item.user.username}/photos/?client_id=${token}`
			// console.info("_url___", url )
		return fetch(url)
	})
		const photos = await Promise.all(promiseList)
			.then(item => item.map(user => user.json()))
		const promisePhoto = photos.map(item => {
			return  item
		})
		const getPhoto = await Promise.all(promisePhoto)
		console.info("__getPhoto__", getPhoto)

		const list = getList.map((user, i) => {
			user.photos = getPhoto[i]
			return user
		})
		console.info("__list__", list)

		dispatch({
			type: GET_IMAGES,
			payload: list
		})
	}
}



const initialState = {
	loading: false,
	users: []

}
export default (state = initialState, {type, payload}) => {
	switch (type) {
		case START_LOAD:
			return {...state, loading: true};
		case END_LOAD:
			return {...state, loading: false};
		case GET_IMAGES:
			return {...state, loading: false, users: payload}
	}
	return state
}

