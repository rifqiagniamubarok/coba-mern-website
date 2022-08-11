import React from "react";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import "./register.scss";
import { useNavigate } from "react-router-dom";

const Regsiter = () => {
  let navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="register-bg" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full Name" Placeholder="Full Name" />
        <Gap height={18} />
        <Input label="Email" Placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" Placeholder="Password" />
        <Gap height={50} />
        <Button title="Register" onClick={() => navigate("/")} />
        <Gap height={100} />
        <Link title="Kembali ke Login" onClick={() => navigate("/login")} />
      </div>
    </div>
  );
};

export default Regsiter;
