import {arr2Obj} from '../../utils'


export const types = arr2Obj([
	// fetch timetable action types
	'FETCH_TIMETABLE_REQ',
	'FETCH_TIMETABLE_SUCCESS',
	'FETCH_TIMETABLE_FAIL',

	// resolve timetable action types
	'RESOLVE_TIMETABLE_REQ',
	'RESOLVE_TIMETABLE_SUCCESS',
	'RESOLVE_TIMETABLE_FAIL',

	// clear timetable state errors
	'CLEAR_TIMETABLE_ERROR'
])

export default {
	fetchTimetable: () => ({
		type: types.FETCH_TIMETABLE_REQ
	}),
	clearTimetableError: () => ({
		type: types.CLEAR_TIMETABLE_ERROR
	}),
	resolveTimetable: () => ({
		type: types.RESOLVE_TIMETABLE_REQ
	})
}