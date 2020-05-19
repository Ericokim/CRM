import {
  GET_DATA,
  GET_DATAS,
  DATA_ERROR,
  ADD_DATA,
  UPDATE_DATA,
  CLEAR_DATA,
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
    case GET_DATA:
    case UPDATE_DATA:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case GET_DATAS:
      return {
        ...state,
        datas: payload,
        loading: false,
      };
      case ADD_DATA:
        return {
          ...state,
          datas: [payload, ...state.datas],
          loading: false,
        };
    case DATA_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        data: null,
      };
    case CLEAR_DATA:
      return {
        ...state,
        data: null,
        loading: false,
      };

    default:
      return state;
  }
}
