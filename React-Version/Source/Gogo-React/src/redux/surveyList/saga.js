import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { getDateWithFormat } from '../../helpers/Utils';

import { SURVEY_LIST_GET_LIST, SURVEY_LIST_ADD_ITEM } from '../actions';

import {
  getSurveyListSuccess,
  getSurveyListError,
  addSurveyItemSuccess,
  addSurveyItemError,
} from './actions';

import surveyListData from '../../data/survey.list.json';

const getSurveyListRequest = async () => {
  return await new Promise((success, fail) => {
    setTimeout(() => {
      success(surveyListData.data);
    }, 1000);
  })
    .then((response) => response)
    .catch((error) => error);
};

function* getSurveyListItems() {
  try {
    const response = yield call(getSurveyListRequest);
    yield put(getSurveyListSuccess(response));
  } catch (error) {
    yield put(getSurveyListError(error));
  }
}

const addSurveyItemRequest = async (item) => {
  const items = surveyListData.data;
  item.id = items.length + 1;
  item.createDate = getDateWithFormat();
  items.splice(0, 0, item);
  return await new Promise((success, fail) => {
    setTimeout(() => {
      success(items);
    }, 1000);
  })
    .then((response) => response)
    .catch((error) => error);
};

function* addSurveyItem({ payload }) {
  try {
    const response = yield call(addSurveyItemRequest, payload);
    yield put(addSurveyItemSuccess(response));
  } catch (error) {
    yield put(addSurveyItemError(error));
  }
}

export function* watchGetList() {
  yield takeEvery(SURVEY_LIST_GET_LIST, getSurveyListItems);
}

export function* wathcAddItem() {
  yield takeEvery(SURVEY_LIST_ADD_ITEM, addSurveyItem);
}

export default function* rootSaga() {
  yield all([fork(watchGetList), fork(wathcAddItem)]);
}
