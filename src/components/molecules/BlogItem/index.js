import React from "react";
import { RegisterBg } from "../../../assets";
import { Button, Gap } from "../../atoms";
import "./blogItem.scss";
import { useNavigate } from "react-router-dom";

const BlogItem = () => {
  let navigate = useNavigate();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author</p>
        <p className="body">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum".
        </p>
        <Gap height={20} />
        <Button title="View Detail" onClick={() => navigate("/detail-blog")} />
      </div>
    </div>
  );
};

export default BlogItem;
