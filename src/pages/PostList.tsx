import { useState } from "react";
import { IPost } from "../components/types";
import ReadPost from "./ReadPost";
import parse from 'html-react-parser';

type Props = {
  list: IPost[];
  onDelete: (postId:string) => void;
  onEdit: (data:IPost) => void;
}

export default function PostList({ list, onDelete, onEdit }:Props) {
  const [showPost, setShowPost] = useState(false);
  const [dataToShow, sepataToShow] = useState(null as IPost | null);

  const viewPost = (data:IPost) => {
    sepataToShow(data);
    setShowPost(true);
  }
  const onClosePost = () => setShowPost(false);

  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <>
    <div className="flex flex-wrap py-3 px-0 justify-center">
      {list.map((post) => (
        <div key={post.postId} className="w-full xs:mx-0 sm:w-3/4 lg:w-3/12 md:w-5/12 mx-2 mb-3 p-0 flex flex-wrap">
        <div className="flex justify-center items-center flex-wrap mt-2 w-full">
          <p className="bg-slate-200 w-full px-2 py-4 flex justify-center rounded-t-md"><span className="overflow-hpostIdden whitespace-nowrap">{post.postTitle}</span></p>
          <div className="bg-slate-100 w-full h-24 p-2 overflow-hidden text-sm">{parse(post.postBody)}</div>
          {post.currentMood ? (
            <p className="bg-white text-zinc-500 w-full px-2 py-4 text-[10px]"><span className="bg-slate-400 text-slate-200 p-2 text-[9px] mr-2 uppercase rounded">Mood</span> {post.currentMood}</p>
          ) : null}
          <div className="w-full bg-slate-100 rounded-b-md py-3">
            <p className="flex justify-center">
              <input
                type="button"
                value="View"
                onClick={() => viewPost(post)}
                className="p-2 ml-2 cursor-pointer text-white bg-slate-600 text-[9px] hover:bg-slate-700 uppercase rounded"
              />
              <input
                type="button"
                value="Edit"
                onClick={() => onEdit(post)}
                className="p-2 ml-2 cursor-pointer text-white bg-slate-600 text-[9px] hover:bg-slate-700 uppercase rounded"
              />
              <button
                type="button"
                value={post.postId}
                onClick={() => setConfirmDelete(true)}
                className="p-2 ml-2 cursor-pointer text-white bg-slate-600 text-[9px] hover:bg-slate-700 uppercase rounded"
              >Delete</button>
            </p>
          </div>
        </div>
        {
          confirmDelete ? (
            <div className="absolute left-0 top-0 w-screen h-screen z-20 flex items-center justify-center text-center">
              <div className="w-2/6 h-[35%] shadow-2xl flex justify-center items-center flex-wrap bg-white rounded-lg">
                <svg className="mx-auto my-2 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <span className="w-full text-center text-lg">Are you sure you want to delete this post?</span>
                <div className="flex gap-3 justify-center">
                  <button
                    className="bg-gray-400 py-3 px-6 rounded hover:outline hover:outline-gray-400 hover:bg-white transition-all"
                    onClick={() => setConfirmDelete(false)}
                  >Cancel</button>
                  <button
                    className="bg-red-600 py-3 px-6 rounded hover:outline hover:outline-red-600 hover:bg-white transition-all"
                    onClick={() => {
                      onDelete((post.postId).toString());
                      setConfirmDelete(false);
                    }}
                  >Delete</button>
                </div>
              </div>
            </div>
          ) : null
        }
        </div>
      ))}
    </div>
    
    {showPost && dataToShow !== null && (
      <ReadPost onClose={onClosePost} data={dataToShow} />
    )}
    </>
  );
}