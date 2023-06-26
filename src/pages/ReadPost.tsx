import { IPost } from "../components/types";

type Props = {
  onClose: () => void;
  data: IPost;
}

export default function ReadPost(props:Props) {
  const { onClose, data } = props;

  return (
    <div className="bg-slate-900 absolute left-0 top-0">
    <div id="myPost" className="z-40 w-screen h-screen m-0 flex justify-center items-center">
      <div className="bg-zinc-100 p-5 flex justify-center h-2/3 flex-wrap w-2/3 overflow-scroll">
        <div className="flex w-full bg-slate-300 flex-wrap justify-center">
          <span className="cursor-pointer text-xl text-right w-full px-10 py-5" onClick={onClose}>&times;</span>
          <div className="w-full p-3">
            <label>Title: {data.postTitle}</label>
          </div>
          <div className="w-full p-3">
            <label>Body: {data.postBody}</label>
          </div>
          <div className="w-full p-3">
            <label>Current Mood: {data.currentMood}</label>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}