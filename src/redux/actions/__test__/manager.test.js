import actions, {types} from '../manager'


describe('Manager action creators return the right actions', () => {
	const event = {_id: '0', event: 'dummy'}

	it('works for addEventToAddList()', () => {
		const action = actions.addEventToAddList(event)
		expect(action).toEqual({
			type: types.ADD_EVENT_TO_ADD_LIST,
			payload: event
		})
	})	
	it('works for removeEventFromAddList()', () => {
		const action = actions.removeEventFromAddList(event)
		expect(action).toEqual({
			type: types.REMOVE_EVENT_FROM_ADD_LIST,
			payload: event
		})
	})



	it('works for addEventToRemoveList()', () => {
		const action = actions.addEventToRemoveList(event)
		expect(action).toEqual({
			type: types.ADD_EVENT_TO_REMOVE_LIST,
			payload: event
		})
	})	
	it('works for removeEventFromRemoveList()', () => {
		const action = actions.removeEventFromRemoveList(event)
		expect(action).toEqual({
			type: types.REMOVE_EVENT_FROM_REMOVE_LIST,
			payload: event
		})
	})



	it('works for selectEvent()', () => {
		const action = actions.selectEvent(event)
		expect(action).toEqual({
			type: types.SELECT_EVENT,
			payload: event
		})
	})
	it('works for unselectEvent()', () => {
		const action = actions.unselectEvent(event)
		expect(action).toEqual({
			type: types.UNSELECT_EVENT,
			payload: event
		})
	})
	it('works for clearSelectedEvents()', () => {
		const action = actions.clearSelectedEvents()
		expect(action).toEqual({
			type: types.CLEAR_SELECTED_EVENTS
		})
	})



	it('works for highlightModule()', () => {
		const module = {name: 'fake'}
		const action = actions.highlightModule(module)
		expect(action).toEqual({
			type: types.HIGHLIGHT_MODULE,
			payload: module
		})
	})
	it('works for unhighlightModule()', () => {
		const action = actions.unhighlightModule()
		expect(action).toEqual({
			type: types.UNHIGHLIGHT_MODULE
		})
	})



	it('works for saveTimetable()', () => {
		const action = actions.saveTimetable()
		expect(action).toEqual({
			type: types.SAVE_TIMETABLE_REQ
		})
	})
	it('works for loadTimetable()', () => {
		const timetable = {_id: 'table'}
		const action = actions.loadTimetable(timetable)
		expect(action).toEqual({
			type: types.LOAD_TIMETABLE,
			payload: timetable
		})
	})
	it('works for commitActions()', () => {
		const action = actions.commitActions()
		expect(action).toEqual({
			type: types.COMMIT_ACTIONS
		})
	})
	it('works for clearManagerError()', () => {
		const action = actions.clearManagerError()
		expect(action).toEqual({
			type: types.CLEAR_MANAGER_ERROR
		})
	})
})
