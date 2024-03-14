import axios from "axios";
import { boardReducers } from "../createSlice/board_createSlice";

function getBoardList(currentPage) {
  console.log(currentPage);
  return async (dispatch) => {
    const data = await axios
      .get(`/board/list/${currentPage}`)
      .then((response) => response.data);
    console.log(data);
    dispatch(boardReducers.getBoardList({ data }));
  };
}

//게시판 글쓰기
function getBoardWrite(formData, config) {
  return async () => {
    await axios
      .post(`/board/write`, formData, config)
      .then((response) => response.data);
  };
}

//상세페이지
function getBoardDetail(num) {
  return async (dispatch) => {
    const data = await axios
      .get(`/board/view/${num}`)
      .then((response) => response.data);
    dispatch(boardReducers.getBoardDetail({ data }));
  };
}

export const boardActions = { getBoardList, getBoardWrite, getBoardDetail };
