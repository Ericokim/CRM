import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_DATA,
  GET_ALL,
  DATA_ERROR,
  UPDATE_DATA,
  DELETE_DATA,
  ADD_DATA,
  CLEAR_DATA,
  CLEAR_DATAS,
} from "./types";

// Get All
export const getAll = () => async (dispatch) => {
  dispatch({ type: CLEAR_DATA });
  try {
    const res = await axios.get("/api/data");

    dispatch({
      type: GET_ALL,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: DATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get by id
export const getData = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/data/songs/${id}`);

    dispatch({
      type: GET_DATA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: DATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add
export const addData = (formData, history) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  
  dispatch({ type: CLEAR_DATA });

  try {
    const res = await axios.put("/api/data/add", formData, config);

    dispatch({
      type: ADD_DATA,
      payload: res.data,
    });

    dispatch(setAlert("Created", "success"));

    history.push("/table");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: DATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update
export const UpdateData = (id, formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      `/api/data/songs/update/${id}`,
      formData,
      config
    );

    dispatch({
      type: GET_DATA,
      payload: res.data,
    });

    dispatch(setAlert("Updated", "success"));
    history.push("/table");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: DATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete
export const deleteData = (id) => async (dispatch) => {
  dispatch({ type: CLEAR_DATAS });
  try {
    const res = await axios.delete(`/api/data/songs/${id}`);

    dispatch({
      type: DELETE_DATA,
      payload: res.data,
    });

    dispatch(setAlert("Removed", "success"));
  } catch (err) {
    dispatch({
      type: DATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
