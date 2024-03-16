import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import BASE_URL from "../apis/Config";

const CreateNews = () => {
  const [loading, setLoading] = useState(false);

  const [tag, setTag] = useState("");
  const [date, setDate] = useState("");
  const [headline, setHeadline] = useState("");
  const [subheadline, setSubheadline] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [redirect, setRedirect] = useState(false);

  const navigate = useNavigate();

  const createNewsItem = async (event) => {
    event.preventDefault();
    setLoading(true);

    const data = new FormData();

    data.set("tag", tag);
    data.set("date", date);
    data.set("headline", headline);
    data.set("subheadline", subheadline);
    data.set("content", content);
    data.set("coverImage", coverImage[0]);

    const response = await fetch(`${BASE_URL}/news/postnews`, {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      setRedirect(true);
      navigate("/news");
    }
  };

  return (
    <div className="container px-4 mx-auto my-8">
      <form
        onSubmit={createNewsItem}
        className="max-w-md p-6 mx-auto bg-white rounded-md shadow-md"
      >
        <input
          type="tag"
          placeholder="Tag: 1-2word"
          className="w-full p-2 mb-4 border rounded-md border-neutral300 focus:outline-none focus:border-primary03"
          value={tag}
          onChange={(ev) => setTag(ev.target.value)}
          required
        />
        <input
          type="string"
          placeholder="EventDate egformat: 12-March-2019"
          className="w-full p-2 mb-4 border rounded-md border-neutral300 focus:outline-none focus:border-primary03"
          value={date}
          onChange={(ev) => setDate(ev.target.value)}
          required
        />
        <input
          type="headline"
          placeholder="Headline: 4-6 words"
          className="w-full p-2 mb-4 border rounded-md border-neutral300 focus:outline-none focus:border-primary03"
          value={headline}
          onChange={(ev) => setHeadline(ev.target.value)}
          required
        />
        <input
          type="subheadline"
          placeholder="Subheadline: 1-sentence"
          className="w-full p-2 mb-4 border rounded-md border-neutral300 focus:outline-none focus:border-primary03"
          value={subheadline}
          onChange={(ev) => setSubheadline(ev.target.value)}
          required
        />

        <input
          type="file"
          className="w-full p-2 mb-4 border rounded-md border-neutral300 focus:outline-none focus:border-primary03"
          onChange={(ev) => setCoverImage(ev.target.files)}
          required
        />
        <ReactQuill
          theme="snow"
          className="mb-4 border rounded-md border-neutral300"
          value={content}
          onChange={(newValue) => setContent(newValue)}
          required
        />
        <button
          className="w-full py-2 text-white rounded-md bg-primary03 hover:bg-primary02 focus:outline-none"
          disabled={loading}
          // onClick={createNewPost}
        >
          {loading ? "Creating a new NewsItem ..." : "Created a newsItem"}
        </button>
      </form>
    </div>
  );
};

export default CreateNews;
