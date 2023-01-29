import React from "react";
import Post from "./Post/Post";



const MyPosts = (props) => {

    let posts = props.profilePage.posts.map(p => <Post message={p.message} likes={p.likes}/>)

    window.posts = props.profilePage
    let newPostHere = React.createRef()

    let addPost = () => {
        props.addPost();
        newPostHere.current.value = "";
    }

    let onChange = () => {
        let text = newPostHere.current.value
        props.updateNewPostText(text)

    }


    return (
        <div>
            <div>My post</div>
            <textarea onChange={onChange} ref={newPostHere} value={props.newPostText}></textarea>
            <div>
                <button onClick={addPost}>AddPost</button>
            </div>

            {posts}
        </div>
    );
}


export default MyPosts;