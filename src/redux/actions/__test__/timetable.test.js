import actions, {types} from '../timetable'

describe('Timetable action creators return the right actions', () => {
	it('works for fetchTimetable()', () => {
		const action = actions.fetchTimetable()
		expect(action).toEqual({
			type: types.FETCH_TIMETABLE_REQ
		})
	})	

	it('works for clearTimetableError()', () => {
		const action = actions.clearTimetableError()
		expect(action).toEqual({
			type: types.CLEAR_TIMETABLE_ERROR
		})
	})	 
})
