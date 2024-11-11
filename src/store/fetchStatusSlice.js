import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,  // PENDING:false AND DONE:true
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      console.log("markFetchDone");
      state.fetchDone=true;
    },
    markFetchingStart: (state) => {
       state.currentlyFetching=true;
    },
    markFetchingFinished: (state) => {
       state.currentlyFetching=false;
    }
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
