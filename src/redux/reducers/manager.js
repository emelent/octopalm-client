import {types} from '../actions/manager'


export const initialState = {
	loading: false,
	error: null,
	highlightModule: null,
	timetable: {},
	selectedEvents: [],
	eventsToAdd: [],
	eventsToRemove: []
}

function updateList(list, toAdd, toRemove) {
	let newList = list.concat(toAdd)
	toRemove.forEach(item => newList = newList.filter(x => x._id !== item._id))
	return newList
}

const idNotEqual = payload => item => item._id !== payload._id

export default function(state=initialState, {type, payload}){
	switch (type){
		case types.ADD_EVENT_TO_ADD_LIST:
			return {
				...state,
				eventsToAdd: state.eventsToAdd.concat(payload)
			}
		case types.REMOVE_EVENT_FROM_ADD_LIST:
			return {
				...state,
				eventsToAdd: state.eventsToAdd.filter(idNotEqual(payload))
			}
		


		case types.ADD_EVENT_TO_REMOVE_LIST:
			return {
				...state,
				eventsToRemove: state.eventsToRemove.concat(payload)
			}
		case types.REMOVE_EVENT_FROM_REMOVE_LIST:
			return {
				...state,
				eventsToRemove: state.eventsToRemove.filter(idNotEqual(payload))
			}
		


		case types.COMMIT_ACTIONS:
			return {
				...state,
				timetable: {
					...state.timetable,
					events: updateList(
						state.timetable.events,
						state.eventsToAdd,
						state.eventsToRemove
					)
				},
				eventsToAdd:[],
				eventsToRemove: []
			}



		case types.SELECT_EVENT:
			return {
				...state,
				selectedEvents: state.selectedEvents.concat(payload)
			}
		case types.UNSELECT_EVENT:
			return {
				...state,
				selectedEvents: state.selectedEvents.filter(idNotEqual(payload))
			}
		case types.CLEAR_SELECTED_EVENTS:
			return {
				...state,
				selectedEvents: []
			}
		


		case types.HIGHLIGHT_MODULE:
			return {
				...state,
				highlightModule: payload
			}
		case types.CLEAR_HIGHLIGHT_MODULE:
			return {
				...state,
				highlightModule: null
			}



		case types.LOAD_TABLE:
			return  {
				...state,
				timetable: payload
			}



		case types.SAVE_TABLE_REQ:
			return {
				...state,
				loading: true
			}
		case types.SAVE_TABLE_SUCCESS:
			return {
				...state,
				loading: false,
				error: null
			}
		case types.SAVE_TABLE_FAIL:
			return {
				...state,
				loading: false,
				error: payload
			}



		case types.CLEAR_MANAGER_ERROR:
			return {
				...state,
				error: null
			}
	}

	return state
}