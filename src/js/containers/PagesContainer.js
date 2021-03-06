import React from 'react';
import {connect} from 'react-redux';
import PaginationBtn from '../components/PaginationBtn.js';
import {setItemsByPage} from '../middleware/thunks.js';
import {setPaginationBlock} from '../actions/index.js';

const maxBlock = (maxPages, pagesPerBlock) => {
  return Math.floor((maxPages - 1)/pagesPerBlock);
}

const PagesContainer = (props) => {
  let pages = [
    <PaginationBtn key="0"
      value="Назад"
      disabled={props.curBlock == 0}
      callback={() => {
        props.setPaginationBlock(props.curBlock - 1);
      }} />
  ];
  for(let i = 1 + props.curBlock*props.pagesPerBlock;
    i <= props.numOfPages &&
    i <= (props.curBlock + 1)*props.pagesPerBlock;
    i++
  ){
    pages.push(
      <PaginationBtn key={i}
        value={i}
        disabled={i == props.curPage}
        callback={() => {
          props.setPage(i);
        }} />
    );
  }
  pages.push(
    <PaginationBtn key="last"
      value="Дальше"
      disabled={props.curBlock == maxBlock(props.numOfPages, props.pagesPerBlock)}
      callback={() => {
        props.setPaginationBlock(props.curBlock + 1);
      }} />
  )
  return pages;
}

const mapStateToProps = (state) => {
  return {
    curPage: state.page,
    numOfPages: state.numOfPages,
    curBlock: state.paginationBlock.current,
    pagesPerBlock: state.paginationBlock.pagesPerBlock
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPaginationBlock: (block) => dispatch(setPaginationBlock(block)),
    setPage: (page) => dispatch(setItemsByPage(page))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PagesContainer);
