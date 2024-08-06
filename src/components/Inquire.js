import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../asset/scss/a/Inquire.scss"; // Update the path to the SCSS file

const Inquire = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your logic to save the inquiry
    console.log("Title:", title);
    console.log("Content:", content);
    navigate("/community");
  };

  return (
    <div className="inquire">
      <h2>문의하기</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">글 제목</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">글 내용</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">문의하기</button>
      </form>
    </div>
  );
};

export default Inquire;