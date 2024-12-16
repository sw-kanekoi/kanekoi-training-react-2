import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todos', //スライスの名前
    initialState: { //初期状態
        lists: [
            {
                name: 'ブログを確認',
                complete: true,
            },
            {
                name: 'メールの返信',
                complete: false,
            },
        ],
    },
    reducers: {
        doneList: (state, action) => {
            const {name} = action.payload;
            const item = state.lists.find((item) => item.name === name);
            if(item) {
                item.complete = true;
            }
        },
        addList: (state, action) => {
            const {name, complete} = action.payload;
            if(!name) return;
            
            state.lists = [
                ...state.lists,
                { name, complete: complete || false }
            ]
        },
        deleteList: (state, action) => {
            const {name} = action.payload;
            if(!name) return;
            state.lists = state.lists.filter((list) => list.name !== name)
        },
    },
});

export const { doneList, addList, deleteList } = todoSlice.actions;

export default todoSlice.reducer;