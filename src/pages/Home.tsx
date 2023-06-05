import { useEffect, useState } from "react";
import { Page, IPost } from "../components/types";
import AddPost from './AddPost';
import EditPost from './EditPost';
import PostList from './PostList';

export default function Home() {
  const [postList, setPostList] = useState([] as IPost[]);
  const [shownPage, setShownPage] = useState<Page>("list");
  const [dataToEdit, setDataToEdit] = useState({} as IPost);

  useEffect(() => {
    const listInString = window.localStorage.getItem("postList");
    if (listInString) {
      _setPostList(JSON.parse(listInString));
    }
  }, []);

  const onAddPostClick = () => {
    setShownPage(Page.Add);
  }
  const showListPage = () => {
    setShownPage(Page.List);
  }

  const _setPostList = (list:IPost[]) => {
    setPostList(list);
    window.localStorage.setItem("postList", JSON.stringify(list));
  }

  const addPost = (data:IPost) => {
    _setPostList([...postList, data]);
  }
  const deletePost = (data:IPost) => {
    const indexToDelete = postList.indexOf(data);
    const tempList = [...postList];

    tempList.splice(indexToDelete, 1);
    _setPostList(tempList);
  }
  const editPostData = (data:IPost) => {
    setShownPage(Page.Edit);
    setDataToEdit(data);
  }

  const updateData = (data:IPost) => {
    const filteredData = postList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = postList.indexOf(filteredData);
    const tempData = [...postList];
    tempData[indexOfRecord] = data;
    _setPostList(tempData);
  };

  return (
    <div className="mx-auto w-full">
    <header className="w-full p-10 text-center bg-gray-500">
      <h1>React: Simple CRUD Application</h1>
    </header>

    <section>
      <div>
      {shownPage === Page.List && (
        <div className="w-full p-10 bg-slate-500">
        <input
          type="button"
          value="Add Post"
          onClick={onAddPostClick}
          className="p-5 bg-black text-white cursor-pointer hover:bg-neutral-700"
        />
        <PostList
          list={postList}
          onDeleteClick={deletePost}
          onEdit={editPostData}
        />
        </div>
      )}
      {shownPage === Page.Add && (
        <AddPost
          onBackBtnClick={showListPage}
          onSubmitClick={addPost}
        />
      )}
      {shownPage === Page.Edit && (
        <EditPost
          data={dataToEdit}
          onBackBtnClick={showListPage}
          onUpdateClick={updateData}
        />
      )}
      </div>
    </section>
    </div>
  );
}