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
  const [currentMood, setCurrentMood] = useState("");

  const { onBackBtnClick, onSubmitClick } = props;

  const onTitleChange = (e:any) => {
    setPostTitle(e.target.value);
  }
  const onBodyChange = (e:any) => {
    setPostBody(e.target.value);
  }
  const onMoodChange = (e:any) => {
    setCurrentMood(e.target.value);
  }

  const onSubmitBtnClick = (e:any) => {
    e.preventDefault();

    const data:IPost = {
      id: new Date().toJSON().toString(),
      postTitle: postTitle,
      postBody: postBody,
      currentMood: currentMood
    }
    onSubmitClick(data);
    onBackBtnClick();
  }

  // const titleRef = useRef<HTMLInputElement>(null);
  // const bodyRef = useRef<HTMLTextAreaElement>(null);
  // const moodRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full">
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
          onChange={onTitleChange}
          className="p-2 m-1 w-5/6 bg-slate-400"
          required
        />
      </div>
      <div className="w-full flex flex-wrap items-center justify-center">
        <label className="w-full">Body</label>
        <textarea
          rows={6}
          value={postBody}
          onChange={onBodyChange}
          className="p-5 m-2 w-5/6 bg-slate-200"
          required
        />
      </div>
      <div className="mb-6 w-full">
        <label>Current Mood </label>
        <input
          type="text"
          value={currentMood}
          onChange={onMoodChange}
          
          className="p-2 m-2 w-2/12 bg-slate-300"
        />
      </div>
      <div>
        <input
          type="button"
          value="Back"
          onClick={onBackBtnClick}
          className="p-5 bg-black text-white cursor-pointer hover:bg-gray-700"
        />
        <input type="submit" value="Add Post" className="p-5 bg-black text-white ml-2 cursor-pointer hover:bg-gray-700" />
      </div>
      </form>
    </div>
  );
}