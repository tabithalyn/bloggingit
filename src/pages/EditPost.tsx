/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { IPost } from "../components/types";

type Props = {
  data: IPost;
  onBackBtnClick: () => void;
  onUpdateClick: (data:IPost) => void;
}

export default function EditPost(props: Props) {
  const { data, onBackBtnClick, onUpdateClick } = props;

  const [postTitle, setPostTitle] = useState(data.postTitle);
  const [postBody, setPostBody] = useState(data.postBody);
  const [currentMood, setCurrentMood] = useState(data.currentMood);

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

    const updatedData:IPost = {
      id: data.id,
      postTitle: postTitle,
      postBody: postBody,
      currentMood: currentMood
    }
    onUpdateClick(updatedData);
    onBackBtnClick();
  }

  return (
    <div className="w-full bg-blue-50">
      <div>
        <input
          type="button"
          value="&larr;"
          onClick={onBackBtnClick}
          className="px-4 py-3 bg-black text-white rounded-lg cursor-pointer hover:bg-gray-700 absolute left-5 top-5"
        />
      </div>
      <h3 className="w-full text-center text-2xl py-6">Update Post</h3>
      <form onSubmit={onSubmitBtnClick} className="text-center flex justify-evenly flex-wrap h-full">
        <div className="w-full flex flex-wrap items-center justify-center">
          <label className="w-full">Edit Title: </label>
          <input
            type="text"
            value={postTitle}
            onChange={onTitleChange}
            className="p-2 m-1 w-5/6 bg-slate-300 rounded-lg"
          />
        </div>
        <div className="w-full flex flex-wrap items-center justify-center">
          <label className="w-full">Edit Body: </label>
          <textarea
            rows={6}
            value={postBody}
            onChange={onBodyChange}
            className="p-5 m-2 w-5/6 bg-white rounded-lg"
          />
        </div>
        <div className="mb-6 w-full">
          <label>Edit Current Mood:</label>
          <input
            type="text"
            value={currentMood}
            onChange={onMoodChange}
            className="p-2 m-2 w-2/12 bg-slate-200 rounded-lg"
          />
        </div>
        <div>
          <input type="submit" value="Update Post" className="px-4 py-3 rounded-lg bg-black text-white ml-2 cursor-pointer hover:bg-gray-700" />
        </div>
      </form>
    </div>
  );
}