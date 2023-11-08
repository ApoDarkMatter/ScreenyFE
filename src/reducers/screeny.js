import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    isLoading: false,
}

export const screeny = createSlice({
    name: "screeny",
    initialState: initialState,
    reducers: {
      setIsLoading: (state,action) => {
        state.isLoading = action.payload
      },
  }});
  
  // Action creators are generated for each case reducer function
  export const { setIsLoading } = screeny.actions;
  
  export default screeny.reducer;