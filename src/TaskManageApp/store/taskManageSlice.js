import { createSlice } from "@reduxjs/toolkit";

export const taskManageSlice = createSlice({
  name: "taskManage",
  initialState: {
    // ログイン状態を保持
    loginState: false,
    // タスクリスト
    taskList: [
      {
        id: 1,
        taskName: "メールチェック",
        detail: `A社、B社`,
        created: "2024-12-12",
      },
      {
        id: 2,
        taskName: "資料作成",
        detail: "A社、B社",
        created: "2024-12-11",
      },
      {
        id: 3,
        taskName: "個別対応",
        detail: "A社、B社",
        created: "2024-12-12",
      },
    ],
  },
  reducers: {
    // ログイン
    login: (state) => {
      state.loginState = true;
    },
    // ログアウト
    logout: (state) => {
      state.loginState = false;
    },
    // １タスクのtaskNameとdetailを更新
    editTask: (state, action) => {
        const {id, taskName, detail} = action.payload
        const task = state.taskList.find((task) => task.id === id);
        if(task) {
            task.taskName = taskName;
            task.detail = detail;
        }
    },
  },
});

export const { login, logout, editTask } = taskManageSlice.actions;
export default taskManageSlice.reducer;