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

// Get All Songs
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

// Get Song by id
export const getSong = (id) => async (dispatch) => {
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

// Add song
export const addSong = (formData, history) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.put("/api/data/add", formData, config);

    dispatch({
      type: ADD_DATA,
      payload: res.data,
    });

    dispatch(setAlert("Song Created", "success"));

    history.push("/dashboard");
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

// Update Song
export const UpdateSong = (id, formData, history) => async (dispatch) => {
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

    dispatch(setAlert("Song Updated", "success"));
    history.push("/dashboard");
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

// Delete Song
export const deleteSong = (id) => async (dispatch) => {
  if (window.confirm("Are you sure you wish to delete this item? ")) {
    dispatch({ type: CLEAR_DATAS });
    try {
      const res = await axios.delete(`/api/data/songs/${id}`);

      dispatch({
        type: DELETE_DATA,
        payload: res.data,
      });

      dispatch(setAlert("Song Removed", "success"));
    } catch (err) {
      dispatch({
        type: DATA_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
