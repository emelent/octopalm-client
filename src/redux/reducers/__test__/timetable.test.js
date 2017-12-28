import {types} from '../../actions/timetable'
import reducer, {initialState} from '../timetable'
import {Action} from '../../../utils'

describe('Timetable Reducer', () => {
	const error = 'ERROR'
	it('can send fetch timetable request', () => {
		const action = Action(types.FETCH_TIMETABLE_REQ)
		expect(reducer(initialState, action)).toEqual({
			...initialState,
			loading: true
		})
	})	
	it('can handle a successful fetch timetable request', () => {
		const timetable = {_id: 'yes'}
		const action = Action(types.FETCH_TIMETABLE_SUCCESS, timetable)
		const state = {
			...initialState,
			loading: true
		}
		expect(reducer(state, action)).toEqual({
			...initialState,
			timetable
		})
	})	
	it('can handle an unsuccessful timetable request', () => {
		const action = Action(types.FETCH_TIMETABLE_FAIL, error)
		const state = {
			...initialState,
			loading: true
		}
		expect(reducer(state, action)).toEqual({
			...initialState,
			error
		})
	})

	
	it('can clear a timetable error', () => {
		const action = Action(types.CLEAR_TIMETABLE_ERROR)
		const state = {
			...initialState,
			error: 'ERROR'
		}
		expect(reducer(state, action)).toEqual(initialState)
	})
})