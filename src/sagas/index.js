import { call, put, takeLatest } from 'redux-saga/effects'
import { postUser, loginUser } from '../services/user'
import { registerUser, login, set } from '../store/features/user'
import { increment } from '../store/features/counter'

function* registerUserSaga(action) {
  try {
    // yield put({ type: 'OPEN_SPINNER', message: e.message }) TODO close spinner
    const data = yield call(postUser, action.payload)
    yield put(set(data.user))
  } catch (e) {
    // TODO open modal with error
  } finally {
    // yield put({ type: 'CLOSE_SPINNER', message: e.message }) TODO close spinner

  }
}
function* loginUserSaga(action) {
  try {
    // yield put({ type: 'OPEN_SPINNER', message: e.message }) TODO close spinner
    const data = yield call(loginUser, action.payload)
    yield put(set(data.user))
    yield put(increment()) // it is only to test the effect of an action from the saga. 
  } catch (e) {
    // TODO open modal with error
  } finally {
    // yield put({ type: 'CLOSE_SPINNER', message: e.message }) TODO close spinner

  }
}

function* mySaga() {
  yield takeLatest(registerUser.type, registerUserSaga)
  yield takeLatest(login.type, loginUserSaga)
}

export default mySaga