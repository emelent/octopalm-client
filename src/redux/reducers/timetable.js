import {types} from '../actions/timetable'


export const initialState = {
	loading: false,
	error: null,
	timetable: {}
}

export default function(state=initialState, {type, payload}) {
	switch (type){
		case types.FETCH_TIMETABLE_REQ:
			return {
				...state,
				loading: true
			}
		case types.FETCH_TIMETABLE_SUCCESS:
			return {
				...state,
				loading: false,
				timetable: payload
			}
		case types.FETCH_TIMETABLE_FAIL:
			return {
				...state,
				loading: false,
				error: payload
			}

		case types.CLEAR_TIMETABLE_ERROR:
			return {
				...state,
				error: null
			}


		//LE ASYNC
		case types.RESOLVE_TIMETABLE_REQ:
			return {
				...state,
				loading: true
			}
		case types.RESOLVE_TIMETABLE_SUCCESS:
			return {
				...state,
				loading: false,
				timetable: payload
			}
		case types.RESOLVE_TIMETABLE_FAIL:
			return {
				...state,
				loading: false,
				error:  payload
			}
	}

	return state
}