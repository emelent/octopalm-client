//@flow
import {delay} from 'redux-saga'
import {all, call, takeEvery} from 'redux-saga/effects'

function* mookWatcher(){
	yield takeEvery('MOOK', function*(){
		yield call(delay, 1000)
		const date = new Date()
		const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
		console.log(time, 'You just Mooked baby!')
	})
}
export default function* rootSaga():Generator<any, any, any>{
	yield all([
		mookWatcher()
	])
}