import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { boardActions } from "../../toolkit/actions/board_action";

const BoardView = () => {
  const { num } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const boardDetail = useSelector((state) => state.board.boardDetail);
  const pv = useSelector((state) => state.board.pv);

  const config = {
    headers: {
      Authorization: localStorage.getItem("Authorization"),
    },
  };

  useEffect(() => {
    dispatch(boardActions.getBoardDetail(num, config));
  }, []);

  // 다운로드
  const handleDownload = async () => {
    const boardFile = await dispatch(
      boardActions.getBoardDownload(boardDetail.upload, config)
    );

    const fileName = boardDetail.upload.substring(
      boardDetail.upload.indexOf("_") + 1
    );
    console.log(fileName);

    const url = window.URL.createObjectURL(new Blob([boardFile]), {
      type: "application/octet-stream",
    });

    console.log("url:", url);
    const link = document.createElement("a"); //<a></a>
    link.href = url;
    link.setAttribute("download", fileName);
    link.style.cssText = "display:none";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  // 삭제버튼
  const handelDelete = async (e) => {
    e.preventDefault();
    dispatch(boardActions.getBoardDelete(num, config));
    navigate(`/board/list/${pv.currentPage}`);
  };

  return (
    <>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <tbody>
          <tr>
            <th width="20%">글쓴이</th>
            <td>{boardDetail.memberEmail}</td>
          </tr>
          <tr>
            <th width="20%">조회수</th>
            <td>{boardDetail.readcount}</td>
          </tr>
          <tr>
            <th>제목</th>
            <td calSpan="3">{boardDetail.subject}</td>
          </tr>
          <tr>
            <th>메일</th>
            <td calSpan="3">{boardDetail.memberEmail}</td>
          </tr>
          <tr>
            <th>내용</th>
            <td calSpan="3" style={{ whiteSpace: "pre-line" }}>
              {boardDetail.content}
            </td>
          </tr>
          <tr>
            <th>첨부파일</th>
            <td calspan="3">
              <button onClick={handleDownload}>
                {boardDetail.upload &&
                  boardDetail.upload.substring(
                    boardDetail.upload.indexOf("-") + 1
                  )}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <Link className="btn btn-primary" to={`/board/list/${pv.currentPage}`}>
        리스트
      </Link>
      <Link className="btn btn-primary" to={`/board/write/${num}`}>
        답변
      </Link>

      {localStorage.getItem("memberEmail") === boardDetail.memberEmail ? (
        <>
          <Link className="btn btn-primary" to={`/board/update/${num}`}>
            수정
          </Link>
          <button className="btn btn-primary" onClick={handelDelete}>
            삭제
          </button>
        </>
      ) : null}
    </>
  );
};

export default BoardView;
