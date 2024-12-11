import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../store/index';

const Post = () => {
  // Reduxを使わない方法
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //     const getPosts = async () => {
  //         const res  = await
  //         fetch('https://jsonplaceholder.typicode.com/posts');
  //         const data = await res.json();
  //         setPosts(data);
  //     };
  //     getPosts();
  // }, []);

  // Reduxを使う方法
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      {/* <p>Count : {count}</p> */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
