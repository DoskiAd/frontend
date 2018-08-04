import {combineReducers} from 'redux';
import categories from './categories.js';
import items from './items.js';
import categoryFilter from './categoryFilter.js';
import page from './page.js';
import numOfPages from './numOfPages.js';
import paginationBlock from './paginationBlock.js';
import gridView from './gridView.js';

export default combineReducers({
  categories,
  items,
  categoryFilter,
  page,
  numOfPages,
  paginationBlock,
  gridView
});
