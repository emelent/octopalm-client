import reducer, {initialState} from '../manager'
import {types} from '../../actions/manager'
import {Action} from '../../../utils'

describe('Manager reducer', () => {
	const event = {_id: '0', name: 'fake'}

	it('Can add an event to addList', () => {
		const action = Action(types.ADD_EVENT_TO_ADD_LIST, event)
		expect(reducer(initialState, action)).toEqual({
			...initialState,
			eventsToAdd: initialState.eventsToAdd.concat(event)
		})
	})
	it('Can remove an event to addList', () => {
		const action = Action(types.REMOVE_EVENT_FROM_ADD_LIST, event)
		const state = {
			...initialState,
			eventsToAdd: [event]
		}
		expect(reducer(state, action)).toEqual(initialState)
	})


	it('Can add an event to removeList', () => {
		const action = Action(types.ADD_EVENT_TO_REMOVE_LIST, event)
		expect(reducer(initialState, action)).toEqual({
			...initialState,
			eventsToRemove: initialState.eventsToRemove.concat(event)
		})
	})
	it('Can remove an event to removeList', () => {
		const action = Action(types.REMOVE_EVENT_FROM_REMOVE_LIST, event)
		const state = {
			...initialState,
			eventsToRemove: [event]
		}
		expect(reducer(state, action)).toEqual(initialState)
	})


	it('Can select an event', () => {
		const action = Action(types.SELECT_EVENT, event)
		expect(reducer(initialState, action)).toEqual({
			...initialState,
			selectedEvents: initialState.selectedEvents.concat(event)
		})
	})
	it('Can unselect an event', () => {
		const action = Action(types.UNSELECT_EVENT, event)
		const state = {
			...initialState,
			selectedEvents: initialState.selectedEvents.concat(event)
		}
		expect(reducer(state, action)).toEqual(initialState)
	})
	it('Can clear selected events', () => {
		const action = Action(types.CLEAR_SELECTED_EVENTS, event)
		const state = {
			...initialState,
			selectedEvents: initialState.selectedEvents.concat(event)
		}
		expect(reducer(state, action)).toEqual(initialState)
	})


	it('Can handle a request to save the timetable', () => {
		const action = Action(types.SAVE_TABLE_REQ)
		expect(reducer(initialState, action)).toEqual({
			...initialState,
			loading: true
		})
	})
	it('Can handle a successful request to save the timetable', () => {
		const action = Action(types.SAVE_TABLE_SUCCESS)
		const state = {
			...initialState,
			loading: true
		}
		expect(reducer(state, action)).toEqual(initialState)
	})
	it('Can handle an unsuccessful request to save the timetable', () => {
		const errorMsg = 'FAKE ERROR'
		const action = Action(types.SAVE_TABLE_FAIL, errorMsg)
		const state = {
			...initialState,
			loading: true
		}
		expect(reducer(state, action)).toEqual({
			...initialState,
			error: errorMsg
		})
	})

	it('Can load a timetable', () => {
		const table = {name: 'table'}
		const action = Action(types.LOAD_TABLE, table)
		expect(reducer(initialState, action)).toEqual({
			...initialState,
			timetable: table
		})
	})
	it('Can clear an error messages', () => {
		const action = Action(types.CLEAR_MANAGER_ERROR)
		const state = {
			...initialState,
			error: 'THERE IS AN ERROR'
		}
		expect(reducer(state, action)).toEqual(initialState)
	})
	describe('Can commit actions', () => {
		const action = Action(types.COMMIT_ACTIONS)
		const eventList = [{_id: 'event1'}, {_id: 'event2'}]

		it('commits event additions', () => {
			const state = {
				...initialState,
				timetable: {
					events: [event]
				},
				eventsToAdd: eventList
			}
			expect(reducer(state, action)).toEqual({
				...initialState,
				timetable: {
					events: state.timetable.events.concat(eventList)
				}
			})
		})

		it('commits event removals', () => {
			const state = {
				...initialState,
				timetable: {
					events: eventList.concat(event)
				},
				eventsToRemove: eventList
			}
			expect(reducer(state, action)).toEqual({
				...initialState,
				timetable: {
					events: [event]
				}
			})
		})
	})

})