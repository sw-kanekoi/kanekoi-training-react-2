import { configureStore } from '@reduxjs/toolkit'
import taskManageReducer from './taskManageSlice'

export const store = configureStore({
    reducer: {
        taskManage: taskManageReducer,
    },
})