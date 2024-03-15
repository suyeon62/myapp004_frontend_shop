import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PageNavigation = ({ getBoardList }) => {
  //store에 저장된 값을 사용할 때 useSelector
  const pv = useSelector((state) =>
    state.board.pv ? state.board.pv : { currentPage: 1 }
  );

  const pageNumbers = [];
  for (let i = pv.startPage; i <= pv.endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="...">
      <ul className="pagination">
        {/* 이전 */}
        <li className={pv.startPage <= 1 ? "page-item disabled" : "page-item"}>
          <span
            className="page-link"
            onClick={() => getBoardList(pv.startPage - pv.blockPage)}
          >
            &laquo;
          </span>
        </li>

        {/* 페이지번호 출력 */}
        {pageNumbers &&
          pageNumbers.map((pnum, idx) => {
            return (
              <li key={pnum}>
                <span
                  onClick={() => getBoardList(pnum)}
                  className={
                    pv.currentPage === pnum
                      ? "page-item active page-link"
                      : "page-link"
                  }
                >
                  {pnum}
                </span>
              </li>
            );
          })}
        {/* 다음 */}
        <li
          className={
            pv.endPage >= pv.totalPage ? "page-item disabled" : "page-item"
          }
        >
          <span
            className="page-link"
            onClick={() => getBoardList(pv.startPage + pv.blockPage)}
          >
            &raquo;
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigation;
