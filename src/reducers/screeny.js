import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    isLoading: false,
    screenyContainerList: [],
    screenyList: [],
}

export const screeny = createSlice({
    name: "screen",
    initialState: initialState,
    reducers: {
      setIsLoading: (state,action) => {
        state.isLoading = action.payload
      },
      setScreenyContainerList: (state,action) => {
        state.screenyContainerList = action.payload
      },
      setScreenyList: (state,action) => {
        state.screenyList = action.payload
      },
  }});
  
  // Action creators are generated for each case reducer function
  export const { setIsLoading, setScreenyContainerList, setScreenyList } = screeny.actions;
  
  export default screeny.reducer;