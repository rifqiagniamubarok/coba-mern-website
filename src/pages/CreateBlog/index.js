import React from "react";
import { Input, Button, Upload, TextArea, Gap, Link } from "../../components";
import "./createBlog.scss";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  let navigate = useNavigate();
  return (
    <div className="blog-post">
      <Link title="kembali" onClick={() => navigate("/")} />
      <p className="title">Create New Blog Post</p>
      <Input label="Post Title" />
      <Upload />
      <TextArea />
      <Gap height={20} />
      <div className="button-action">
        <Button title="save" />
      </div>
    </div>
  );
};

export default CreateBlog;
