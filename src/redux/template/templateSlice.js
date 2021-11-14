import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axiosInstance from '../../helpers/axiosConfig'


const initialState = {
    template: {}
}
export const fetchTemplate = createAsyncThunk('template/fetchTemplate',
    async (specified) => {
        const res = await axiosInstance.get(`/templates/${specified}`)
            .then(response => response.data)
        return res
    })
const templateSlice = createSlice({
    name: 'template',
    initialState,
    reducers: {
        setTemplate(state, {payload}) {
            state.template = payload
        }
    }, extraReducers: builder => {
        builder.addCase(fetchTemplate.fulfilled, (state, {payload}) => {
            state.template = payload
        })
    }
})

export default templateSlice.reducer
export const {...templateActions} = templateSlice.actions