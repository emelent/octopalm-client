import {take, put, call} from 'redux-saga/effects'
import {cloneableGenerator} from 'redux-saga/utils'
import {fetchTimetableFlow} from '../timetable'
import {types} from '../../actions/timetable'
import {Action} from '../../../utils'
import {fetchResolvedTimetable} from '../../../api/dummy'


it('timetable fetch watcher', async() => {
	const gen = cloneableGenerator(fetchTimetableFlow)()
	expect(gen.next().value).toEqual(
		take(types.FETCH_TIMETABLE_REQ)
	)

	expect(gen.next().value).toEqual(
		call(fetchResolvedTimetable)
	)

	const clone = gen.clone() 
	expect(gen.next(true).value).toEqual(
		put(Action(types.FETCH_TIMETABLE_SUCCESS, true))
	)
	const error = 'ERROR'
	expect(clone.throw(error).value).toEqual(
		put(Action(types.FETCH_TIMETABLE_FAIL, error))
	)
})