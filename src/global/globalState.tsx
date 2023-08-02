import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    user: "" || null
}

const globalState = createSlice({
    name: "Author",
    initialState,
    reducers:{
        signInuser: (({state}:any, {payload}: any)=>{
            state.user = payload

        }),
        logOut: ((state:any)=>{
            state.user = null
        })

    }
})

export const {signInuser,logOut } = globalState.actions

export default globalState.reducer