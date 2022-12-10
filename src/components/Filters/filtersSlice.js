import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "filters",
    initialState: {
        search: "",
        status: 'All',
    },
    reducers: {
        searchFilterChange: (state, action) => {
            state.search = action.payload;
        },

        statusFilterChange: (state, action) => {
            state.status = action.payload;
        }
    }
})
