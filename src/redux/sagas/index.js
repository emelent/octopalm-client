//@flow
import {delay} from 'redux-saga'
import {all, call, takeEvery, put, take} from 'redux-saga/effects'
import {fetchTimetableFlow} from './timetable'

function* mookWatcher(){
	yield takeEvery('MOOK', function*(){
		yield call(delay, 1000)
		const date = new Date()
		const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
		console.log(time, 'You just Mooked baby!')
	})
}

export function* dummy():Generator<any, any, any>{
	while (true){
		yield take('WHAT')
		yield put('UP')
	}
}

export default function* rootSaga():Generator<any, any, any>{
	yield all([
		mookWatcher(),
		fetchTimetableFlow()
	])
}