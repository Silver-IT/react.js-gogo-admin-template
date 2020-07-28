import {
  SURVEY_LIST_GET_LIST,
  SURVEY_LIST_GET_LIST_SUCCESS,
  SURVEY_LIST_GET_LIST_ERROR,
  SURVEY_LIST_GET_LIST_WITH_FILTER,
  SURVEY_LIST_GET_LIST_WITH_ORDER,
  SURVEY_LIST_GET_LIST_SEARCH,
  SURVEY_LIST_ADD_ITEM,
  SURVEY_LIST_ADD_ITEM_SUCCESS,
  SURVEY_LIST_ADD_ITEM_ERROR,
  SURVEY_LIST_SELECTED_ITEMS_CHANGE,
} from '../actions';

const INIT_STATE = {
  allSurveyItems: null,
  surveyItems: null,
  error: '',
  filter: null,
  searchKeyword: '',
  orderColumn: null,
  loading: false,
  labels: [
    { label: 'EDUCATION', color: 'secondary' },
    { label: 'NEW FRAMEWORK', color: 'primary' },
    { label: 'PERSONAL', color: 'info' },
  ],
  orderColumns: [
    { column: 'title', label: 'Title' },
    { column: 'category', label: 'Category' },
    { column: 'status', label: 'Status' },
    { column: 'label', label: 'Label' },
  ],
  categories: ['Development', 'Workplace', 'Hardware'],
  selectedItems: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SURVEY_LIST_GET_LIST:
      return { ...state, loading: false };

    case SURVEY_LIST_GET_LIST_SUCCESS:
      return {
        ...state,
        loading: true,
        allSurveyItems: action.payload,
        surveyItems: action.payload,
      };

    case SURVEY_LIST_GET_LIST_ERROR:
      return { ...state, loading: true, error: action.payload };

    case SURVEY_LIST_GET_LIST_WITH_FILTER:
      if (action.payload.column === '' || action.payload.value === '') {
        return {
          ...state,
          loading: true,
          surveyItems: state.allSurveyItems,
          filter: null,
        };
      }
      const filteredItems = state.allSurveyItems.filter(
        (item) => item[action.payload.column] === action.payload.value
      );
      return {
        ...state,
        loading: true,
        surveyItems: filteredItems,
        filter: {
          column: action.payload.column,
          value: action.payload.value,
        },
      };

    case SURVEY_LIST_GET_LIST_WITH_ORDER:
      if (action.payload === '') {
        return {
          ...state,
          loading: true,
          surveyItems: state.surveyItems,
          orderColumn: null,
        };
      }
      const sortedItems = state.surveyItems.sort((a, b) => {
        if (a[action.payload] < b[action.payload]) return -1;
        if (a[action.payload] > b[action.payload]) return 1;
        return 0;
      });
      return {
        ...state,
        loading: true,
        surveyItems: sortedItems,
        orderColumn: state.orderColumns.find(
          (x) => x.column === action.payload
        ),
      };

    case SURVEY_LIST_GET_LIST_SEARCH:
      if (action.payload === '') {
        return { ...state, surveyItems: state.allSurveyItems };
      }
      const keyword = action.payload.toLowerCase();
      const searchItems = state.allSurveyItems.filter(
        (item) =>
          item.title.toLowerCase().indexOf(keyword) > -1 ||
          item.detail.toLowerCase().indexOf(keyword) > -1 ||
          item.status.toLowerCase().indexOf(keyword) > -1 ||
          item.category.toLowerCase().indexOf(keyword) > -1 ||
          item.label.toLowerCase().indexOf(keyword) > -1
      );
      return {
        ...state,
        loading: true,
        surveyItems: searchItems,
        searchKeyword: action.payload,
      };

    case SURVEY_LIST_ADD_ITEM:
      return { ...state, loading: false };

    case SURVEY_LIST_ADD_ITEM_SUCCESS:
      return {
        ...state,
        loading: true,
        allSurveyItems: action.payload,
        surveyItems: action.payload,
      };

    case SURVEY_LIST_ADD_ITEM_ERROR:
      return { ...state, loading: true, error: action.payload };

    case SURVEY_LIST_SELECTED_ITEMS_CHANGE:
      return { ...state, loading: true, selectedItems: action.payload };
    default:
      return { ...state };
  }
};
