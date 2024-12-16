import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  const lists = useSelector((state) => state.lists);
  const [name, setName] = useState("");
  const [complete, setCompolete] = useState(false);
  const inputText = (e) => {
    setName(e.target.value);
  };

  const dispatch = useDispatch();
  const addList = () => {
    if (!name) return;

    setCompolete(false);

    dispatch({
      type: "ADD_LIST",
      payload: {
        name,
        complete,
      },
    });
    setName('');
  };
  const doneList = (name) => {
    dispatch({ type: "DONE_LIST", payload: name });
  };
  const deleteList = (name) => {
    dispatch({ type: "DELETE_LIST", payload: name });
  };

  return (
    <div>
      <h1>ReduxでTodoリスト作成</h1>
      <input type="text" value={name} onChange={inputText} />
      <button onClick={addList}>追加</button>
      <h2>未完了のTodoリスト</h2>
      <ul>
        {lists
          .filter((list) => list.complete === false)
          .map((list, index) => (
            <div key={index}>
              {list.name}
              <button onClick={() => doneList(list.name)}>完了</button>
              <button onClick={() => deleteList(list.name)}>削除</button>
            </div>
          ))}
      </ul>

      <h2>完了したのTodoリスト</h2>
      <ul>
        {lists
          .filter((list) => list.complete === true)
          .map((list, index) => (
            <li key={index}>{list.name}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
