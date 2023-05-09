import React from "react";
import Post from "./Post/Post";
import MyPostForm from "./MyPostForm";


const MyPosts = (props) => {

    let posts = props.profilePage.posts.map(p => <Post message={p.message} likes={p.likes}/>)


    let addPost = (values) => {
        props.addPost(values.postMessage)
    }

    return (
        <div>

            <div>My post</div>
            <MyPostForm onSubmit={addPost}/>

            {posts}
        </div>
    );
}


export default MyPosts;