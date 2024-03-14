import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { boardActions } from "../../toolkit/actions/board_action";

const BoardWrite = () => {
  const dispatch = useDispatch();

  const navigator = useNavigate();

  const [inputs, setInputs] = useState({
    subject: "",
    content: "",
    filename: null,
  });

  //할당을 통해 subject로 접근 가능 (inputs.subject와 같이 접근하지 x)
  const { subject, content, filename } = inputs;

  const handleValueChange = (e) => {
    // let nextState = {};
    // nextState[e.target.name] = e.target.value;
    // setInputs({ ...inputs, ...nextState });
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  //첨부파일
  const handleFileChange = (e) => {
    e.preventDefault();
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.files[0] };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("content", content);

    if (filename != null) formData.append("filename", filename);

    console.log("formData", subject, content);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    await dispatch(boardActions.getBoardWrite(formData, config));

    setInputs({
      subject: "",
      content: "",
      filename: null,
    });

    navigator(`/board/list/1`);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <table>
          <tbody>
            <tr>
              <th>글쓴이</th>
              <td>
                <input type="text" readOnly />
              </td>
            </tr>
            <tr>
              <th width="20%" align="center">
                제목
              </th>
              <td>
                <input
                  type="text"
                  name="subject"
                  size="40"
                  onChange={handleValueChange}
                  //   placeholder={num !== undefined ? "답변" : null}
                />
              </td>
            </tr>
            <tr>
              <th width="20%" align="center">
                내용
              </th>
              <td>
                <textarea
                  name="content"
                  cols="40"
                  rows="13"
                  onChange={handleValueChange}
                ></textarea>
              </td>
            </tr>
            <tr>
              <th width="20%" align="center">
                첨부파일
              </th>
              <td>
                <input
                  type="file"
                  name="filename"
                  id="filepath"
                  onChange={handleFileChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Link className="btn btn-primary" to={`/board/list/1`}>
          리스트
        </Link>
        <input type="submit" className="btn btn-primary" value="등록" />
      </form>
    </>
  );
};

export default BoardWrite;
