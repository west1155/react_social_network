import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
      <div className={s.item}>
          <img alt='' src={'https://previews.123rf.com/images/panyamail/panyamail1809/panyamail180900343/109879063-user-avatar-icon-sign-profile-symbol.jpg'}></img>
          {props.message}
          <div><span>like{props.likes}</span></div>
      </div>
    );

}

export default Post;