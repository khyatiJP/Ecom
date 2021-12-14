import { createSlice } from '@reduxjs/toolkit'

export const initialState={
    loading :false,
    getData:null,
    resetData:null
}

const slice = createSlice({
name:"landing",
initialState,
reducers :
{
    getData(state,action){
        state.loading=true,
        state.getData=action.payload
    },
    resetData(state){
        state.loading=false,
        state.getData=null,
        resetData=null
    }
},
extraReducers: {}
})

export const {name,action,reducers} = slice;