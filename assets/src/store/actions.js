/**
 * Redux store action creators.
 */

export const SET_CONTENT = 'SET_CONTENT';
export const setContent = ( content ) => ( { type: SET_CONTENT, content } );

export const SET_IS_LOADING = 'SET_IS_LOADING';
export const setIsLoading = ( isLoading ) => ( { type: SET_IS_LOADING, isLoading } );

export const SET_POSTS = 'SET_POSTS';
export const setPosts = ( query, posts ) => ( { type: SET_POSTS, query, posts } );

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const setSearchTerm = ( searchTerm ) => ( { type: SET_SEARCH_TERM, searchTerm } );

export const SET_CATEGORIES = 'SET_CATEGORIES';
export const setCategories = ( categories ) => ( { type: SET_CATEGORIES, categories } );

export const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY';
export const setActiveCategory = ( activeCategory ) => ( { type: SET_ACTIVE_CATEGORY, activeCategory } );
