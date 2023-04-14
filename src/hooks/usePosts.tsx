import React from "react";
import { useRecoilState } from "recoil";
import { postState } from "../atoms/postAtom";

const usePosts = () => {
  const [postStateValue, setPostsStateValue] = useRecoilState(postState);

  const onVote = async () => {};

  const onSelectPost = () => {};

  const onDeletePost = async () => {};

  return {
    postStateValue,
    setPostsStateValue,
    onVote,
    onDeletePost,
    onSelectPost,
  };
};
export default usePosts;
