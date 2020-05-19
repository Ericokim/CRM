import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_DATA,
  GET_DATAS,
  DATA_ERROR,
  UPDATE_DATA,
  ADD_DATA,
  CLEAR_DATA,
} from "./types";

// Get Song
export const getAllSongs = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/data");

    dispatch({
      type: GET_DATAS,
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
export const addSong = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/data/add", formData, config);

    dispatch({
      type: ADD_DATA,
      payload: res.data,
    });

    dispatch(setAlert("Song Created", "success"));
  } catch (err) {
    dispatch({
      type: DATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create Song
export const UpdateSong = () => async (
  id,
  formData,
  history,
  edit = false
) => async (dispatch) => {
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
      type: UPDATE_DATA,
      payload: res.data,
    });

    dispatch(setAlert(edit ? "Song Updated" : null, "success"));

    if (!edit) {
      history.push("/dashboard");
    }
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
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    try {
      const res = await axios.delete(`/api/data/songs/${id}`);

      dispatch({
        type: UPDATE_DATA,
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
