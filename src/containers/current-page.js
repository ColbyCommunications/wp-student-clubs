import { connect } from 'react-redux';
import Page from '../components/page';

const mapStateToProps = (state, ownProps) => ({
  posts: state.search.searchTerm.length ? state.search.posts : state.page.posts,
  fetching: state.page.fetching || state.search.fetching,
  pageOne: ownProps.pageOne,
  searchTerm: state.search.searchTerm,
  activeCategory: state.categories.activeCategory,
});

const CurrentPage = connect(mapStateToProps)(Page);

export default CurrentPage;
