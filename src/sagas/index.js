import { call, put, takeLatest } from 'redux-saga/effects'
import {postUser} from '../services/user'
import { registerUser } from '../store/features/user'

function* registerUserSaga(action) {
  try {
    const user = yield call(postUser, action.payload.userId)
    yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

function* mySaga() {
  yield takeLatest(registerUser.type, registerUserSaga)
}

export default mySaga