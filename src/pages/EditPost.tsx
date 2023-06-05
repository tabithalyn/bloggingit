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
    <div className="w-full">
      <div>
        <h3>Update Post</h3>
      </div>
      <form onSubmit={onSubmitBtnClick}>
        <div>
          <label>Edit Title: </label>
          <input
            type="text"
            value={postTitle}
            onChange={onTitleChange}
          />
        </div>
        <div>
          <label>Edit Body: </label>
          <input
            type="text"
            value={postBody}
            onChange={onBodyChange}
          />
        </div>
        <div>
          <label>Edit Current Mood:</label>
          <input type="text" value={currentMood} onChange={onMoodChange} />
        </div>
        <div>
          <input
            type="button"
            value="Back"
            onClick={onBackBtnClick}
          />
          <input type="submit" value="Update Post" />
        </div>
      </form>
    </div>
  );
}