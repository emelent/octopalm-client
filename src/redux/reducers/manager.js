
const initialState = {
	loading: false,
	error: null,
	timetable: {}
}

export default function(state=initialState, {type, payload}){
	switch (type){
		case 'ADD_EVENT':
			return {
				...state,
				timetable: {
					...state.timetable,
					events: state.timetable.events.concat(payload)
				}
			}

		case 'REMOVE_EVENT':
			return {
				...state,
				timetable: {
					...state.timetable,
					events: state.timetable.events.filter(e => e.id !== payload)
				}
			}
		case 'LOAD_TABLE':
			return  {
				...state,
				timetable: payload
			}

		case 'SYNC_TABLE_REQ':
			return {
				...state,
				loading: true
			}
		case 'SYNC_TABLE_SUCCESS':
			return {
				...state,
				loading: false,
				error: null
			}
		case 'SYNC_TABLE_FAIL':
			return {
				...state,
				loading: false,
				error: payload
			}
		case 'CLEAR_ERROR':
			return {
				...state,
				error: null
			}
	}

	return state
}