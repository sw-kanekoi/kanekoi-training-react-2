// import React from "react";
import { useSelector } from "react-redux";

// ここはuseSelectorを使用したコンポーネント

function Count() {

    const count = useSelector((state) => state.countReducer.count);
    const posts = useSelector((state) => state.postsReducer.posts);
    return (
        <>
            <div>Countコンポーネント：{count}</div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            aaaaaaa
        </>
    );
}

export default Count;