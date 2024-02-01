import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import BASE_URL from "../apis/Config";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  const navigate = useNavigate();

  const createNewPost = async (event) => {
    event.preventDefault();

    const data = new FormData();

    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);

    const response = await fetch(`${BASE_URL}/post`, {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      setRedirect(true);
      navigate("/blogs");
    }
  };

  return (
    <div className="container px-4 mx-auto my-8">
      <form
        onSubmit={createNewPost}
        className="max-w-md p-6 mx-auto bg-white rounded-md shadow-md"
      >
        <input
          type="title"
          placeholder="Title"
          className="w-full p-2 mb-4 border rounded-md border-neutral300 focus:outline-none focus:border-primary03"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <input
          type="summary"
          placeholder="Summary"
          className="w-full p-2 mb-4 border rounded-md border-neutral300 focus:outline-none focus:border-primary03"
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
        />
        <input
          type="file"
          className="w-full p-2 mb-4 border rounded-md border-neutral300 focus:outline-none focus:border-primary03"
          onChange={(ev) => setFiles(ev.target.files)}
        />
        <ReactQuill
          theme="snow"
          className="mb-4 border rounded-md border-neutral300"
          value={content}
          onChange={(newValue) => setContent(newValue)}
        />
        <button
          className="w-full py-2 text-white rounded-md bg-primary03 hover:bg-primary02 focus:outline-none"
          // onClick={createNewPost}
        >
          Create a blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
