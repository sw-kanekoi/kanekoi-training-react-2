import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todos', //スライスの名前
    initialState: { //初期状態
        lists: [
            {
                id: 1,
                name: 'ブログを確認',
                complete: true,
            },
            {
                id: 2,
                name: 'メールの返信',
                complete: false,
            },
        ],
        maxId: 2,
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
            
            state.maxId = state.maxId + 1;
            state.lists = [
                ...state.lists,
                { id: state.maxId, name, complete: complete || false }
            ]
        },
        deleteList: (state, action) => {
            const {id} = action.payload;
            if(!id) return;
            state.lists = state.lists.filter((list) => list.id !== id)
        },
    },
});

export const { doneList, addList, deleteList } = todoSlice.actions;

export default todoSlice.reducer;