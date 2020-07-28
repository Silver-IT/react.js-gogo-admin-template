import {
  SURVEY_GET_DETAILS,
  SURVEY_GET_DETAILS_SUCCESS,
  SURVEY_GET_DETAILS_ERROR,
  SURVEY_DELETE_QUESTION,
  SURVEY_SAVE,
} from '../actions';

export const getSurveyDetail = () => ({
  type: SURVEY_GET_DETAILS,
});

export const getSurveyDetailSuccess = (items) => ({
  type: SURVEY_GET_DETAILS_SUCCESS,
  payload: items,
});

export const getSurveyDetailError = (error) => ({
  type: SURVEY_GET_DETAILS_ERROR,
  payload: error,
});

export const deleteSurveyQuestion = (questionId, survey) => ({
  type: SURVEY_DELETE_QUESTION,
  payload: { questionId, survey },
});

export const saveSurvey = (survey) => ({
  type: SURVEY_SAVE,
  payload: survey,
});
