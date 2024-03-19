import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("Authorization");
    localStorage.removeItem("memberEmail");
    localStorage.removeItem("memberName");
    localStorage.removeItem("isLogin");
    localStorage.clear();
    window.location.replace("/");
    //navigate("/");
  });
};

export default Logout;
