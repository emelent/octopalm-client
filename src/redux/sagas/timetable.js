import {take, put, call} from 'redux-saga/effects'
import {types} from '../actions/timetable'
import {Action} from '../../utils'
import { fetchResolvedTimetable } from '../../api/dummy'

export function* fetchTimetableFlow(){
	while (true){
		yield take(types.FETCH_TIMETABLE_REQ)
		try {
			const timetable = yield call(fetchResolvedTimetable)
			yield put(Action(
				types.FETCH_TIMETABLE_SUCCESS,
				timetable
			))
		} catch (err) {
			yield put(Action(
				types.FETCH_TIMETABLE_FAIL,
				err
			))
		}
	}
}