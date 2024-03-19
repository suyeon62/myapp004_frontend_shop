import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditInfo = () => {
  const navigate = useNavigate();
  console.log("EditInfo");

  const [members, setMembers] = useState({
    memberEmail: "",
    memberPass: "",
    memberName: "",
    memberPhone: "",
  });

  const { memberEmail, memberPass, memberName, memberPhone } = members;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("Authorization"),
    },
  };

  const handleValueChange = (e) => {
    setMembers({ ...members, [e.target.name]: e.target.value });
  };

  const info = async () => {
    await axios
      .get(`/member/editinfo/${localStorage.memberEmail}`, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    info();
  }, []);

  return <div>회원수정</div>;
};

export default EditInfo;
