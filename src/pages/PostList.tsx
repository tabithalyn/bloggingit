import { useState } from "react";
import { IPost } from "../components/types";
import ReadPost from "./ReadPost";

type Props = {
  list: IPost[];
  onDeleteClick: (data:IPost) => void;
  onEdit: (data:IPost) => void;
}

export default function PostList(props:Props) {
  const { list, onDeleteClick, onEdit } = props;

  const [showPost, setShowPost] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IPost | null);

  const viewPost = (data:IPost) => {
    setDataToShow(data);
    setShowPost(true);
  }

  const onCloseModal = () => setShowPost(false);

  return (
    <div>
      <article>
        <h3 className="w-full text-center text-2xl px-10 font-bold">Post List</h3>
      </article>
      <table className="w-full mt-10">
        <tbody className="flex flex-wrap">
          {list.map((post) => {
            return (
              <tr key={post.id} className="flex justify-center items-center flex-wrap w-1/3">
                <td scope="col" className="bg-zinc-500 w-11/12 p-2">{post.postTitle}</td>
                <td scope="col" className="bg-zinc-200 w-11/12 h-20 p-2">{post.postBody}</td>
                <td scope="col" className="bg-zinc-800 text-zinc-100 w-11/12 p-2">{post.currentMood}</td>
                <td className="w-11/12 bg-slate-200">
                  <div className="flex justify-center">
                    <input
                      type="button"
                      value="View"
                      onClick={() => viewPost(post)}
                      className="px-5 py-2 ml-2 cursor-pointer text-white bg-slate-950 hover:bg-slate-700"
                    />
                    <input
                      type="button"
                      value="Edit"
                      onClick={() => onEdit(post)}
                      className="px-5 py-2 ml-2 cursor-pointer text-white bg-slate-950 hover:bg-slate-700"
                    />
                    <input
                      type="button"
                      value="Delete"
                      onClick={() => onDeleteClick(post)}
                      className="px-5 py-2 ml-2 cursor-pointer text-white bg-slate-950 hover:bg-slate-700"
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showPost && dataToShow !== null && (
        <ReadPost onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
}