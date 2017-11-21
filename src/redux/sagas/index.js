//@flow
import {delay} from 'redux-saga'
import {call, takeEvery, all} from 'redux-saga/effects'

function* mookWatcher():Generator<any, any, any>{
	yield takeEvery('MOOK', function*(){
		yield call(delay, 500)
		console.log(`What a MOOK!!!`)
	})
}

export default function* rootSaga():Generator<any, any, any>{
	yield all([
		mookWatcher()
	])
}