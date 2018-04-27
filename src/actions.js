import debounce from 'lodash/debounce';

export const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY';
export function setActiveCategory(id) {
  return {
    type: SET_ACTIVE_CATEGORY,
    id,
  };
}

export const REQUEST_PAGE = 'REQUEST_PAGE';
export function requestPage() {
  return {
    type: REQUEST_PAGE,
  };
}

export const RECEIVE_PAGE = 'RECEIVE_PAGE';
export function receivePage(posts) {
  return {
    type: RECEIVE_PAGE,
    posts,
  };
}

export const RESET_PAGE = 'RESET_PAGE';
export function resetPage() {
  return {
    type: RESET_PAGE,
  };
}

const fetchPageCache = {};
export const fetchPage = (endpoint, id) => async (dispatch) => {
  if (id === null) {
    dispatch(setActiveCategory(null));
    dispatch(resetPage());
    return;
  }

  dispatch(requestPage());
  dispatch(setActiveCategory(id));

  const url = `${endpoint}?categories=${id}&per_page=99&orderby=title&order=asc`;

  if (url in fetchPageCache) {
    dispatch(receivePage(fetchPageCache[url]));
    return;
  }

  const response = await fetch(url);
  const posts = await response.json();
  dispatch(receivePage(posts));
};

export const CHANGE_SEARCH_TERM = 'CHANGE_SEARCH_TERM';
export function changeSearchTerm(searchTerm) {
  return {
    type: CHANGE_SEARCH_TERM,
    searchTerm,
  };
}

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export function receiveSearchResults(posts) {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    posts,
  };
}

const searchCache = {};
const search = (dispatch, url) =>
  fetch(url)
    .then(response => response.json())
    .then((posts) => {
      searchCache[url] = posts;
      dispatch(receiveSearchResults(posts));
    });
const debouncedSearch = debounce(search, 200);
export function runSearch(endpoint, searchTerm) {
  return (dispatch) => {
    dispatch(changeSearchTerm(searchTerm));

    const url = `${endpoint}?search=${searchTerm}&per_page=99`;

    if (url in searchCache) {
      return dispatch(receiveSearchResults(searchCache[url]));
    }

    return debouncedSearch(dispatch, url);
  };
}
