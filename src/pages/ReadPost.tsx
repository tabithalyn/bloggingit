import { IPost } from "../components/types";
import parse from 'html-react-parser';

type Props = {
  onClose: () => void;
  data: IPost;
}

export default function ReadPost(props:Props) {
  const { onClose, data } = props;

  return (
    <div className="bg-slate-900 left-0 top-0 overflow-hidden fixed w-full h-full">
    <div id="myPost" className="z-40 w-full h-full m-0 flex justify-center items-center">
      <div className="bg-zinc-100 p-5 flex justify-center h-2/3 flex-wrap w-2/3 overflow-y-auto overflow-x-hidden">
        <div className="flex w-full bg-slate-300 flex-wrap justify-center">
          <p className="cursor-pointer text-sm text-right w-2/3 px-10 py-5 mr-3 hover:text-slate-300 fixed" onClick={onClose}>
            <span className="bg-slate-400 px-3 py-2 outline outline-slate-500 rounded">&larr;</span>
          </p>
          <div className="w-full p-3 mt-5">
            <label
              className="text-4xl"
            >{data.postTitle}</label>
          </div>
          <div className="w-full p-5">
            <label className="space-y-4">{parse(data.postBody)}</label>
          </div>
          {data.currentMood ? (
            <div className="w-full p-3 bg-slate-400 text-center text-sm ">
              <label><span className="bg-slate-600 text-slate-200 p-2 text-[9px] mr-4">MOOD</span> {data.currentMood}</label>
            </div>
          ) : null}
        </div>
      </div>
    </div>
    </div>
  );
}