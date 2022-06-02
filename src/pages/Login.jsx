import React from "react";
import AuthForm from "../components/Auth/AuthForm";
import { useAuth } from "../Contexts/AuthContextProvider";
// import AuthForm from "../components/Auth/AuthForm";

const Login = () => {
  const { loginUser } = useAuth();
  return (
    <div>
      <AuthForm
        title={"Login"}
        btnText={"Login"}
        link={"/register"}
        linkText={"Don't have an accoun? Register!"}
        handleSave={loginUser}
      />
    </div>
  );
};

export default Login;
