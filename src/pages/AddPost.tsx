/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { IPost } from "../components/types";

type Props = {
  onBackBtnClick: () => void;
  onSubmitClick: (data:IPost) => void;
}

export default function AddPost(props: Props) {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [postId, setPostId] = useState(0);
  const [currentMood, setCurrentMood] = useState("");

  let id = 0;

  const { onBackBtnClick, onSubmitClick } = props;

  const onSubmitBtnClick = (e:any) => {
    e.preventDefault();

    const data:IPost = {
      postId: postId,
      postTitle: postTitle,
      postBody: postBody,
      currentMood: currentMood
    }
    id++;
    onSubmitClick(data);
    onBackBtnClick();
  }

  return (
    <div className="w-full bg-blue-50">
      <input
          type="button"
          value="&larr;"
          onClick={onBackBtnClick}
          className="px-4 py-3 bg-black text-white rounded-lg cursor-pointer hover:bg-gray-700 absolute left-5 top-5"
        />
      <h3 className="w-full text-center text-2xl py-6">New Post</h3>
      <form
        onSubmit={onSubmitBtnClick}
        className="text-center flex justify-evenly flex-wrap h-full"
      >
      <div className="w-full flex flex-wrap items-center justify-center">
        <label className="w-full">Title</label>
        <input
          type="text"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          className="p-2 m-1 w-5/6 bg-slate-400 rounded-lg"
          required
        />
      </div>
      <div className="w-full flex flex-wrap items-center justify-center">
        <label className="w-full">Body</label>
        <textarea
          rows={6}
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          className="p-5 m-2 w-5/6 bg-white rounded-lg"
        />
      </div>
      <div className="mb-6 w-full">
        <label>Current Mood </label>
        <input
          type="text"
          value={currentMood}
          onChange={(e) => setCurrentMood(e.target.value)}
          className="p-2 m-2 w-2/12 bg-slate-300 rounded-lg"
        />
      </div>
      <div>
        <input type="submit" value="Add Post" className="px-4 py-3 rounded-lg bg-black text-white ml-2 cursor-pointer hover:bg-gray-700" onClick={() => {
          setPostId(id++);
          console.log(id);
        }} />
      </div>
      </form>
    </div>
  );
}