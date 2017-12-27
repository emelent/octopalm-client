import {take, put, call} from 'redux-saga/effects'
import {cloneableGenerator} from 'redux-saga/utils'
import {fetchTimetableWatcher} from '../timetable'
import {types} from '../../actions/timetable'
import {Action} from '../../../utils'


it('timetable fetch watcher', async() => {
	// const data = {}
	// data.gen = cloneableGenerator(doStuffThenChangeColor)()

	const goodProm = () => new Promise(res => setTimeout(res, 2000))
	// const badProm = () => Promise.reject(false)
	const goodGen = fetchTimetableWatcher(goodProm)
	// const badGen = fetchTimetableWatcher(badProm)

	expect(goodGen.next().value).toEqual(
		take(types.FETCH_TIMETABLE_REQ)
	)

	expect(goodGen.next().value).toEqual(
		call(goodProm)
	)

	// Learn how to test call 
	// expect(goodGen.next().value).toEqual(
	// 	put(Action(types.FETCH_TIMETABLE_SUCCESS, true))
	// )
	
})