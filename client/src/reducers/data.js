import {
  GET_DATA,
  GET_ALL,
  DATA_ERROR,
  ADD_DATA,
  UPDATE_DATA,
  DELETE_DATA,
  CLEAR_DATA,
  CLEAR_DATAS,
} from "../actions/types";

const initialState = {
  data: null,
  datas: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_DATA:
    case GET_DATA:
    case UPDATE_DATA:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case GET_ALL:
      return {
        ...state,
        datas: payload,
        loading: false,
      };
    case DATA_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        data: null,
      };
      case DELETE_DATA:
        return {
          ...state,
          datas: payload,
          loading: false,
        };
    case CLEAR_DATA:
      return {
        ...state,
        data: null,
        loading: false,
      };
      case CLEAR_DATAS:
        return {
          ...state,
          datas: null,
          loading: false,
        };

    default:
      return state;
  }
}
