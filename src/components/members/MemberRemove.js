import axios from "axios";
import React, { useEffect } from "react";

const MemberRemove = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("Authorization"),
    },
  };

  const memberRemove = async () => {
    await axios
      .delete(`/member/delete/${localStorage.getItem("memberEmail")}`, config)
      .then((response) => {
        console.log(response);
        localStorage.removeItem("Authorization");
        localStorage.removeItem("memberEmail");
        localStorage.removeItem("memberName");
        localStorage.removeItem("isLogin");
        localStorage.clear();
        window.location.replace("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    memberRemove();
  }, []);
};

export default MemberRemove;
