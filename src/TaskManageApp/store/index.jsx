// import { createStore } from "redux";

import { configureStore } from '@reduxjs/toolkit'
import taskManageReducer from './taskManageSlice'

// console.log(taskManageSlice)
// console.log(lists)

export const store = configureStore({
    reducer: {
        taskManage: taskManageReducer,
    },
})

// const initialState = {
//     login: false,
//     taskList: [
//         {
//         id: 1,
//         taskName: "メールチェック",
//         detail: `A社、B社`,
//         created: "2024-12-12",
//     },
//         {
//         id: 2,
//         taskName: "資料作成",
//         detail: "A社、B社",
//         created: "2024-12-11",
//     },
//         {
//         id: 3,
//         taskName: "個別対応",
//         detail: "A社、B社",
//         created: "2024-12-12",
//     },
// ]
// };

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'LOGIN':
//             return {
//                 login: true,
//             };
//         case 'LOGOUT':
//             return {
//                 login: false,
//             };
//         default:
//             return state;
//     }
// };

// const store = createStore(reducer);

// export default store;