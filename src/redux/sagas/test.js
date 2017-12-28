import {put, take, takeEvery} from 'redux-saga/effects'
import {cloneableGenerator} from 'redux-saga/utils'
import {dummy} from './index'
import {Action} from '../../utils'


const CHOOSE_COLOR = 'CHOOSE_COLOR'
const CHANGE_UI = 'CHANGE_UI'

const chooseColor = (color) => ({
  type: CHOOSE_COLOR,
  payload: {
    color,
  },
})

const changeUI = (color) => ({
  type: CHANGE_UI,
  payload: {
    color,
  },
})


function* changeColorSaga() {
  const action = yield take(CHOOSE_COLOR)
  yield put(changeUI(action.payload.color))
}

it('change color saga', () => {
  const gen = changeColorSaga()
  const gen2 = dummy()
 
  expect(gen2.next().value).toEqual(
	  take('WHAT')
  )
 
  expect(gen2.next().value).toEqual(
	  put('UP')
  )
//   'it should wait for a user to choose a color'
  expect(gen.next().value).toEqual(take(CHOOSE_COLOR))

  const color = 'red'

//   'it should dispatch an action to change the ui'
  expect(gen.next(chooseColor(color)).value)
  	.toEqual(put(changeUI(color)))


//   'it should be done'
  expect(gen.next().done).toBe(true)
});