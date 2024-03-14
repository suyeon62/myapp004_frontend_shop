import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const BoardView = () => {
  const { num } = useParams();
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const boardDetail = useSelector((state) => state.board.boardDetail);
  const pv = useSelector((state) => state.board.pv);

  useEffect();

  return <div>상세페이지</div>;
};

export default BoardView;
