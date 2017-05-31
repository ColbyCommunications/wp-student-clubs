const REST_BASE = 'www.colby.edu/studentactivities/wp-json/wp/v2/';

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export function requestCategories() {
  return {
    type: REQUEST_CATEGORIES,
  };
}

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
  };
}

export function fetchCategories() {
  return (dispatch) => {
    dispatch(requestCategories());

    return fetch(`${REST_BASE}categories`)
      .then((response) => response.json())
      .then((categories) => dispatch(receiveCategories(categories)));
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

const fetchPageCache = {};
export function fetchPage(id) {
  return (dispatch) => {
    dispatch(requestPage());

    const url = `${REST_BASE}student-organization?categories=${id}`;

    if (url in fetchPageCache) {
      return dispatch(receivePage(fetchPageCache[url]));
    }

    return fetch(url).then((response) => response.json()).then((posts) => {
      fetchPageCache[url] = posts;
      dispatch(receivePage(posts));
    });
  };
}
