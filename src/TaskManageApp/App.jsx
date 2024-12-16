import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  useParams,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, editTask } from "./store/taskManageSlice";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min.js";

// 親コンポーネント
function App() {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.taskManage.loginState);

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <>
      <h1>タスク管理アプリ</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {loginState ? <List /> : <Redirect to="/login" />}
          </Route>
          <Route
            path="/edit/:id"
            render={(props) =>
              loginState ? <Edit {...props} /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/login"
            render={(props) => <Login {...props} onClick={handleLogin} />}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

// ログイン画面
function Login({ onClick }) {
  return (
    <>
      <h2>ログイン画面</h2>
      <label>
        <p>
          ユーザID : <input type="text" name="userId" />
        </p>
      </label>
      <label>
        <p>
          パスワード: <input type="text" name="userId" />
        </p>
      </label>
      <button onClick={onClick}>
        <NavLink to="/">ログイン</NavLink>
      </button>
    </>
  );
}

// タスク一覧画面
function List() {
  const lists = useSelector((state) => state.taskManage.taskList);
  return (
    <>
      <Logout />
      <h2>タスク一覧画面</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Index</th>
            <th>Task Name</th>
            <th>Detail</th>
            <th>Created</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {lists.map((list, index) => {
            return (
              <tr key={index}>
                <td>{list.id}</td>
                <td>{list.taskName}</td>
                <td>{list.detail}</td>
                <td>{list.created}</td>
                <td>
                  <NavLink to={`/edit/${list.id}`}>編集</NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
// タスク詳細（編集）画面
function Edit() {
  const { id } = useParams(); // URLのParamを取得
  const lists = useSelector((state) => state.taskManage.taskList);
  const list = lists.find((list) => list.id === Number(id));
  const [taskName, setTaskName] = useState(list.taskName);
  const [detail, setDetail] = useState(list.detail);
  const dispatch = useDispatch();

  return (
    <>
      <Logout />
      <h2>タスク編集画面</h2>
      <div>
        タスク内容：
        <input
          type="text"
          name="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div>
        タスク詳細：
        <input
          type="text"
          name="detail"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        ></input>
      </div>
      <button>
        <NavLink exact to="/">
          戻る
        </NavLink>
      </button>
      <button
        onClick={() =>
          dispatch(
            editTask({ id: list.id, taskName: taskName, detail: detail })
          )
        }
      >
        <NavLink exact to="/">
          更新
        </NavLink>
      </button>
    </>
  );
}

// ログアウト用ボタン
function Logout() {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(logout())}>
        <NavLink to="/login">ログアウト</NavLink>
      </button>
    </>
  );
}

export default App;
