import actions, {types} from '../timetable'

describe('Action creators return the right actions', () => {
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

	it('works for resoveTimetable()', () => {
		const action = actions.resolveTimetable()
		expect(action).toEqual({
			type: types.RESOLVE_TIMETABLE_REQ
		})
	})
})
