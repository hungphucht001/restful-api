import { createSlice } from "@reduxjs/toolkit"

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
        detailStudent: (state, action) => {

        },
        createStudent: (state, action) => {

        },
        searchStudent: (state, action) => {

        }
    }
})



export default studentSlice