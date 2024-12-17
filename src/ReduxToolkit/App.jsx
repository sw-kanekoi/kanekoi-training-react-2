import { useSelector, useDispatch } from 'react-redux';
import { doneList, addList, deleteList } from './store/todoSlice';
import { useState } from 'react';

function App() {
  const lists = useSelector((state) => state.todos.lists);
  console.log("lists :",lists)
  const [name, setName] = useState("");
  const initialComplete = false;
  const inputText = (e) => {
    setName(e.target.value);
  };
  const dispatch = useDispatch();
  return (
    <div>
      <h1>ReduxでTodoリスト作成</h1>
        <h2>Todo作成</h2>
          <input type="text" value={name} onChange={inputText} /> 
          <button onClick={() => dispatch(addList({name: name, complete: initialComplete}))}>
            追加
          </button>
        <h2>Todoリスト</h2>
        <ul>
          {lists
            .filter((list) => list.complete === false)
            .map((list, index) => (
              <div key={index}>
                {list.name}
                <button onClick={() => dispatch(doneList({name: list.name}))}>
                  完了
                </button>
                <button onClick={() => dispatch(deleteList({id: list.id}))}>
                  削除
                </button>
              </div>
            ))}
        </ul>
        <h2>完了したTodoリスト</h2>
        <ul>
          {lists
            .filter((list) => list.complete === true)
            .map((list, index) => (
              <div key={index}>{list.name}</div>
            ))}
        </ul>
    </div>
  );
}

export default App;