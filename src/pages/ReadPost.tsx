import { IPost } from "../components/types";

type Props = {
  onClose: () => void;
  data: IPost;
}

export default function ReadPost(props:Props) {
  const { onClose, data } = props;

  return (
    <div id="myPost" className="z-40 w-screen h-screen absolute top-0 left-0">
      <div className="z-40 bg-zinc-100 relative p-5">
        <span className="cursor-pointer absolute top-8 right-10 text-xl" onClick={onClose}>&times;</span>
        <h1>Blog</h1>
        <div>
          <label>Title: {data.postTitle}</label>
        </div>
        <div>
          <label>Body: {data.postBody}</label>
        </div>
        <div>
          <label>Current Mood: {data.currentMood}</label>
        </div>
      </div>
    </div>
  );
}