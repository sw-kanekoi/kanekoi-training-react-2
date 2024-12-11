import { useSelector, useDispatch } from "react-redux";
import Post from './components/Post';

function AppRedux1() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({type: 'INCREASE_COUNT'});
  };
  const decrease = () => {
    dispatch({type: 'DECREASE_COUNT'});
  };
  return (
  <div>
    <h1>Redux Learn</h1>
    <p>Count: {count}</p>
    <button onClick={increase}>Up</button>
    <button onClick={decrease}>Down</button>
    
    <hr />

    <h1>Redux Learn</h1>
    <Post />
  </div>
  );
}

export default AppRedux1;