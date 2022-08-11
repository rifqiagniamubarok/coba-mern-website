import React from "react";
import { LoginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="login-bg" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" Placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" Placeholder="Password" />
        <Gap height={50} />
        <Button title="Login" onClick={() => navigate("/")} />
        <Gap height={100} />
        <Link
          title="Belum punhya akun, silahkan daftar"
          onClick={() => navigate("/register")}
        />
      </div>
    </div>
  );
};

export default Login;
