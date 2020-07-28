import {
  SURVEY_GET_DETAILS,
  SURVEY_GET_DETAILS_SUCCESS,
  SURVEY_GET_DETAILS_ERROR,
  SURVEY_DELETE_QUESTION,
  SURVEY_SAVE,
} from '../actions';

const INIT_STATE = {
  survey: null,
  loading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SURVEY_GET_DETAILS:
      return { ...state, loading: false };

    case SURVEY_GET_DETAILS_SUCCESS:
      return { ...state, loading: true, survey: action.payload };

    case SURVEY_GET_DETAILS_ERROR:
      return { ...state, loading: true, error: action.payload };

    case SURVEY_DELETE_QUESTION:
      return { ...state, loading: false };

    case SURVEY_SAVE:
      return { ...state, loading: true, survey: action.payload };

    default:
      return { ...state };
  }
};
