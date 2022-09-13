import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    data: [],
}

const studentSlice = createSlice({
    name: "studentList",
    initialState,
    reducers: {
        addStudent: (state, action) => {

        },
        deleteStudent: (state, action) => {

        },
        deleteAllStudent: (state, action) => {

        },
        detailStudent: (state, action) => {

        },
        createStudent: (state, action) => {

        },
        searchStudent: (state, action) => {

        },
        updateStudent: (state, action) => {

        }
    }
})



export default studentSlice