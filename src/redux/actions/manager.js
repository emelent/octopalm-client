import {arr2Obj} from '../../utils'

export const types = arr2Obj([
	// marking events for insertion
	'ADD_EVENT_TO_ADD_LIST',
	'REMOVE_EVENT_FROM_ADD_LIST',

	// marking events for removal
	'ADD_EVENT_TO_REMOVE_LIST',
	'REMOVE_EVENT_FROM_REMOVE_LIST',

	// selecting events
	'SELECT_EVENT',
	'UNSELECT_EVENT',
	'CLEAR_SELECTED_EVENTS',

	// save timetable with server
	'SAVE_TABLE_REQ',
	'SAVE_TABLE_SUCCESS',
	'SAVE_TABLE_FAIL',

	// highlighting a module
	'HIGHLIGHT_MODULE',
	'UNHIGHLIGHT_MODULE',

	// others, loner actions, with no related states
	'LOAD_TABLE',
	'COMMIT_ACTIONS',
	'CLEAR_MANAGER_ERROR'
])


export default {
	addEventToAddList: event => ({
		type: types.ADD_EVENT_TO_ADD_LIST,
		payload: event
	}),
	removeEventFromAddList: event => ({
		type: types.REMOVE_EVENT_FROM_ADD_LIST,
		payload: event
	}),


	addEventToRemoveList: event => ({
		type: types.ADD_EVENT_TO_REMOVE_LIST,
		payload: event
	}),
	removeEventFromRemoveList: event => ({
		type: types.REMOVE_EVENT_FROM_REMOVE_LIST,
		payload: event
	}),


	selectEvent: event => ({
		type: types.SELECT_EVENT,
		payload: event
	}),
	unselectEvent: event => ({
		type: types.UNSELECT_EVENT,
		payload: event
	}),
	clearSelectedEvents: () => ({
		type: types.CLEAR_SELECTED_EVENTS
	}),


	highlightModule: module => ({
		type: types.HIGHLIGHT_MODULE,
		payload: module
	}),
	unhighlightModule: () => ({
		type: types.UNHIGHLIGHT_MODULE
	}),


	saveTimetable: () => ({
		type: types.SAVE_TIMETABLE_REQ
	}),
	loadTimetable: () => ({
		type: types.LOAD_TIMETABLE
	}),
	commitActions: () => ({
		type: types.COMMIT_ACTIONS
	}),
	clearManagerError: () => ({
		type: types.CLEAR_MANAGER_ERROR
	})

}