import { call, put, takeEvery } from 'redux-saga/effects';
import { queryActionTypes } from '../../Definitions/actionTypes';
import { ICourseNumbers } from '../../Definitions/Interfaces/CourseInterfaces';
import { QueryBuilderAction } from '../../Definitions/Types/ActionTypes/CommonActionTypes';
import { getCourseNumbers } from '../../Utils/getCourseNumberAPI';

export function* getCourseNumbersAndSetCourseCode(action: QueryBuilderAction) {
    const code : string = action.courseCode ? action.courseCode : '';
    const courses: ICourseNumbers = yield call(getCourseNumbers, code);

    // TODO: rename action type - its tech a setter
    yield put({ type: queryActionTypes.GET_COURSE_NUMBERS, courseNumbers: courses})
    yield put({ type: queryActionTypes.SET_SELECTED_COURSE_CODE, courseCode: code });
};

export function* watchSelectedCourseCode() {
    yield takeEvery(queryActionTypes.SET_SELECTED_COURSE_CODE_SAGA, getCourseNumbersAndSetCourseCode)
};
